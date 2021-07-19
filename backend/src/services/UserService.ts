import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { ProfessionalService } from './ProfessionalService';
import { ClientService } from './ClientService';
import * as bcrypt from 'bcrypt';
import { Client } from '../entities/Client';
import { Professional } from '../entities/Professional';
import * as jsonwebtoken from 'jsonwebtoken';
require('dotenv/config');

interface UserInterface {
    name: string;
    email: string;
    password: string;
    type: number;
    avatar: number;

    phone?: string

    crm_crp?: string;
    speciality?: string;
}

interface UpdateUserInterface {
    email?: string;
    password?: string;
    id: string;
    avatar?: number;
}

class UserService {
    private userRepository: Repository<User>;
    private clientService: ClientService;
    private professionalService: ProfessionalService;

    constructor() {
        this.userRepository = getRepository(User);

        this.clientService = new ClientService();

        this.professionalService = new ProfessionalService();
    }

    async createUser({ name, email, password, type, avatar, phone, crm_crp, speciality }: UserInterface) {

        const userRegistered = await this.userRepository.findOne({ where: { email } });

        if (userRegistered) {
            throw new Error("Email já cadastrado!")
        }

        password = await bcrypt.hash(password,10);

        const newUser = this.userRepository.create({ email, password, type, avatar });
        await this.userRepository.save(newUser);

        if (type === 0) {
            try {
                await this.clientService.createClient({ name, phone, user_id: newUser.id })
            } catch (err) {
                await this.userRepository.delete(newUser);
                throw new Error(err.message);
            }

        } else {
            try {
                await this.professionalService.createProfessional({ name, crm_crp, speciality, user_id: newUser.id, association_code: "" });
            } catch (err) {
                await this.userRepository.delete(newUser);
                throw new Error(err.message);
            }
        }
    }


    async updateUser({ id, ...values }: UpdateUserInterface) {

        const userRegistered = await this.userRepository.findOne({ where: { id } });

        if (userRegistered) {

            await this.userRepository.save({
                ...userRegistered,
                ...values
            })
        }
        else {
            throw new Error("Usuário não encontrado!")
        }

    }

    async getUser(id) {
        const userRegistered = await this.userRepository.findOne({ where: { id } });

        if (userRegistered) {
            if (userRegistered.type == 0) {
                const clientRegistered = await this.clientService.getClient(id);
                if (clientRegistered) {
                    return { id: userRegistered.id, email: userRegistered.email, type: userRegistered.type, avatar: userRegistered.avatar, client: clientRegistered };
                }
                else {
                    throw new Error("Cliente não encontrado!")
                }
            }
            else {
                const professionalRegistered = await this.professionalService.getProfessional(id);
                if (professionalRegistered) {
                    return { id: userRegistered.id, email: userRegistered.email, type: userRegistered.type, avatar: userRegistered.avatar, professional: professionalRegistered };
                }
                else {
                    throw new Error("Profissional não encontrado!")
                }
            }
        }
        else {
            throw new Error("Usuário não encontrado!")
        }
    }

    async login(email: string, password: string) {

        const userRepository = await getRepository(User);

        const user = await userRepository.findOneOrFail({ email })
            .catch(() => {
                throw new Error("Usuário não encontrado.")
            })

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) throw new Error("Senha incorreta.");

        let specificUser: any = null;

        if (user.type == 0) {
            const clientRepository = getRepository(Client);
            specificUser = await clientRepository.findOne({ where: { user_id: user.id } });
        } else {
            const professionalRepository = getRepository(Professional);
            specificUser = await professionalRepository.findOne({ where: { user_id: user.id } });
        }

        const accessToken = await jsonwebtoken.sign({ id: specificUser.id }, process.env.JWT_SECRET || 'secret');

        return {
            accessToken,
            email: user.email,
            name: specificUser.name,
            nickname: specificUser.nickname,
            speciality: specificUser.speciality,
            crm_crp: specificUser.crm_crp,
            phone: specificUser.phone,
            type: user.type,
            avatar: user.avatar
        }

    }

}

export { UserService }

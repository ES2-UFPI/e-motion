import { getRepository, Repository } from 'typeorm';
import { Professional } from "../entities/Professional";
import { Client } from '../entities/Client';
import { UserService } from './UserService';

interface ProfessionalInterface {
    name: string;
    nickname?: string;
    crm_crp: string;
    speciality: string;
    association_code?: string;
    user_id: string;
}

interface UpdateProfessionalInterface {
    name?: string;
    nickname?: string;
    crm_crp?: string;
    speciality?: string;
    association_code?: string;
    email?: string;
    password?: string;
    id: string;
}

class ProfessionalService {
    private professionalRepository: Repository<Professional>;
    private clientRepository: Repository<Client>;

    constructor() {
        this.professionalRepository = getRepository(Professional);
        this.clientRepository = getRepository(Client);
    }


    async getClients(professional_id: string): Promise<Client[]>{

        const clients = await this.clientRepository.find({
            where:{professional_id},
            relations:['user']
        });
     
        return clients.map((client)=>{ return {
            ...client,
            user:{
                ...client.user,
                password:""
            }
        }});
    }

    async createProfessional({ name, crm_crp, speciality, user_id, association_code }: ProfessionalInterface) {
        const professionalRegistered = await this.professionalRepository.findOne({ where: { crm_crp } });

        if (professionalRegistered) {
            throw new Error("Crm ou Crp já cadastrado!")
        }

        const newProfessional = this.professionalRepository.create({ name, crm_crp, speciality, user_id, association_code });
        await this.professionalRepository.save(newProfessional);

    }

    async update({ name, nickname, crm_crp, speciality, association_code, email, password, id }: UpdateProfessionalInterface) {

        const professional = await this.professionalRepository.findOne({ 
            where:{id},
            relations: ['user'] 
        })

        const professional_new_values = { name, nickname, crm_crp, speciality, association_code }

        if (professional) {
            await this.professionalRepository.save({
                ...professional
                , ...professional_new_values
            });

            const userService = new UserService();

            await userService.updateUser({
                id: professional.user_id,
                email,
                password
            })
        } else
            throw new Error(`Profissional não encontrado`)

    }

    async getProfessional(user_id) {
        const professionalRegistered = await this.professionalRepository.findOne({ where: { user_id } });

        if (professionalRegistered) {
            return professionalRegistered;
        }
        else {
            throw new Error("Profissional não encontrado!")
        }
    }

    async getByCode(professional_code) {
        const professional = await getRepository(Professional).findOne({where: {association_code: professional_code}});
        if(professional)
            return professional.id;
        throw new Error('Profissional não encontrado.');
    }
}

export { ProfessionalService }
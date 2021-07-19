import { getRepository, Repository } from 'typeorm';
import { Client } from "../entities/Client";
import { UserService } from './UserService';


interface ClientInterface {
    name: string;
    phone: string;
    user_id: string;
}

interface UpdateClientInterface {
    name?: string;
    phone?: string;
    email?: string;
    password?: string;
    professional_id?: string;
    id: string;
    nickname?: string;
    avatar?: number;
}


class ClientService {
    private clientRepository: Repository<Client>;

    constructor() {
        this.clientRepository = getRepository(Client);
    }

    async createClient({ name, user_id, phone }: ClientInterface) {
        const newClient = this.clientRepository.create({ name, phone, user_id });

        await this.clientRepository.save(newClient);
    }

    async update({ id, email, password, name, professional_id, phone, nickname, avatar }: UpdateClientInterface) {

        const client = await this.clientRepository.findOne({ 
            where:{id}
            ,relations: ['user'] })
            
        const client_new_values = { name, professional_id, phone, nickname }

        if (client) {
            await this.clientRepository.save({
                ...client
                , ...client_new_values
            });

            const userService = new UserService();

            await userService.updateUser({
                id: client.user_id,
                email,
                password,
                avatar
            })
        } else
            throw new Error(`Cliente não encontrado`)

    }

    async getClient(user_id) {
        const clientRegistered = await this.clientRepository.findOne({ where: { user_id } });

        if (clientRegistered) {
            return clientRegistered;
        }
        else {
            throw new Error("Cliente não encontrado!")
        }
    }

}

export { ClientService }


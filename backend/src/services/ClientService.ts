import { getRepository, Repository } from 'typeorm';
import { Client } from "../entities/Client";


interface ClientInterface{
    name:string;
    phone:string;
    user_id:string;
}


class ClientService {
    private clientRepository: Repository<Client>;

    constructor() {
        this.clientRepository = getRepository(Client);
    }

    async createClient({name,user_id,phone}:ClientInterface) {
        const newClient =  this.clientRepository.create({name,phone,user_id}); 
        
        await this.clientRepository.save(newClient);
    }

}

export { ClientService }


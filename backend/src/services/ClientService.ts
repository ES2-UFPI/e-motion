import { getRepository, Repository } from 'typeorm';
import { Client } from "../entities/Client";
import { UserService } from './UserService';


interface ClientInterface{
    name:string;
    phone:string;
    user_id:string;
}

interface UpdateClientInterface{
    name?:string;
    phone?:string;
    email?:string;
    password?:string;
    professional_id?:string;
    id:string;
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

    async update({id,email,password,name,professional_id,phone}:UpdateClientInterface){

        const client =  await this.clientRepository.findOne({where:[{id}],relations:['user']})
        const client_new_values = {name,professional_id,phone}
        
        if(client){
            await this.clientRepository.save({
                ...client
                ,...client_new_values});

            const userService = new UserService();
            
            await userService.updateUser({
                id:client.user_id,
                email,
                password
            })
        }else
            throw new Error(`Cliente não encontrado`)

    }

}

export { ClientService }

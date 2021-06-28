import { Request, Response } from 'express'
import { ClientService } from '../services/ClientService';
import { UserService } from '../services/UserService';


interface ClientInterface{
    name?:string;
    email?:string;
    password?:string;
    phone?:string;
    professional_id?:string;
    id:string;
}

class ClientController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const {name,phone,email,password} = request.body;
            
            const clientService = new UserService();

            await clientService.createUser({name,phone,type:0,email,password})

            return response.status(200).json({ message:"Cliente criado com sucesso!"});
        } catch (error) {
            return response.status(400).json({ message:error.message });
        }
    }

    async update(request: Request, response: Response){
        try{
            const {name,phone,email,password,professional_id,id} = request.body as ClientInterface;

            const clientService = new ClientService();

            await clientService.update({name,phone,email,password,professional_id,id})

            return response.status(200).json({ message:"Cliente atualizado com sucesso!"});

        }catch(error){
            return response.status(400).json({ message:error.message });
        }

    }
}

export { ClientController }
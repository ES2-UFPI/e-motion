import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

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
}

export { ClientController }
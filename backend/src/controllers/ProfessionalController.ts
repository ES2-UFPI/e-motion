import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

class ProfessionalController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const {name,crm_crp,speciality,email,password} = request.body;
            
            const professionalService = new UserService();

            await professionalService.createUser({name,crm_crp,speciality,type:1,email,password})

            return response.status(200).json({ message:"Profissional criado com sucesso!"});
        } catch (error) {
            return response.status(400).json({ error: 'Um erro inesperado ocorreu. Tente novamente!',error_dev:error.message });
        }
    }

}

export { ProfessionalController }
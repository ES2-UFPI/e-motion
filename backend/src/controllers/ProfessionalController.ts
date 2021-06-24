import { Request, Response } from 'express'
import { ProfessionalService } from '../services/ProfessionalService';
import { UserService } from '../services/UserService';

class ProfessionalController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const {name,crm_crp,speciality,email,password} = request.body;
            
            const professionalService = new UserService();

            await professionalService.createUser({name,crm_crp,speciality,type:1,email,password})

            return response.status(200).json({ message:"Profissional criado com sucesso!"});
        } catch (error) {
            return response.status(400).json({message:error.message });
        }
    }

    async update(request: Request, response: Response){
        try{
            const {name,email,password,crm_crp,speciality,id,association_code} = request.body;

            const professionalService = new ProfessionalService();

            await professionalService.update({name,crm_crp,speciality,email,password,association_code,id})

            return response.status(200).json({ message:"Profissional atualizado com sucesso!"});

        }catch(error){
            return response.status(400).json({ message:error.message });
        }

    }

}

export { ProfessionalController }
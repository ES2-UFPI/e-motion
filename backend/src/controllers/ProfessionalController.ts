import { Request, Response } from 'express'
import { ProfessionalService } from '../services/ProfessionalService';
import { UserService } from '../services/UserService';
import { EmotionalReactionService } from '../services/EmotionalReactionService';

class ProfessionalController {

    async getClients(request: Request, response: Response) {
        try {

            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const professionalService = new ProfessionalService();

            const clients = await professionalService.getClients(user?.id);

            return response.status(200).json({clients});
        } catch(error) {
            return response.status(400).json({message: error.message});
        }
    }

    async getClientReactions(request: Request, response: Response) {
        try {
            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const { id } = request.params;

            const emotionalReactionService = new EmotionalReactionService();

            const emotionalReactions = await emotionalReactionService.listByUser(id);

            return response.json(emotionalReactions);

        } catch(error){
            return response.status(400).json({message: error.message});
        }
    }

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const {name,crm_crp,speciality,email,password, avatar} = request.body;
            
            const professionalService = new UserService();

            await professionalService.createUser({name,crm_crp,speciality,type:1,email,password, avatar})

            return response.status(200).json({ message:"Profissional criado com sucesso!"});
        } catch (error) {
            return response.status(400).json({message:error.message });
        }
    }

    async update(request: Request, response: Response){
        try{
            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });
            
            const {name,nickname,email,password,crm_crp,speciality,association_code} = request.body;

            const professionalService = new ProfessionalService();

            await professionalService.update({name,nickname,crm_crp,speciality,email,password,association_code,id: user?.id})

            return response.status(200).json({ message:"Profissional atualizado com sucesso!"});

        }catch(error){
            return response.status(400).json({ message:error.message });
        }

    }

}

export { ProfessionalController }
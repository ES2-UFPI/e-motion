import {Request,Response} from 'express'
import { EmotionalReactionService } from '../services/EmotionalReactionService';

class EmotionalReactionController{

    async index(request:Request,response:Response):Promise<Response>{
        try {
            const {client_id} = request.params;

            const  emotionalReactionService = new EmotionalReactionService();

            const emotionalReactions = await emotionalReactionService.listByUser(client_id);

            return response.json(emotionalReactions)

        } catch (error) {
            return response.status(400).json({ erro:error })
        }

    }


    

    
}

export {EmotionalReactionController}
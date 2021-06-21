import { Request, Response } from 'express'
import { EmotionalReactionService } from '../services/EmotionalReactionService';

class EmotionalReactionController {

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const { client_id } = request.params;

            const emotionalReactionService = new EmotionalReactionService();

            const emotionalReactions = await emotionalReactionService.listByUser(client_id);

            return response.json(emotionalReactions)

        } catch (error) {
            return response.status(400).json({ erro: error })
        }

    }


    async destroy(request: Request, response: Response): Promise<Response> {
        try {
            const { client_id, emotional_reaction_id } = request.params;

            const emotionalReactionService = new EmotionalReactionService();

            await emotionalReactionService.delete(client_id, emotional_reaction_id);

            return response.json({ message: "Deletada com sucesso!" })

        } catch (error) {
            return response.status(400).json({ erro: error })
        }

    }

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { client_id } = request.body;

            const emotionalReactionService = new EmotionalReactionService();

            const id = emotionalReactionService.create(client_id);

            return response.status(200).json({ id })
        } catch (error) {
            return response.status(400).json({ error: 'Um erro inesperado ocorreu. Tente novamente!' })
        }
    }

}

export { EmotionalReactionController }
import { Request, Response } from 'express'
import { EmotionalReaction } from '../entities/EmotionalReaction';
import { EmotionalReactionService } from '../services/EmotionalReactionService';

class EmotionalReactionController {

    async index(request: Request, response: Response): Promise<Response> {
        try {
            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const emotionalReactionService = new EmotionalReactionService();

            const emotionalReactions = await emotionalReactionService.listByUser(user?.id);

            return response.json(emotionalReactions)

        } catch (error) {
            return response.status(400).json({ erro: error })
        }

    }

    async getById(request: Request, response: Response): Promise<Response> {
        try {

            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const { id } = request.params;

            const emotionalReactionService = new EmotionalReactionService();

            const emotionalReaction = await emotionalReactionService.getById(id);

            return response.status(200).json({ emotionalReaction });
        } catch (err) {
            return response.status(400).json({ erro: err })
        }
    }


    async destroy(request: Request, response: Response): Promise<Response> {
        try {

            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const { id } = request.params;

            const emotionalReactionService = new EmotionalReactionService();

            await emotionalReactionService.delete(id);

            return response.json({ message: "Deletada com sucesso!" })

        } catch (error) {
            return response.status(400).json({ erro: error })
        }

    }

    async create(request: Request, response: Response): Promise<Response> {
        try {

            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });
            
            const emotionalReactionService = new EmotionalReactionService();

            const id = await emotionalReactionService.create(user?.id);

            return response.status(200).json({ id })
        } catch (error) {
            return response.status(400).json({ error: 'Um erro inesperado ocorreu. Tente novamente!' })
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try {
            const user = request.app.get('user');

            if(!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });
            
            const reaction_id = request.params['id'];

            const body: EmotionalReaction = request.body;

            const emotionalReactionService = new EmotionalReactionService();

            await emotionalReactionService.update(reaction_id, body);

            return response.status(200).json({ message: 'ok' });

        } catch(err) {
            return response.status(400).json({ error: 'Um erro inesperado ocorreu. Tente novamente!' })
        }
    }

}

export { EmotionalReactionController }
import { getRepository, Repository } from 'typeorm';
import { EmotionalReaction } from '../entities/EmotionalReaction';

class EmotionalReactionService {
    private emotionalReactionRepository: Repository<EmotionalReaction>;

    constructor() {
        this.emotionalReactionRepository = getRepository(EmotionalReaction);
    }

    async listByUser(client_id: string): Promise<EmotionalReaction[]> {

        const emotionalReactions = await this.emotionalReactionRepository.find({ where: { client_id } });

        return emotionalReactions;
    }


    async delete(client_id: string, emotional_reaction_id: string) {

        await this.emotionalReactionRepository.delete({ client_id, id: emotional_reaction_id });
    }

    async create(client_id: string): Promise<string> {
        try {
            return (await this.emotionalReactionRepository.insert({ client_id })).generatedMaps[0].id
        } catch (err) {
            console.log(err)
        }
    }

}

export { EmotionalReactionService }


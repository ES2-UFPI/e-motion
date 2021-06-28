import { getRepository, Repository, getConnection } from 'typeorm';
import { Client } from '../entities/Client';
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
        const client = await getRepository(Client).findOne(client_id);

        if (!client) throw new Error('Usuário não encontrado.');

        try {
            return (await this.emotionalReactionRepository.insert({ client_id })).generatedMaps[0].id;
        } catch (err) {
            // handle error
        }
    }

    async update(reaction_id: string, values: EmotionalReaction) {
        try {
            await this.emotionalReactionRepository.findOneOrFail({ id: reaction_id });

            await this.emotionalReactionRepository.update({ id: reaction_id }, values);

            return true;
        } catch (err) {
            throw new Error('Registro emocional não encontrado.')
        }
    }

}

export { EmotionalReactionService }


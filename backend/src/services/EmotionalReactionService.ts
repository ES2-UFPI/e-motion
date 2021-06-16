import { getRepository, Repository } from 'typeorm';
import { EmotionalReaction } from '../entities/EmotionalReaction';

class EmotionalReactionService{
    private emotionalReactionRepository:Repository<EmotionalReaction>;

    constructor(){
        this.emotionalReactionRepository = getRepository(EmotionalReaction);
    }
    
    async listByUser(client_id:string):Promise<EmotionalReaction[]>{

        const emotionalReactions = await this.emotionalReactionRepository.find({ where:{client_id} });

        return emotionalReactions;
    }

 

     
}

export {EmotionalReactionService}


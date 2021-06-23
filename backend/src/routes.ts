import {Router} from 'express';
import { EmotionalReactionController } from './controllers/EmotionalRecordController';

const routes = Router(); 

const emotionalReactionController = new EmotionalReactionController();

routes.get("/reactions/:client_id",emotionalReactionController.index);

routes.delete("/reactions/:client_id/:emotional_reaction_id",emotionalReactionController.destroy);

routes.post("/reactions/create/:client_id",emotionalReactionController.create);

routes.post("/reactions/update/:reaction_id",emotionalReactionController.update);

export {routes}
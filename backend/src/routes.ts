import {Router} from 'express';
import { EmotionalReactionController } from './controllers/EmotionalRecordController';
import { ProfessionalController } from './controllers/ProfessionalController';

const routes = Router(); 
const emotionalReactionController = new EmotionalReactionController();
const professionalController = new ProfessionalController();


routes.get("/reactions/:client_id",emotionalReactionController.index);

routes.delete("/reactions/:client_id/:emotional_reaction_id",emotionalReactionController.destroy);


routes.put("/update/:professional_id/:new_association_code",professionalController.update_association_code);


export {routes}
import {Router} from 'express';
import { ClientController } from './controllers/ClientController';
import { EmotionalReactionController } from './controllers/EmotionalRecordController';
import { ProfessionalController } from './controllers/ProfessionalController';

const routes = Router(); 

const emotionalReactionController = new EmotionalReactionController();
const professionalController = new ProfessionalController();
const clientController = new ClientController();


routes.post("/professionals",professionalController.create);
routes.post("/professionals/update",professionalController.update);


routes.post("/clients",clientController.create);
routes.post("/clients/update",clientController.update);

routes.get("/reactions/:client_id",emotionalReactionController.index);

routes.delete("/reactions/:client_id/:emotional_reaction_id",emotionalReactionController.destroy);

routes.post("/reactions/create/:client_id",emotionalReactionController.create);

routes.post("/reactions/update/:reaction_id",emotionalReactionController.update);

export {routes}
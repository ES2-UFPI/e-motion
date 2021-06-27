import { Router } from 'express';
import { ClientController } from './controllers/ClientController';
import { EmotionalReactionController } from './controllers/EmotionalRecordController';
import { ProfessionalController } from './controllers/ProfessionalController';
import { UserController } from './controllers/UserController';

const routes = Router();

const emotionalReactionController = new EmotionalReactionController();
const professionalController = new ProfessionalController();
const clientController = new ClientController();
const userController = new UserController();


routes.post("/professionals",professionalController.create);
routes.post("/professionals/update",professionalController.update);
routes.get("/professionals/clients/:professional_id", professionalController.getClients);

routes.post("/clients", clientController.create);
routes.post("/clients/update", clientController.update);

routes.get("/reactions/:client_id", emotionalReactionController.index);

routes.delete("/reactions/:client_id/:emotional_reaction_id", emotionalReactionController.destroy);

routes.post("/reactions/create/:client_id", emotionalReactionController.create);

routes.post("/reactions/update/:reaction_id", emotionalReactionController.update);

routes.get("/users/:user_id", userController.getUserById);

export { routes }
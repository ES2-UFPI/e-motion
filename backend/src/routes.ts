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
routes.put("/professionals",professionalController.update);
routes.get("/professionals/:id/clients", professionalController.getClients);

routes.post("/clients", clientController.create);
routes.put("/clients", clientController.update);
routes.get("/clients/:id/reactions", emotionalReactionController.index);
routes.post("/clients/:id/reactions", emotionalReactionController.create);

routes.get("/reactions/:id", emotionalReactionController.getById);
routes.put("/reactions/:id", emotionalReactionController.update);
routes.delete("/reactions/:id", emotionalReactionController.destroy);

routes.post("/users/authentication", userController.login);
routes.get("/users/:id", userController.getUserById);



export { routes }
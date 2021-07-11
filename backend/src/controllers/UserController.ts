import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

class UserController {

    async getUserById(request: Request, response: Response) {
        try {
            const userCtx = request.app.get('user');

            if(!userCtx?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const userService = new UserService();

            const user = await userService.getUser(userCtx?.id);

            return response.status(200).json({ user });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async login(request: Request, response: Response) {
        try {
            const { email, password, type } = request.body;
            const userService = new UserService();

            const userInformations = userService.login(email, password, type);

            return response.status(200).json({ userInformations });

        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

}

export { UserController }
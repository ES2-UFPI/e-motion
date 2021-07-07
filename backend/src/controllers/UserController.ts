import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

class UserController {

    async getUserById(request: Request, response: Response) {
        try {
            const { user_id } = request.params;
            const userService = new UserService();

            const user = await userService.getUser(user_id);

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
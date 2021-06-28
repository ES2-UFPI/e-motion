import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

class UserController {

    async getUserById(request: Request, response: Response) {
        try {
            const { user_id } = request.params;
            const userService = new UserService();

            const user = await userService.getUser(user_id);

            console.log(user);
            return response.status(200).json({ user });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

}

export { UserController }
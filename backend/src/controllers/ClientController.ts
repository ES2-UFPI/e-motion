import { Request, Response } from 'express'
import { ClientService } from '../services/ClientService';
import { UserService } from '../services/UserService';


interface ClientInterface {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    professional_id?: string;
    avatar?: number;
}

class ClientController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, email, password, avatar } = request.body;

            const clientService = new UserService();

            await clientService.createUser({ name, phone, type: 0, email, password, avatar })

            return response.status(200).json({ message: "Cliente criado com sucesso!" });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const user = request.app.get('user');

            if (!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const { name, phone, email, password, professional_id } = request.body as ClientInterface;

            const clientService = new ClientService();

            await clientService.update({ name, phone, email, password, professional_id, id: user.id })

            return response.status(200).json({ message: "Cliente atualizado com sucesso!" });

        } catch (error) {
            return response.status(400).json({ message: error.message });
        }

    }

    async unbindFromProfessional(request: Request, response: Response) {
        try {
            const user = request.app.get('user');

            if (!user?.id) return response.status(400).json({ message: 'Usuário não autenticado' });

            const client_id = request.body['id'];

            const clientService = new ClientService();

            await clientService.update({ professional_id: null, id: client_id });

            return response.status(200).json({ message: "Cliente desvinculado com sucesso!" });

        }
        catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export { ClientController }
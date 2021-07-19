import { Request, Response } from 'express'
import { ClientService } from '../services/ClientService';
import { ProfessionalService } from '../services/ProfessionalService';
import { UserService } from '../services/UserService';


interface ClientInterface {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    professional_code?: string;
    avatar?: number;
}

class ClientController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, email, password, avatar } = request.body;

            const clientService = new UserService();

            await clientService.createUser({ name, phone, type: 0, email, password, avatar })

            const userInformations = await clientService.login(email, password);

            return response.status(200).json({ accessToken: userInformations.accessToken});

        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async update(request: Request, response: Response) {
        try {

            const user = request.app.get('user');

            if (!user?.id) return response.status(400).json({ erro: 'Usuário não autenticado' });

            const { name, phone, email, password, professional_code } = request.body as ClientInterface;

            const professionalService = new ProfessionalService();

            let professional_id = null;

            if(professional_code){
                try {
                    professional_id = await professionalService.getByCode(professional_code);
                } catch (error) {
                    return response.status(400).json({ message: error.message });
                }
            }

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
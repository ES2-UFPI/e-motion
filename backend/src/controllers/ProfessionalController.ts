import {Request,Response} from 'express'
import { ProfessionalService } from '../services/ProfessionalService';

class ProfessionalController{

    async update_association_code(request:Request,response:Response):Promise<Response>{
        try {
            const {professional_id,new_association_code} = request.params;

            const  provessionalService = new ProfessionalService();

            const updateSucess = await provessionalService.updateAssociationCode(professional_id,new_association_code);

            return response.json({sucess:updateSucess})

        } catch (error) {
            return response.status(400).json({ erro:error })
        }

    }


 


}

export {ProfessionalController}
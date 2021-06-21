import { getRepository, Repository } from 'typeorm';
import { Professional } from '../entities/Professional';

class ProfessionalService{
    private professionalRepository:Repository<Professional>;

    constructor(){
        this.professionalRepository = getRepository(Professional);
    }
    
    async updateAssociationCode(professional_id:string,new_code:string):Promise<Boolean>{
        const professional = await this.professionalRepository.findOneOrFail({ where:{id:professional_id} });
        const professional_with_code_repeated = await this.professionalRepository.findOne({ where:{association_code:new_code} });
        
        if(professional_with_code_repeated){
            professional_with_code_repeated.association_code = "";
            this.professionalRepository.save(professional_with_code_repeated);
        }

        professional.association_code = new_code;

        this.professionalRepository.save(professional)

        return true;
    }

    
 

     
}

export {ProfessionalService}


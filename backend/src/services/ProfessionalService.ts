import { getRepository, Repository } from 'typeorm';
import { Professional } from "../entities/Professional";

interface ProfessionalInterface{
    name:string;
    crm_crp:string;
    speciality:string;
    association_code?:string;
    user_id:string;
}

class ProfessionalService {
    private professionalRepository: Repository<Professional>;

    constructor() {
        this.professionalRepository = getRepository(Professional);
    }

    async createProfessional({name,crm_crp,speciality,user_id,association_code}:ProfessionalInterface) {
        const professionalRegistered = await this.professionalRepository.findOne({ where: { crm_crp } });

        if(professionalRegistered){
            throw new Error("Crm ou Crp já cadastrado!")
        }

        const newProfessional =  this.professionalRepository.create({name,crm_crp,speciality,user_id,association_code}); 
        await this.professionalRepository.save(newProfessional);
            
    }
}

export { ProfessionalService }
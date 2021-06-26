import { getRepository, Repository } from 'typeorm';
import { Professional } from "../entities/Professional";
import { UserService } from './UserService';

interface ProfessionalInterface{
    name:string;
    crm_crp:string;
    speciality:string;
    association_code?:string;
    user_id:string;
}

interface UpdateClientInterface{
    name?:string;
    crm_crp?:string;
    speciality?:string;
    association_code?:string;
    email?:string;
    password?:string;
    id:string;
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

    async update({name,crm_crp,speciality,association_code,email,password,id}:UpdateClientInterface){

        const professional =  await this.professionalRepository.findOne({where:[{id}],relations:['user']})
        const professional_new_values = {name,crm_crp,speciality,association_code}
        
        if(professional){
            await this.professionalRepository.save({
                ...professional
                ,...professional_new_values});

            const userService = new UserService();
            
            await userService.updateUser({
                id:professional.user_id,
                email,
                password
            })
        }else
            throw new Error(`Profissional não encontrado`)

    }
}

export { ProfessionalService }
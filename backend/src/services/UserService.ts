import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { ProfessionalService } from './ProfessionalService';
import { ClientService } from './ClientService';

interface UserInterface{
    name:string;
    email:string;
    password:string;
    type:number;

    phone?:string

    crm_crp?:string;
    speciality?:string;
}

class UserService {
    private userRepository: Repository<User>;
    private clientService:ClientService;
    private professionalService:ProfessionalService;

    constructor() {
        this.userRepository = getRepository(User);
        
        this.clientService =  new ClientService();

        this.professionalService = new ProfessionalService();
    }

    async createUser({name,email,password,type,phone,crm_crp,speciality}:UserInterface) {

        const userRegistered = await this.userRepository.findOne({ where: { email } });

        if(userRegistered){
            throw new Error("Email já cadastrado!")
        }

        const newUser =  this.userRepository.create({email,password,type});      
        await this.userRepository.save(newUser);

        if(type === 0){
            await this.clientService.createClient({name,phone,user_id:newUser.id})
        }else{
            await this.professionalService.createProfessional({name,crm_crp,speciality,user_id:newUser.id,association_code:""}); 
        }
    }

}

export { UserService }
import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { EmotionalReaction } from "../src/entities/EmotionalReaction";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { UserService } from "../src/services/UserService";
import * as bcrypt from 'bcrypt';

beforeEach(() => {
    return createConnection({
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        entities: [Professional, Client, User, EmotionalReaction],
        synchronize: true,
        logging: false
    });
});

afterEach(() => {
    let conn = getConnection();
    return conn.close();
});


test("store a User and recognize him/her as a Client or a Professional", async () => {

    const professional = {
        name: "Maria Soares",
        email: "maria_soares@gmail.com",
        speciality: "psicologia forense",
        crm_crp: "071.122.811-79",
        association_code: "#322T",
        password: "mariapsicologia",
        type: 1,
        avatar: 1
    }

    const userp_id = (await getRepository(User).insert(professional)).generatedMaps[0].id;
    const professional_id = (await getRepository(Professional).insert({ name: professional.name, speciality: professional.speciality, crm_crp: professional.crm_crp, association_code: professional.association_code, user_id: userp_id })).generatedMaps[0].id;

    const client = {
        name: "Joe",
        email: "joe2@gmail.com",
        phone: "(86)8988-8989",
        password: "joe123",
        type: 0,
        avatar: 1
    }

    const userc_id = (await getRepository(User).insert(client)).generatedMaps[0].id;
    (await getRepository(Client).insert({ name: client.name, phone: client.phone, user_id: userc_id, professional_id }));

    const userService = new UserService();

    const professionalUser = (await userService.getUser(userp_id));
    expect(professionalUser).not.toBeUndefined();
    expect(professionalUser.email).toBe(professional.email);
    expect(professionalUser.type).toBe(professional.type);
    expect(professionalUser.avatar).toBe(professional.avatar);
    expect(professionalUser.professional.name).toBe(professional.name);
    expect(professionalUser.professional.speciality).toBe(professional.speciality);
    expect(professionalUser.professional.crm_crp).toBe(professional.crm_crp);
    expect(professionalUser.professional.association_code).toBe(professional.association_code);

    const clientUser = (await userService.getUser(userc_id));
    expect(clientUser).not.toBeUndefined();
    expect(clientUser.email).toBe(client.email);
    expect(clientUser.type).toBe(client.type);
    expect(clientUser.avatar).toBe(client.avatar);
    expect(clientUser.client.name).toBe(client.name);
    expect(clientUser.client.phone).toBe(client.phone);

});

test('Login with existing client', async () => {

    const password = await bcrypt.hash('joe123', 10);

    const client = {
        name: "Joe",
        email: "joe2@gmail.com",
        phone: "(86)8988-8989",
        password,
        type: 0,
        avatar: 1,
    }

    const userc_id = (await getRepository(User).insert(client)).generatedMaps[0].id;
    await getRepository(Client).insert({ name: client.name, phone: client.phone, user_id: userc_id });

    const userService = new UserService();

    const user:any = await userService.login(client.email, 'joe123', 0);
    
    expect(user).not.toBeUndefined();
    expect(user.email).toBe(client.email);
    expect(user.name).toBe(client.name);
})

test('Login with existing professional', async () => {

    const password = await bcrypt.hash("mariapsicologia", 10);

    const professional = {
        name: "Maria Soares",
        email: "maria_soares@gmail.com",
        speciality: "psicologia forense",
        crm_crp: "071.122.811-79",
        association_code: "#322T",
        password,
        type: 1,
        avatar: 1
    }

    const user_id = (await getRepository(User).insert(professional)).generatedMaps[0].id;
    await getRepository(Professional).insert({ name: professional.name, speciality: professional.speciality, crm_crp: professional.crm_crp, association_code: professional.association_code, user_id });

    const userService = new UserService();

    const user:any = await userService.login(professional.email, "mariapsicologia", 1);
    
    expect(user).not.toBeUndefined();
    expect(user.email).toBe(professional.email);
    expect(user.name).toBe(professional.name);
})
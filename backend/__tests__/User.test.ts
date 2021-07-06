import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { EmotionalReaction } from "../src/entities/EmotionalReaction";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { UserService } from "../src/services/UserService";


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
        nickbame:"joezinho",
        crm_crp: "071.122.811-79",
        association_code: "#322T",
        password: "mariapsicologia",
        type: 1
    }

    const userp_id = (await getRepository(User).insert(professional)).generatedMaps[0].id;
    const professional_id = (await getRepository(Professional).insert({ name: professional.name, speciality: professional.speciality, crm_crp: professional.crm_crp, association_code: professional.association_code, user_id: userp_id })).generatedMaps[0].id;

    const client = {
        name: "Joe",
        email: "joe2@gmail.com",
        nickbame:"joezinho",
        phone: "(86)8988-8989",
        password: "joe123",
        type: 0
    }

    const userc_id = (await getRepository(User).insert(client)).generatedMaps[0].id;
    (await getRepository(Client).insert({ name: client.name, phone: client.phone, user_id: userc_id, professional_id }));

    const userService = new UserService();

    const professionalUser = (await userService.getUser(userp_id));
    expect(professionalUser).not.toBeUndefined();
    expect(professionalUser.email).toBe(professional.email);
    expect(professionalUser.type).toBe(professional.type);
    expect(professionalUser.professional.name).toBe(professional.name);
    expect(professionalUser.professional.speciality).toBe(professional.speciality);
    expect(professionalUser.professional.crm_crp).toBe(professional.crm_crp);
    expect(professionalUser.professional.association_code).toBe(professional.association_code);

    const clientUser = (await userService.getUser(userc_id));
    expect(clientUser).not.toBeUndefined();
    expect(clientUser.email).toBe(client.email);
    expect(clientUser.type).toBe(client.type);
    expect(clientUser.client.name).toBe(client.name);
    expect(clientUser.client.phone).toBe(client.phone);

});
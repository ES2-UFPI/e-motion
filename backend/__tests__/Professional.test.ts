import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { EmotionalReaction } from "../src/entities/EmotionalReaction";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { ProfessionalService } from "../src/services/ProfessionalService";
import { UserService } from "../src/services/UserService";


beforeEach(() => {
  return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Professional,Client,User,EmotionalReaction],
      synchronize: true,
      logging: false
  });
});

afterEach(() => {
  let conn = getConnection();
  return conn.close();
});


test("store a Professional and fetch it", async () => {

  const newProfessional = {
      name: "Joe",
      email:"joe2@gmail.com",
      speciality:"psicologia forense",
      crm_crp:"071.122.811-79",
      password:"joepsicologia",
      type:1,
      avatar: 1
  }

  const userService = new UserService();

  await userService.createUser(newProfessional)

  let joe = await getRepository(Professional).findOne({
      where: {
        crm_crp:"071.122.811-79"
      }
  });
  
  expect(joe.name).toBe("Joe");
});


test("store a Client and update it", async () => {

  const newProfessional = {
    name: "Joe",
    email:"joe2@gmail.com",
    speciality:"psicologia forense",
    crm_crp:"071.122.811-79",
    password:"joepsicologia",
    type:1,
    avatar: 1
  }

  
  const userService = new UserService();

  await userService.createUser(newProfessional);


  let joe = await getRepository(Professional).findOne({
      where: {
        crm_crp:"071.122.811-79"
      }
  });

  const professionalService = new ProfessionalService();

  await professionalService.update({id:joe.id, name:"Joe Atualizado",});

  let joe2 = await getRepository(Professional).findOne({
    where: {
      id:joe.id
    }
});

  
  expect(joe2.name).toBe("Joe Atualizado");
});

test("Fetch all clients from a professional", async () => {
  const professional = {
    name: "Maria Soares",
    email:"maria_soares@gmail.com",
    speciality:"psicologia forense",
    crm_crp:"071.122.811-79",
    association_code: "#322T",
    password:"mariapsicologia",
    type:1,
    avatar: 1
  }

  const userp_id = (await getRepository(User).insert(professional)).generatedMaps[0].id;
  const professional_id = (await getRepository(Professional).insert({name: professional.name, speciality: professional.speciality, crm_crp: professional.crm_crp, association_code: professional.association_code, user_id: userp_id})).generatedMaps[0].id;

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

  const professionalService = new ProfessionalService();

  const clients = await professionalService.getClients(professional_id);
  expect(clients).not.toBeUndefined();
  expect(clients[0].name).toBe(client.name);
  expect(clients[0].user.email).toBe(client.email);
  expect(clients[0].phone).toBe(client.phone);
  expect(clients[0].user.password).toBe(client.password);
  expect(clients[0].professional_id).toBe(professional_id);

});
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
      type:1
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
    type:1
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
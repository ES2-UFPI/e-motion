import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { EmotionalReaction } from "../src/entities/EmotionalReaction";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { ClientService } from "../src/services/ClientService";
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


test("store a Client and fetch it", async () => {

  const newClient = {
      name: "Joe",
      email:"joe2@gmail.com",
      phone:"(86)8988-8989",
      password:"doidinho123",
      type:0,
      avatar: 1
  }

  const userService = new UserService();

  await userService.createUser(newClient)

  let joe = await getRepository(Client).findOne({
      where: {
        name:"Joe"
      }
  });
  
  expect(joe.name).toBe("Joe");
});


test("store a Client and update it", async () => {

  const newClient = {
      name: "Joe",
      email:"joe2@gmail.com",
      phone:"(86)8988-8989",
      password:"doidinho123",
      type:0,
      avatar: 1
  }

  const userService = new UserService();

  await userService.createUser(newClient)

  let joe = await getRepository(Client).findOne({
      where: {
        name:"Joe"
      }
  });

  const clientService = new ClientService();

  await clientService.update({id:joe.id, name:"Joe Atualizado",phone:"(98)8988-8989"});

  let joe2 = await getRepository(Client).findOne({
    where: {
      name:"Joe Atualizado"
    }
});

  
  expect(joe2.phone).toBe("(98)8988-8989");
});
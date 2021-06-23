import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { UserService } from "../src/services/UserService";


beforeEach(() => {
  return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Professional,Client,User],
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
      type:0
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

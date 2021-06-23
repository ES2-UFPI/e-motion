import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";


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


test("store a Professional and fetch it", async () => {

  await getRepository(Professional).insert({
      name: "Joe",
      email:"joe@gmail.com",
      speciality:"psicologia forense",
      association_code:"1AS3T",
      crm_crp:"071.122.811-79"
  });

  let joe = await getRepository(Professional).find({
      where: {
          email: "joe@gmail.com"
      }
  });

  expect(joe[0].name).toBe("Joe");
});

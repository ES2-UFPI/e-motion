import { createConnection, getConnection, getRepository } from "typeorm";
import { Client } from "../src/entities/Client";
import { EmotionalReaction } from "../src/entities/EmotionalReaction";
import { Professional } from "../src/entities/Professional";
import { User } from "../src/entities/User";
import { EmotionalReactionService } from '../src/services/EmotionalReactionService';

beforeAll(() => {
    return createConnection({
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        entities: [EmotionalReaction, Client, User, Professional],
        synchronize: true,
        logging: false
    });
});

afterAll(() => {
    let conn = getConnection();
    return conn.close();
});

let emotionalReactionId = undefined;

test("Creating a new emotional reaction register", async () => {

    const client = {
        name: "Joe",
        email: "joe2@gmail.com",
        phone: "(86)8988-8989",
        password: "doidinho123",
        type: 0
    }

    const user_id = (await getRepository(User).insert(client)).generatedMaps[0].id;
    const client_id = (await getRepository(Client).insert({ name: client.name, phone: client.phone, user_id })).generatedMaps[0].id;

    const emotionalReactionService = new EmotionalReactionService();

    emotionalReactionId = await emotionalReactionService.create(client_id);
    expect(emotionalReactionId).not.toBeUndefined();

    const emotionalReactionCreated = await getRepository(EmotionalReaction).findOne(emotionalReactionId);
    expect(emotionalReactionCreated).not.toBeUndefined();
    expect(emotionalReactionCreated.id).toBe(emotionalReactionId);

});

test('Can an unregistered client create emotional reactions?', async () => {

    const fakeClient = Math.random().toString();

    const emotionalReactionService = new EmotionalReactionService();

    try {
        await emotionalReactionService.create(fakeClient);
    } catch (err) {
        expect(err.message).toBe('Usuário não encontrado.');
    }

})

test("Update the emotional reaction created with informations from step one", async () => {

    const stepOneValues: EmotionalReaction | any = {
        title: 'titulo',
        emotions: 'Felicidade,Emoção,Alegria',
        what_did_you_do: 'O que Joe sentiu...',
        what_did_you_think: 'O que Joe pensou...'
    }

    const emotionalReactionService = new EmotionalReactionService();

    await emotionalReactionService.update(emotionalReactionId, stepOneValues);

    const emotionalReactionUpdated = await getRepository(EmotionalReaction).findOne(emotionalReactionId);
    expect(emotionalReactionUpdated).not.toBeUndefined();
    expect(emotionalReactionUpdated.title).toBe(stepOneValues.title);
    expect(emotionalReactionUpdated.emotions).toBe(stepOneValues.emotions);
    expect(emotionalReactionUpdated.what_did_you_do).toBe(stepOneValues.what_did_you_do);
    expect(emotionalReactionUpdated.what_did_you_think).toBe(stepOneValues.what_did_you_think);

});

test("Update the emotional reaction created with informations from step two", async () => {

    const stepTwoValues: EmotionalReaction | any = {
        when_does_tb_usually_occur: 'Quando isso constuma ocorrer com Joe...',
        where_does_tb_occur: 'Onde isso constuma ocorrer...',
        who_is_present_when_tb_occurs: 'Quem está presente quando isso ocorre...',
        which_activitie_precede_tb: 'O que precede isso...',
        wd_other_people_sod_before_tb: 'O que as outras pessoas dizem ou fazem antes disso acontecer...',
        do_you_engage_other_behavior_before_tb_occurs: 'Joe se envolve em algum outro comportamento antes disso acontecer...'
    }

    const emotionalReactionService = new EmotionalReactionService();

    await emotionalReactionService.update(emotionalReactionId, stepTwoValues);

    const emotionalReactionUpdated = await getRepository(EmotionalReaction).findOne(emotionalReactionId);
    expect(emotionalReactionUpdated).not.toBeUndefined();
    expect(emotionalReactionUpdated.when_does_tb_usually_occur).toBe(stepTwoValues.when_does_tb_usually_occur);
    expect(emotionalReactionUpdated.where_does_tb_occur).toBe(stepTwoValues.where_does_tb_occur);
    expect(emotionalReactionUpdated.who_is_present_when_tb_occurs).toBe(stepTwoValues.who_is_present_when_tb_occurs);
    expect(emotionalReactionUpdated.which_activitie_precede_tb).toBe(stepTwoValues.which_activitie_precede_tb);
    expect(emotionalReactionUpdated.wd_other_people_sod_before_tb).toBe(stepTwoValues.wd_other_people_sod_before_tb);
    expect(emotionalReactionUpdated.do_you_engage_other_behavior_before_tb_occurs).toBe(stepTwoValues.do_you_engage_other_behavior_before_tb_occurs);

});

test("Update the emotional reaction created with informations from step three", async () => {

    const stepTwoValues: EmotionalReaction | any = {
        what_happens_after_tb: 'O que aconteceu depois disso...',
        wdyd_when_tb_occurs: 'O que Joe fez quando isso ocorreu...',
        wd_other_people_do_when_tb_occurs: 'O que as outras pessoas fizeram quando isso ocorreu com Joe...',
        what_changes_after_tb_occurs: 'O que mudou depois que isso aconteceu...',
        wd_you_get_after_tb: 'O que Joe obteve depois que isso aconteceu...'
    }

    const emotionalReactionService = new EmotionalReactionService();

    await emotionalReactionService.update(emotionalReactionId, stepTwoValues);

    const emotionalReactionUpdated = await getRepository(EmotionalReaction).findOne(emotionalReactionId);
    expect(emotionalReactionUpdated).not.toBeUndefined();
    expect(emotionalReactionUpdated.what_happens_after_tb).toBe(stepTwoValues.what_happens_after_tb);
    expect(emotionalReactionUpdated.wdyd_when_tb_occurs).toBe(stepTwoValues.wdyd_when_tb_occurs);
    expect(emotionalReactionUpdated.wd_other_people_do_when_tb_occurs).toBe(stepTwoValues.wd_other_people_do_when_tb_occurs);
    expect(emotionalReactionUpdated.what_changes_after_tb_occurs).toBe(stepTwoValues.what_changes_after_tb_occurs);
    expect(emotionalReactionUpdated.wd_you_get_after_tb).toBe(stepTwoValues.wd_you_get_after_tb);

});

test('Can update unregistered emotional reactions?', async () => {

    const values: EmotionalReaction | any = {
        title: 'titulo',
    }

    const unregisterClient = Math.random().toString();

    const emotionalReactionService = new EmotionalReactionService();

    try {
        await emotionalReactionService.update(unregisterClient, values);
    } catch (err) {
        expect(err.message).toBe('Registro emocional não encontrado.')
    }

})
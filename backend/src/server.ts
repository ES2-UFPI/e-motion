import express from 'express';
import cors from 'cors';
import { routes } from "./routes";
import * as jsonwebtoken from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

require('dotenv/config');
import './database';

const app = express();

app.use(cors({
    origin: '*',
    credentials: false
}))
app.use(express.json());

app.use(async (req, res, next) => {

    if (req.url === '/users/authentication') return next();
    if (req.url === '/professionals' && req.method === 'POST') return next();
    if (req.url === '/clients' && req.method === 'POST') return next();

    const accessToken = req.headers['authorization'];

    try {
        if (accessToken) {
            const user = await jsonwebtoken.verify(accessToken, process.env.JWT_SECRET || '');
            app.set('user', user);
        }
    } catch (err) {
        // res.status(500).json({ error: 'Token de acesso inválido' })
    }
    next();
})

app.use(routes);

async function print() {
    console.log(jsonwebtoken.sign({ id: '1' }, process.env.JWT_SECRET || ''))
    console.log(await bcrypt.hash('senha', 10));
}
print();

app.listen(process.env.PORT, () => console.log("Server Started!"));

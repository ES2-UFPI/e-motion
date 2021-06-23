import express from 'express';
import {routes} from "./routes";
require('dotenv/config');
import './database';

const app = express(); 

app.use(express.json());
app.use(routes);

app.listen(3333,()=>console.log("Server Started!"));
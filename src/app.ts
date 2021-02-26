import 'reflect-metadata';
import express from 'express';
import createConnection from "./database";
import { router } from './routes'

// GET => Buscar
// POST => Salvar
// PUT => ALTERAR 
// DELETE => DELETAR
// PATCH => ALTERAÇÃO ESPECIFICA 
createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };

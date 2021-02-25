import 'reflect-metadata';
import express from 'express';
import "./database";
import { router } from './routes'
// GET => Buscar
// POST => Salvar
// PUT => ALTERAR 
// DELETE => DELETAR
// PATCH => ALTERAÇÃO ESPECIFICA 
const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is running!'));
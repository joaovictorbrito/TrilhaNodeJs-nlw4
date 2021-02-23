import express from 'express';

const app = express();

// GET => Buscar
// POST => Salvar
// PUT => ALTERAR 
// DELETE => DELETAR
// PATCH => ALTERAÇÃO ESPECIFICA 

app.get("/", (request, response) => {
    return response.json({ message: "Hello World-nlw04"})
})

// 1 parametros => Rota(Recuso API)
// 2 parametros => request, response

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso"})
})

app.listen(3333, () => console.log('Server is running!'))
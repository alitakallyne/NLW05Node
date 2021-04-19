import express from 'express';

const app = express();

app.listen(3333, ()=> console.log('Server is running on port 3333'));

app.get('/', (req, res) => {
    return res.json({message: 'Olá NLW 5'});
})

app.post('/users', (req, res) => {
    return res.json({message: 'Usuário salvo com sucesso'});
});

import dotenv from 'dotenv';

dotenv.config();


const { app } = await import('./app.js');
const porta = process.env.PORT || 5000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

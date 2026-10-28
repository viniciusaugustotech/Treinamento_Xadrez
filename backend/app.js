import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { resolve } from 'node:path';

import { authRouter } from './routes/AuthRoutes.js';
import { aulaRouter } from './routes/AulaRoutes.js';
import { moduloRouter } from './routes/ModuloRoutes.js';
import { usuarioRouter } from './routes/UsuarioRoutes.js';
import { cursoRouter } from './routes/CursoRoutes.js';

import { autenticar, autorizarAdmin } from './middlewares/AuthMiddleware.js';

export const app = express();

// 1. Defesas de Borda: Helmet e CORS
app.use(helmet());

const origensPermitidas = (process.env.CORS_ORIGENS || 'http://localhost:3000,http://localhost:5500')
  .split(',')
  .map(o => o.trim());

app.use(cors({
  origin(origem, callback) {
    if (!origem || origensPermitidas.includes(origem)) {
      return callback(null, true);
    }
    return callback(new Error('Origem não permitida pelo CORS.'));
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/uploads', express.static(resolve('uploads')));

// 2. Injeção de Segurança nas Rotas de Produtos
configurarSegurancaProdutos(autenticar, autorizarAdmin);

// 3. Rotas da API
app.get('/api/check', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use('/auth', authRouter);
app.use('/cursos', cursoRouter);
app.use('/cursos/:id/aulas/:aulasid', aulaRouter);
app.use('/', moduloRouter)

// 4. Fallback 404
app.use((req, res) => {
  res.status(404).json({ sucesso: false, erro: `A rota ${req.method} ${req.originalUrl} não existe.` });
});

// 5. Tratador Global de Erros
app.use((erro, req, res, _next) => {
  console.error('Erro de Servidor:', erro.message);
  res.status(erro.status || 500).json({ sucesso: false, erro: erro.message || 'Falha interna do servidor.' });
});
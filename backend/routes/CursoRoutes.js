
import express from 'express';
import * as CursoController from '../controllers/CursoController.js';

export const cursoRouter = express.Router();

cursoRouter.get('/', CursoController.listarTodos);
cursoRouter.post('/', CursoController.criar);
cursoRouter.put('/:id', CursoController.editar);
cursoRouter.delete('/:id', CursoController.excluir);
import express from 'express';
import * as ModuloController from '../controllers/ModuloController.js';

export const moduloRouter = express.Router();

moduloRouter.get('/', ModuloController.listarTodos);
moduloRouter.post('/', ModuloController.criar);
moduloRouter.put('/:id', ModuloController.editar);
moduloRouter.delete('/:id', ModuloController.excluir);
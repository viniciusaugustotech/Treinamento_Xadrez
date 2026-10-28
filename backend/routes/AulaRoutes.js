
import express from 'express';
import * as AulaController from '../controllers/AulaController.js';

export const aulaRouter = express.Router();

aulaRouter.get('/', AulaController.listarTodos);
aulaRouter.post('/', AulaController.criar);
aulaRouter.put('/:id', AulaController.editar);
aulaRouter.delete('/:id', AulaController.excluir);
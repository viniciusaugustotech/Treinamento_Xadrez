
import express from 'express';
import * as AulaController from '../controllers/AulaController.js';

export const aulaRouter = express.Router();

aulaRouter.get('/', AulaController.listarTodos);
aulaRouter.post('/', AulaController.criar);
aulaRouter.put('/:aulasid', AulaController.editar);
aulaRouter.delete('/:aulasid', AulaController.excluir);
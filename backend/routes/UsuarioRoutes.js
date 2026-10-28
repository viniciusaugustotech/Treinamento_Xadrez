import express from 'express';
import * as UsuarioController from '../controllers/UsuarioController.js';

export const usuarioRouter = express.Router();

usuarioRouter.get('/', UsuarioController.listarTodos);
usuarioRouter.get('/:id', UsuarioController.buscarPorId);
usuarioRouter.put('/:id', UsuarioController.editar);
usuarioRouter.delete('/:id', UsuarioController.excluir);
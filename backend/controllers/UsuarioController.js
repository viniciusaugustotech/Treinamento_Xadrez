import * as UsuarioModel from '../models/UsuarioModel.js';

export async function listarTodos(req, res, next) {
  try {
    const usuarios = await UsuarioModel.listarTodos();

    return res.status(200).json({
      sucesso: true,
      dados: usuarios
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function buscarPorId(req, res, next) {
  try {
    const usuario = await UsuarioModel.buscarPorId(
      req.params.id
    );

    if (!usuario) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Usuário não encontrado'
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: usuario
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function editar(req, res, next) {
  try {
    const usuario = await UsuarioModel.editar(
      req.params.id,
      req.body
    );

    if (!usuario) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Usuário não encontrado'
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: usuario
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function excluir(req, res, next) {
  try {
    const excluido = await UsuarioModel.excluir(
      req.params.id
    );

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Usuário não encontrado'
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return next(erro);
  }
}

import * as ModuloModel from '../models/ModuloModel.js';

export async function listarTodos(req, res, next) {
  try {
    const modulos = await ModuloModel.listarTodos();

    return res.status(200).json({
      sucesso: true,
      dados: modulos
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function criar(req, res, next) {
  try {
    const modulo = await ModuloModel.criar(req.body);

    return res.status(201).json({
      sucesso: true,
      dados: modulo
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function editar(req, res, next) {
  try {
    const modulo = await ModuloModel.editar(
      req.params.id,
      req.body
    );

    if (!modulo) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Módulo não encontrado'
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: modulo
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function excluir(req, res, next) {
  try {
    const excluido = await ModuloModel.excluir(req.params.id);

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Módulo não encontrado'
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return next(erro);
  }
}
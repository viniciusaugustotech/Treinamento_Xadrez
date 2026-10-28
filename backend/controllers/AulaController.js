
import * as AulaModel from '../models/AulaModel.js';

export async function listarTodos(req, res, next) {
  try {
    const aulas = await AulaModel.listarTodos();

    return res.status(200).json({
      sucesso: true,
      dados: aulas
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function criar(req, res, next) {
  try {
    const aula = await AulaModel.criar(req.body);

    return res.status(201).json({
      sucesso: true,
      dados: aula
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function editar(req, res, next) {
  try {
    const aula = await AulaModel.editar(
      req.params.id,
      req.body
    );

    if (!aula) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Aula não encontrada'
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: aula
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function excluir(req, res, next) {
  try {
    const excluido = await AulaModel.excluir(req.params.id);

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Aula não encontrada'
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return next(erro);
  }
}
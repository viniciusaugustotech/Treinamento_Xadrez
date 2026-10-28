
import * as CursoModel from '../models/CursoModel.js';

export async function listarTodos(req, res, next) {
  try {
    const cursos = await CursoModel.listarTodos();

    return res.status(200).json({
      sucesso: true,
      dados: cursos
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function criar(req, res, next) {
  try {
    const curso = await CursoModel.criar(req.body);

    return res.status(201).json({
      sucesso: true,
      dados: curso
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function editar(req, res, next) {
  try {
    const curso = await CursoModel.editar(
      req.params.id,
      req.body
    );

    if (!curso) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Curso não encontrado'
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: curso
    });
  } catch (erro) {
    return next(erro);
  }
}

export async function excluir(req, res, next) {
  try {
    const excluido = await CursoModel.excluir(req.params.id);

    if (!excluido) {
      return res.status(404).json({
        sucesso: false,
        erro: 'Curso não encontrado'
      });
    }

    return res.status(204).send();
  } catch (erro) {
    return next(erro);
  }
}
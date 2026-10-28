
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const caminhoArquivo = resolve(
  process.cwd(),
  "backend", 
  "data",
  "curso.json"
);

async function obterTodosCursos() {
  try {
    const dadosBrutos = await readFile(caminhoArquivo, 'utf-8');
    return JSON.parse(dadosBrutos || '[]');
  } catch (erro) {
    throw erro;
  }
}

export async function listarTodos() {
  return await obterTodosCursos();
}

export async function criar(curso) {
  const cursos = await obterTodosCursos();

  const novoId = cursos.length > 0
    ? Math.max(...cursos.map(c => c.id_curso)) + 1
    : 1;

  const novoCurso = {
    id_curso: novoId,
    tag: curso.tag,
    titulo: curso.titulo,
    descricao: curso.descricao,
    modulos: curso.modulos,
    duracao: curso.duracao,
    aulas: curso.aulas,
    descricao_longa: curso.descricao_longa || [],
    resumo_conteudo: curso.resumo_conteudo || [],
    imagem: curso.imagem || ''
  };

  cursos.push(novoCurso);

  await writeFile(
    caminhoArquivo,
    JSON.stringify(cursos, null, 2),
    'utf-8'
  );

  return novoCurso;
}

export async function editar(id, dados) {
  const cursos = await obterTodosCursos();

  const indice = cursos.findIndex(
    c => c.id_curso === Number(id)
  );

  if (indice === -1) {
    return null;
  }

  cursos[indice] = {
    ...cursos[indice],
    ...dados,
    id_curso: Number(id)
  };

  await writeFile(
    caminhoArquivo,
    JSON.stringify(cursos, null, 2),
    'utf-8'
  );

  return cursos[indice];
}

export async function excluir(id) {
  const cursos = await obterTodosCursos();

  const cursosAtualizados = cursos.filter(
    c => c.id_curso !== Number(id)
  );

  if (cursosAtualizados.length === cursos.length) {
    return false;
  }

  await writeFile(
    caminhoArquivo,
    JSON.stringify(cursosAtualizados, null, 2),
    'utf-8'
  );

  return true;
}
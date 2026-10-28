
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const caminhoArquivo = resolve(
  process.cwd(),
  "backend",
  "data",
  "aula.json"
);

async function obterTodasAulas() {
  const dadosBrutos = await readFile(caminhoArquivo, 'utf-8');
  return JSON.parse(dadosBrutos || '[]');
}

export async function listarTodos() {
  return await obterTodasAulas();
}

export async function criar(aula) {
  const aulas = await obterTodasAulas();

  const novoId = aulas.length > 0
    ? Math.max(...aulas.map(a => Number(a.id_aula))) + 1
    : 1;

  const novaAula = {
    id_modulo: Number(aula.id_modulo),
    id_aula: novoId,
    ordem: Number(aula.ordem),
    titulo: aula.titulo,
    duracao: aula.duracao,
    descricao: aula.descricao,
    objetivos: aula.objetivos || []
  };

  aulas.push(novaAula);

  await writeFile(
    caminhoArquivo,
    JSON.stringify(aulas, null, 2),
    'utf-8'
  );

  return novaAula;
}

export async function editar(id, dados) {
  const aulas = await obterTodasAulas();

  const indice = aulas.findIndex(
    a => Number(a.id_aula) === Number(id)
  );

  if (indice === -1) {
    return null;
  }

  aulas[indice] = {
    ...aulas[indice],
    ...dados,
    id_aula: Number(id)
  };

  if (dados.id_modulo !== undefined) {
    aulas[indice].id_modulo = Number(dados.id_modulo);
  }

  if (dados.ordem !== undefined) {
    aulas[indice].ordem = Number(dados.ordem);
  }

  await writeFile(
    caminhoArquivo,
    JSON.stringify(aulas, null, 2),
    'utf-8'
  );

  return aulas[indice];
}

export async function excluir(id) {
  const aulas = await obterTodasAulas();

  const aulasAtualizadas = aulas.filter(
    a => Number(a.id_aula) !== Number(id)
  );

  if (aulasAtualizadas.length === aulas.length) {
    return false;
  }

  await writeFile(
    caminhoArquivo,
    JSON.stringify(aulasAtualizadas, null, 2),
    'utf-8'
  );

  return true;
}
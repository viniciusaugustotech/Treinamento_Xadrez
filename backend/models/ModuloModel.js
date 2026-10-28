
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const caminhoArquivo = resolve(
  process.cwd(), 
  "data", 
  "modulo.json"
);

async function obterTodosModulos() {
  try {
    const dadosBrutos = await readFile(caminhoArquivo, 'utf-8');
    return JSON.parse(dadosBrutos || '[]');
  } catch (erro) {
    throw erro;
  }
}

export async function listarTodos() {
  return await obterTodosModulos();
}

export async function criar(modulo) {
  const modulos = await obterTodosModulos();

  const novoId = modulos.length > 0
    ? Math.max(...modulos.map(m => Number(m.id_modulo))) + 1
    : 1;

  const novoModulo = {
    id_curso: Number(modulo.id_curso),
    id_modulo: novoId,
    ordem: modulo.ordem,
    titulo: modulo.titulo,
    aulas_qtd: Number(modulo.aulas_qtd),
    duracao: modulo.duracao,
    id_aula: modulo.id_aula || []
  };

  modulos.push(novoModulo);

  await writeFile(
    caminhoArquivo,
    JSON.stringify(modulos, null, 2),
    'utf-8'
  );

  return novoModulo;
}

export async function editar(id, dados) {
  const modulos = await obterTodosModulos();

  const indice = modulos.findIndex(
    m => Number(m.id_modulo) === Number(id)
  );

  if (indice === -1) {
    return null;
  }

  modulos[indice] = {
    ...modulos[indice],
    ...dados,
    id_modulo: Number(id)
  };

  if (dados.id_curso !== undefined) {
    modulos[indice].id_curso = Number(dados.id_curso);
  }

  if (dados.aulas_qtd !== undefined) {
    modulos[indice].aulas_qtd = Number(dados.aulas_qtd);
  }

  await writeFile(
    caminhoArquivo,
    JSON.stringify(modulos, null, 2),
    'utf-8'
  );

  return modulos[indice];
}

export async function excluir(id) {
  const modulos = await obterTodosModulos();

  const modulosAtualizados = modulos.filter(
    m => Number(m.id_modulo) !== Number(id)
  );

  if (modulosAtualizados.length === modulos.length) {
    return false;
  }

  await writeFile(
    caminhoArquivo,
    JSON.stringify(modulosAtualizados, null, 2),
    'utf-8'
  );

  return true;
}
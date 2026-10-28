
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

const caminhoArquivo = resolve(
  process.cwd(),
  "data",
  "usuario.json"
);

async function obterTodosUsuarios() {
  try {
    const dadosBrutos = await readFile(caminhoArquivo, "utf-8");
    return JSON.parse(dadosBrutos || "[]");
  } catch (error) {
    return [];
  }
}

async function salvarUsuarios(usuarios) {
  await writeFile(
    caminhoArquivo,
    JSON.stringify(usuarios, null, 2),
    "utf-8"
  );
}

function removerSenha(usuario) {
  const { senha, ...dados } = usuario;
  return dados;
}

export async function listarTodos() {
  const usuarios = await obterTodosUsuarios();
  return usuarios.map(removerSenha);
}

export async function buscarPorEmail(email) {
  const usuarios = await obterTodosUsuarios();

  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) return null;

  return {
    id: usuario.id_usuario || usuario.id,
    nome: usuario.nome_completo || usuario.nome_usuario || usuario.nome,
    email: usuario.email,
    senha: usuario.senha,
    perfil: usuario.perfil || "usuario"
  };
}

export async function buscarPorId(id) {
  const usuarios = await obterTodosUsuarios();

  const usuario = usuarios.find(
    u => Number(u.id_usuario ?? u.id) === Number(id)
  );

  if (!usuario) return null;

  return removerSenha(usuario);
}

export async function criar({
  nome,
  email,
  senha,
  nivel = "Iniciante",
  perfil = "usuario",
  sobre_mim = ""
}) {
  const usuarios = await obterTodosUsuarios();

  const novoId = usuarios.length > 0
    ? Math.max(...usuarios.map(u => Number(u.id_usuario ?? u.id) || 0)) + 1
    : 1;

  const novoUsuario = {
    id_usuario: novoId,
    nome_usuario: nome,
    email,
    senha,
    nivel_xadrez: nivel,
    perfil,
    sobre_mim,
    cursos_inscritos: []
  };

  usuarios.push(novoUsuario);
  await salvarUsuarios(usuarios);

  return removerSenha(novoUsuario);
}

export async function editar(id, dados) {
  const usuarios = await obterTodosUsuarios();

  const indice = usuarios.findIndex(
    u => Number(u.id_usuario ?? u.id) === Number(id)
  );

  if (indice === -1) return null;

  const usuarioAtual = usuarios[indice];

  usuarios[indice] = {
    ...usuarioAtual,
    ...dados,
    id_usuario: Number(id)
  };

  usuarios[indice].senha = usuarioAtual.senha;

  await salvarUsuarios(usuarios);

  return removerSenha(usuarios[indice]);
}

export async function excluir(id) {
  const usuarios = await obterTodosUsuarios();

  const atualizados = usuarios.filter(
    u => Number(u.id_usuario ?? u.id) !== Number(id)
  );

  if (atualizados.length === usuarios.length) {
    return false;
  }

  await salvarUsuarios(atualizados);
  return true;
}
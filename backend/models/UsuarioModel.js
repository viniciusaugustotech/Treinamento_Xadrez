import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

const caminhoArquivo = resolve(process.cwd(), "backend", "data", "usuarios.json");

async function obterTodosUsuarios() {
  try {
    const dadosBrutos = await readFile(caminhoArquivo, "utf-8");
    return JSON.parse(dadosBrutos || "[]");
  } catch (error) {
    return [];
  }
}

export async function buscarPorEmail(email) {
  const usuarios = await obterTodosUsuarios();
  
  const usuarioEncontrado = usuarios.find(u => u.email === email);
  
  if (!usuarioEncontrado) return null;

  return {
    id: usuarioEncontrado.id_usuario || usuarioEncontrado.id,
    nome: usuarioEncontrado.nome_completo || usuarioEncontrado.nome,
    email: usuarioEncontrado.email,
    senha: usuarioEncontrado.senha,
    perfil: usuarioEncontrado.perfil || "usuario"
  };
}

export async function criar({ nome, email, senha, nivel = "Iniciante", perfil = "usuario", sobre_mim = "",  }) {
  const usuarios = await obterTodosUsuarios();

  const novoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id_usuario)) + 1 : 1;

  const novoUsuario = {
    id_usuario: novoId,
    nome_usuario: nome,
    email: email,
    senha: senha,
    nivel_xadrez: nivel,
    perfil: perfil,
    sobre_mim: sobre_mim,
    cursos_inscritos: []
  };

  usuarios.push(novoUsuario);
  await writeFile(caminhoArquivo, JSON.stringify(usuarios, null, 2), "utf-8");

  return { id: novoId, nome, email, perfil };
}


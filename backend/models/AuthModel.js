
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import bcrypt from 'bcrypt';

const caminhoArquivo = resolve(
  process.cwd(),
  'data',
  'usuario.json'
);

async function obterUsuarios() {
  const dados = await readFile(caminhoArquivo, 'utf-8');
  return JSON.parse(dados || '[]');
}

export async function registrar(dados) {
  const { nome, email, senha } = dados;

  if (!nome || !email || !senha) {
    throw new TypeError('Nome, email e senha são obrigatórios');
  }

  const usuarios = await obterUsuarios();

  if (usuarios.some(u => u.email === email)) {
    const erro = new Error('Email já cadastrado');
    erro.status = 409;
    throw erro;
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const novoUsuario = {
    id_usuario: usuarios.length
      ? Math.max(...usuarios.map(u => Number(u.id_usuario))) + 1
      : 1,
    nome_usuario: nome,
    email,
    senha: senhaHash,
    perfil: 'usuario',
    nivel_xadrez: 'Iniciante',
    sobre_mim: '',
    cursos_inscritos: []
  };

  usuarios.push(novoUsuario);

  await writeFile(
    caminhoArquivo,
    JSON.stringify(usuarios, null, 2),
    'utf-8'
  );

  return {
    id: novoUsuario.id_usuario,
    nome: novoUsuario.nome_usuario,
    email: novoUsuario.email,
    perfil: novoUsuario.perfil
  };
}

export async function login(dados) {
  const { email, senha } = dados;

  if (!email || !senha) {
    throw new TypeError('Email e senha são obrigatórios');
  }

  const usuarios = await obterUsuarios();
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    const erro = new Error('Email ou senha incorretos');
    erro.status = 401;
    throw erro;
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

  if (!senhaCorreta) {
    const erro = new Error('Email ou senha incorretos');
    erro.status = 401;
    throw erro;
  }

  return {
    id: usuario.id_usuario,
    nome: usuario.nome_usuario,
    email: usuario.email,
    perfil: usuario.perfil
  };
}
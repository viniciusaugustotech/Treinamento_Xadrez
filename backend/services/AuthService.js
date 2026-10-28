import bcrypt from 'bcryptjs';
import * as UsuarioModel from '../models/UsuarioModel.js';

export async function registrar({ foto_perfil, nome_usuario, email, nivel_xadrez, sobre_mim, senha } = {}) {
  
  if (!nome_usuario || nome_usuario.trim().length < 3) {
    throw new Error('O nome de usuário deve ter no mínimo 3 caracteres.');
  }
  if (!email || !email.includes('@')) {
    throw new Error('Informe um e-mail válido.');
  }
  if (!senha || senha.length < 8) {
    throw new Error('A senha deve ter no mínimo 8 caracteres.');
  }

  const emailLimpo = email.trim().toLowerCase();
  const usuarioExistente = await UsuarioModel.buscarPorEmail(emailLimpo);
  if (usuarioExistente) {
    throw new Error('E-mail já cadastrado.');
  }

  const senhaHash = await bcrypt.hash(senha, 10);
  return await UsuarioModel.criar({
    nome_usuario: nome_usuario.trim(),
    email: emailLimpo,
    nivel: nivel_xadrez || "Iniciante",
    sobre_mim: sobre_mim || "",
    senha,
    perfil: 'usuario'
  });
}

export async function login({ email, senha } = {}) {
  if (!email || !senha) {
    throw new Error('Preencha todos os campos.');
  }

  const emailLimpo = email.trim().toLowerCase();
  const usuario = await UsuarioModel.buscarPorEmail(emailLimpo);
  
  const senhaValida = usuario ? await bcrypt.compare(senha, usuario.senha_hash) : false;

  if (!usuario || !senhaValida) {
    throw new Error('E-mail ou senha incorretos.');
  }

  return {
    sucesso: true,
    usuario: { 
      id: usuario.id, 
      nome_usuario: usuario.nome_usuario, 
      email: usuario.email,
      perfil: usuario.perfil
    }
  };
}

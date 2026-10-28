"use client";

import Link from "next/link";
import "./auth.css";
import { useEffect, useState } from "react";


async function pegarReq(event) {
  event.preventDefault();

  const formulario = new FormData(event.currentTarget);

  const email = formulario.get('email');
  const senha = formulario.get('senha');

  try {
    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const resultado = await res.json();

   if (res.ok && resultado.sucesso) {
        alert('Login realizado com sucesso!');

        const params = new URLSearchParams(window.location.search);
        const destino = params.get('redirect') || '/';

        window.location.href = destino;
    } else {
      alert(resultado.erro || 'Email ou senha incorretos.');
    }
  } catch (erro) {
    console.error('Erro:', erro);
    alert('Não foi possível conectar ao servidor.');
  }
}

export default function Login() {
    return (
        <main className="auth-pagina">
            <section className="auth-card">
                <Link href="/" className="auth-logo">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                    <span>Passo de Mestre</span>
                </Link>

                <div className="auth-titulo">
                    <h1>Bem-vindo de volta!</h1>
                    <p>Entre na sua conta e continue evoluindo no xadrez.</p>
                </div>

                <form className="auth-form" action="/auth/login" method="POST" onSubmit={pegarReq}>
                    <div className="auth-campo">
                        <label htmlFor="email">E-mail</label>
                        <div className="auth-input">
                            <i className="bi bi-envelope"></i>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                autoComplete="email"
                                required
                                />
                        </div>
                    </div>

                    <div className="auth-campo">
                        <label htmlFor="senha">Senha</label>
                        <div className="auth-input">
                            <i className="bi bi-lock"></i>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                autoComplete="current-password"
                                required
                                />
                        </div>
                    </div>

                    <div className="auth-opcoes">
                        <label className="auth-lembrar">
                            <input type="checkbox" />
                            <span>Lembrar de mim</span>
                        </label>

                        <Link href="/recuperar-senha">
                            Esqueci minha senha
                        </Link>
                    </div>

                    <button type="submit" className="auth-botao">
                        Entrar na conta
                    </button>
                </form>

                <div className="auth-divisor">
                    <span>ou</span>
                </div>

                <p className="auth-alternativa">
                    Ainda não tem uma conta?{" "}
                    <Link href="/cadastro">Cadastre-se</Link>
                </p>

                <Link href="/" className="auth-voltar">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para o início
                </Link>
            </section>

            <aside className="auth-lateral">
                <div className="auth-lateral-conteudo">
                    <span className="auth-etiqueta">SUA JORNADA NO XADREZ</span>
                    <h2>Cada jogada é uma oportunidade de evoluir.</h2>
                    <p>
                        Aprenda novas estratégias, desenvolva seu raciocínio
                        e avance um movimento de cada vez.
                    </p>
                    <div className="auth-pecas">♜ ♞ ♝ ♛ ♚ ♝</div>
                </div>
            </aside>
        </main>
    );
}

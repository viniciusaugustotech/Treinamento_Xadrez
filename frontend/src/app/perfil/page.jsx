"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./perfil.css";

export default function Perfil() {
  const [dados, setDados] = useState({
    id: "",
    nome_usuario: "",
    email: "",
    nivel_xadrez: "Iniciante",
    sobre_mim: "",
    senha: ""
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    if (usuarioSalvo) {
      const info = JSON.parse(usuarioSalvo);
      setDados({
        id: info.id_usuario || info.id || "",
        nome_usuario: info.nome_usuario || info.nome || "",
        email: info.email || "",
        nivel_xadrez: info.nivel_xadrez || "Iniciante",
        sobre_mim: info.sobre_mim || "",
        senha: ""
      });
    }
  }, []);

  function mudarCampo(evento) {
    const { name, value } = evento.target;
    setDados({ ...dados, [name]: value });
  }

  async function salvarPerfil(evento) {
    evento.preventDefault();
    try {
      if (dados.id) {
        await fetch(`http://localhost:5000/usuarios/${dados.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados)
        });
      }

      const usuarioAtualizado = { ...dados };
      delete usuarioAtualizado.senha;
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));

      alert("Perfil atualizado com sucesso!");
    } catch (erro) {
      console.error(erro);
      alert("Erro ao salvar alterações.");
    }
  }

  return (
    <main className="pagina-perfil">
      <section className="perfil-cabecalho">
        <div>
          <span className="perfil-etiqueta">MINHA CONTA</span>
          <h1>Perfil e configurações</h1>
          <p>
            Gerencie suas informações pessoais e personalize
            sua experiência de aprendizado.
          </p>
        </div>

        <div className="perfil-avatar">
          <i className="bi bi-person-fill"></i>
        </div>
      </section>

      <div className="perfil-layout">
        <aside className="perfil-menu">
          <a href="#dados" className="perfil-menu-item ativo">
            <i className="bi bi-person"></i>
            Dados pessoais
          </a>

          <Link href="/painel" className="perfil-menu-item">
            <i className="bi bi-arrow-left"></i>
            Voltar ao painel
          </Link>
        </aside>

        <div className="perfil-conteudo">
          <section className="perfil-card" id="dados">
            <div className="perfil-card-titulo">
              <div>
                <h2>Dados pessoais</h2>
                <p>Atualize as informações do seu perfil.</p>
              </div>
              <i className="bi bi-person-circle"></i>
            </div>

            <form onSubmit={salvarPerfil}>
              <div className="perfil-form-grid">
                <div className="perfil-campo">
                  <label htmlFor="nome_usuario">Nome de usuário</label>
                  <input
                    type="text"
                    id="nome_usuario"
                    name="nome_usuario"
                    value={dados.nome_usuario}
                    onChange={mudarCampo}
                    placeholder="Digite seu usuário"
                  />
                </div>

                <div className="perfil-campo">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={dados.email}
                    onChange={mudarCampo}
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div className="perfil-campo">
                  <label htmlFor="nivel_xadrez">Nível no xadrez</label>
                  <select
                    id="nivel_xadrez"
                    name="nivel_xadrez"
                    value={dados.nivel_xadrez}
                    onChange={mudarCampo}
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </div>

                <div className="perfil-campo campo-completo">
                  <label htmlFor="sobre_mim">Sobre mim</label>
                  <textarea
                    id="sobre_mim"
                    name="sobre_mim"
                    rows="4"
                    value={dados.sobre_mim}
                    onChange={mudarCampo}
                    placeholder="Conte um pouco sobre você e seus objetivos no xadrez."
                  ></textarea>
                </div>

                <div className="perfil-campo">
                  <label htmlFor="senha">Nova Senha</label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={dados.senha}
                    onChange={mudarCampo}
                    placeholder="Digite caso queira alterar"
                  />
                </div>
              </div>

              <div className="perfil-acoes">
                <button type="submit" className="perfil-botao principal">
                  Salvar alterações
                </button>
              </div>
            </form>
          </section>

          <section className="perfil-card" id="conta">
            <div className="perfil-card-titulo">
              <div>
                <h2>Conta e segurança</h2>
                <p>Cuide da segurança do seu acesso.</p>
              </div>
              <i className="bi bi-shield-lock"></i>
            </div>

            <div className="perfil-seguranca-item">
              <div>
                <h3>Privacidade da conta</h3>
                <p>Suas informações são utilizadas para personalizar sua experiência.</p>
              </div>
              <span className="perfil-status">
                <i className="bi bi-lock-fill"></i>
                Conta protegida
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
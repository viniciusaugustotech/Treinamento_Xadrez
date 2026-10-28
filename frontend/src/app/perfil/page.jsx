"use client";

import Link from "next/link";
import "./perfil.css";

export default function Perfil() {

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

                        <div className="perfil-foto">
                            <div className="perfil-foto-avatar">
                                <i className="bi bi-person-fill"></i>
                            </div>
                            </div>
                            <div>
                                <h3>Sua foto de perfil</h3>
                                <p>Personalize sua conta com uma foto.</p>
                        </div>

                        <form action="/perfil" method="POST">
                            <div className="perfil-form-grid">
                                <div className="perfil-campo">
                                    <label htmlFor="nome">Nome completo</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        placeholder="Digite seu nome"
                                    />
                                </div>

                                <div className="perfil-campo">
                                    <label htmlFor="usuario">Nome de usuário</label>
                                    <input
                                        type="text"
                                        id="usuario"
                                        placeholder="Digite seu usuário"
                                    />
                                </div>

                                <div className="perfil-campo">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="seuemail@exemplo.com"
                                    />
                                </div>

                                <div className="perfil-campo">
                                    <label htmlFor="nivel">Nível no xadrez</label>
                                    <select id="nivel" defaultValue="">
                                        <option value="" disabled>
                                            Selecione seu nível
                                        </option>
                                        <option value="iniciante">Iniciante</option>
                                        <option value="intermediario">
                                            Intermediário
                                        </option>
                                        <option value="avancado">Avançado</option>
                                    </select>
                                </div>

                                <div className="perfil-campo campo-completo">
                                    <label htmlFor="biografia">Sobre mim</label>
                                    <textarea
                                        id="biografia"
                                        rows="4"
                                        placeholder="Conte um pouco sobre você e seus objetivos no xadrez."
                                    ></textarea>
                                </div>

                                <div className="perfil-campo">
                                        <label>Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        placeholder="Senha@123"
                                    />
                                </div>

                                <div className="perfil-campo">
                                        <label>Foto de Perfil (URL)</label>
                                    <input
                                        type="text"
                                        id="foto"
                                    />
                                </div>

                            </div>

                            <div className="perfil-acoes">
                                <button type="reset" className="perfil-botao secundario">
                                    Limpar campos
                                </button>
                                <button type="button" className="perfil-botao principal">
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

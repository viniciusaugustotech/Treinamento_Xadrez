"use client";

import Link from "next/link";
import "../login/auth.css";

export default function Cadastro() {

    return (
        <main className="auth-pagina">
            <section className="auth-card">
                <Link href="/" className="auth-logo">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                    <span>Passo de Mestre</span>
                </Link>

                <div className="auth-titulo">
                    <h1>Crie sua conta</h1>
                    <p>Comece sua jornada e desenvolva suas habilidades no xadrez.</p>
                </div>

                <form className="auth-form" action="/auth" method="POST">
                    
                    {/* ENVIADO AO BANCO: foto_perfil (Valor padrão automático oculto) */}
                    <input 
                        type="hidden" 
                        name="foto_perfil" 
                        value="/imagens/avatar-default.png" 
                    />

                    <div className="auth-campo">
                        <label htmlFor="nome_usuario">Nome de usuário</label>
                        <div className="auth-input">
                            <i className="bi bi-person"></i>
                            <input
                                type="text"
                                id="nome_usuario"
                                name="nome_usuario"
                                placeholder="Crie seu usuário (ex: rafa_grandmaster)"
                                required
                            />
                        </div>
                    </div>

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
                        <label htmlFor="nivel_xadrez">Nível de xadrez</label>
                        <div className="auth-input">
                            <i className="bi bi-bar-chart"></i>
                            <select id="nivel_xadrez" name="nivel_xadrez" required style={{ width: "100%", paddingLeft: "10px", background: "transparent", border: "none", outline: "none" }}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>
                    </div>

                    <div className="auth-campo">
                        <label htmlFor="sobre_mim">Sobre mim</label>
                        <div className="auth-input" style={{ height: "auto" }}>
                            <textarea
                                id="sobre_mim"
                                name="sobre_mim"
                                placeholder="Fale um pouco sobre você e seus objetivos..."
                                rows="3"
                                style={{ width: "100%", padding: "10px", background: "transparent", border: "none", outline: "none", resize: "none", font: "inherit" }}
                                required
                            ></textarea>
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
                                placeholder="Crie uma senha"
                                autoComplete="new-password"
                                minLength="8"
                                required
                            />
                        </div>
                    </div>

                    <div className="auth-campo">
                        <label htmlFor="confirmar-senha">Confirmar senha</label>
                        <div className="auth-input">
                            <i className="bi bi-shield-lock"></i>
                            <input
                                type="password"
                                id="confirmar-senha"
                                placeholder="Digite a senha novamente"
                                autoComplete="new-password"
                                minLength="8"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="auth-botao" style={{ marginTop: "15px" }}>
                        Criar minha conta
                    </button>
                </form>

                <div className="auth-divisor">
                    <span>ou</span>
                </div>

                <p className="auth-alternativa">
                    Já tem uma conta?{" "}
                    <Link href="/login">Entrar</Link>
                </p>

                <Link href="/" className="auth-voltar">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para o início
                </Link>
            </section>

            <aside className="auth-lateral">
                <div className="auth-lateral-conteudo">
                    <span className="auth-etiqueta">SEU PRÓXIMO MOVIMENTO</span>
                    <h2>O primeiro passo para se tornar um grande jogador começa aqui.</h2>
                    <p>
                        Explore cursos, pratique táticas e construa sua
                        estratégia no seu próprio ritmo.
                    </p>
                    <div className="auth-pecas">♜ ♞ ♝ ♛ ♚ ♝</div>
                </div>
            </aside>
        </main>
    );
}

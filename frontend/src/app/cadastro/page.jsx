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

                <form className="auth-form">
                    <div className="auth-campo">
                        <label htmlFor="nome">Nome completo</label>
                        <div className="auth-input">
                            <i className="bi bi-person"></i>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite seu nome"
                                autoComplete="name"
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
                                placeholder="Crie uma senha"
                                autoComplete="new-password"
                                minLength="8"
                                required
                            />
                        </div>
                        <span className="auth-ajuda">
                            Utilize pelo menos 8 caracteres.
                        </span>
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

                    <label className="auth-termos">
                        <input type="checkbox" required />
                        <span>
                            Li e concordo com os{" "}
                            <Link href="/termos">termos de uso</Link>
                            {" "}e a{" "}
                            <Link href="/privacidade">política de privacidade</Link>.
                        </span>
                    </label>

                    <button type="submit" className="auth-botao">
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


"use client";

import { aplicarEstilo } from "@backend/utils/cursos.js";
import Link from "next/link";
import "./painel.css";

export default function Painel() {
    aplicarEstilo();

    return (
        <main className="pagina-painel">
            <section className="painel-boas-vindas">
                <div>
                    <span className="painel-etiqueta">ÁREA DO ALUNO</span>
                    <h1>Bem-vindo de volta!</h1>
                    <p>
                        Continue aprendendo, pratique suas habilidades
                        e avance no seu caminho para dominar o xadrez.
                    </p>
                </div>

                <div className="painel-imagem">
                    <img
                        src="/imagens/estrategia.jpg"
                        alt="Tabuleiro de xadrez"
                    />
                </div>
            </section>

            <section className="painel-estatisticas">
                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone azul">
                        <i className="bi bi-journal-bookmark"></i>
                    </div>
                    <div>
                        <span>Cursos inscritos</span>
                        <h2>3</h2>
                    </div>
                </article>

                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone laranja">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <div>
                        <span>Aulas concluídas</span>
                        <h2>12</h2>
                    </div>
                </article>

                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone verde">
                        <i className="bi bi-trophy"></i>
                    </div>
                    <div>
                        <span>Progresso geral</span>
                        <h2>40%</h2>
                    </div>
                </article>
            </section>

            <section className="painel-secao">
                <div className="painel-titulo">
                    <div>
                        <h2>Continue aprendendo</h2>
                        <p>Retome seus cursos de onde parou.</p>
                    </div>
                    <Link href="/cursos">Ver cursos</Link>
                </div>

                <div className="painel-cursos">
                    <article className="painel-curso">
                        <img
                            src="/imagens/fundamentos.jpg"
                            alt="Curso de fundamentos do xadrez"
                        />
                        <div className="painel-curso-conteudo">
                            <span className="painel-curso-categoria">
                                INICIANTE
                            </span>
                            <h3>Fundamentos do Xadrez</h3>
                            <p>Aprenda as regras e os conceitos básicos.</p>

                            <div className="painel-progresso-texto">
                                <span>Progresso</span>
                                <span>60%</span>
                            </div>

                            <div className="painel-barra">
                                <div className="painel-barra-preenchida sessenta"></div>
                            </div>

                            <Link
                                href="/cursos/1/aulas/1"
                                className="painel-botao"
                            >
                                Continuar aula
                            </Link>
                        </div>
                    </article>

                    <article className="painel-curso">
                        <img
                            src="/imagens/estrategia.jpg"
                            alt="Curso de estratégia no xadrez"
                        />
                        <div className="painel-curso-conteudo">
                            <span className="painel-curso-categoria">
                                INTERMEDIÁRIO
                            </span>
                            <h3>Estratégias de Xadrez</h3>
                            <p>Aprenda a planejar suas próximas jogadas.</p>

                            <div className="painel-progresso-texto">
                                <span>Progresso</span>
                                <span>20%</span>
                            </div>

                            <div className="painel-barra">
                                <div className="painel-barra-preenchida vinte"></div>
                            </div>

                            <Link
                                href="/cursos/2"
                                className="painel-botao"
                            >
                                Ver curso
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="painel-secao">
                <div className="painel-titulo">
                    <div>
                        <h2>Explore e pratique</h2>
                        <p>Desenvolva suas habilidades fora das aulas.</p>
                    </div>
                </div>

                <div className="painel-recursos">
                    <Link href="/movimentos" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-grid-3x3"></i>
                        </div>
                        <div>
                            <h3>Guia de movimentos</h3>
                            <p>Revise como cada peça se movimenta.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link href="/taticas" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-lightbulb"></i>
                        </div>
                        <div>
                            <h3>Treino de táticas</h3>
                            <p>Conheça estratégias e combinações.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link href="/cursos" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-collection-play"></i>
                        </div>
                        <div>
                            <h3>Todos os cursos</h3>
                            <p>Descubra novos conteúdos para estudar.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
}

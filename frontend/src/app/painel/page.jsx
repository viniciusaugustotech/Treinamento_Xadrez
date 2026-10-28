"use client";

import Link from "next/link";
import "./painel.css";

export default function Painel() {

    return (
        <main className="pagina-painel">
            <section className="painel-boas-vindas">
                <div>
                    <span className="painel-etiqueta">ÁREA DO ALUNO</span>
                    <h1>Bem-vindo de volta!</h1>
                    <p>
                        Aproveite as estatísticas, pratique suas habilidades
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

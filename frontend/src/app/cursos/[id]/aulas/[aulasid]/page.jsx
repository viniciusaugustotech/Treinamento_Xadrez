"use client";

import Link from "next/link";
import "./aulas.css";

export default function AulaCurso() {

    return (
        <div className="aulas-pagina">
            <header className="aulas-cabecalho">
                <Link href="/cursos/1" className="aulas-voltar">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para o curso
                </Link>

                <div className="aulas-identificacao">
                    <span>Fundamentos do Xadrez</span>
                    <i className="bi bi-chevron-right"></i>
                    <span>Aula 01</span>
                </div>
            </header>

            <div className="aulas-layout">
                <main className="aulas-conteudo">
                    <section className="aulas-video">
                        <video
                            controls
                            poster="/imagens/fundamentos.jpg"
                        >
                            <source
                                src="/videos/aula-introducao.mp4"
                                type="video/mp4"
                            />
                            Seu navegador não suporta a reprodução de vídeos.
                        </video>
                    </section>

                    <section className="aulas-informacoes">
                        <div className="aulas-etiquetas">
                            <span className="aulas-tag">Módulo 01</span>
                            <span className="aulas-duracao">
                                <i className="bi bi-clock"></i>
                                5 minutos
                            </span>
                        </div>

                        <h1>Introdução ao Xadrez</h1>

                        <p>
                            Nesta aula, você vai conhecer o xadrez,
                            entender o objetivo do jogo e descobrir
                            como começar sua jornada para se tornar
                            um jogador melhor.
                        </p>

                        <div className="aulas-objetivos">
                            <h2>O que você vai aprender</h2>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Conhecer o objetivo principal do xadrez
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Entender como funciona uma partida
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                Identificar os primeiros conceitos do jogo
                            </div>
                        </div>

                        <div className="aulas-navegacao">
                            <Link
                                href="/cursos/1"
                                className="aulas-botao aulas-botao-secundario"
                            >
                                <i className="bi bi-arrow-left"></i>
                                Voltar ao curso
                            </Link>

                            <Link
                                href="/cursos/1/aulas/2"
                                className="aulas-botao"
                            >
                                Próxima aula
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </section>
                </main>

                <aside className="aulas-sidebar">
                    <div className="aulas-sidebar-cabecalho">
                        <div>
                            <h2>Conteúdo do curso</h2>
                            <p>Fundamentos do Xadrez</p>
                        </div>

                        <i className="bi bi-list-ul"></i>
                    </div>

                    <div className="aulas-progresso">
                        <div className="aulas-progresso-texto">
                            <span>Seu progresso</span>
                            <strong>0%</strong>
                        </div>

                        <div className="aulas-barra">
                            <div className="aulas-barra-preenchimento"></div>
                        </div>

                        <p>0 de 20 aulas concluídas</p>
                    </div>

                    <div className="aulas-modulo">
                        <div className="aulas-modulo-titulo">
                            <div>
                                <span className="aulas-modulo-numero">01</span>
                            </div>

                            <div>
                                <h3>Conhecendo o xadrez</h3>
                                <p>4 aulas · 25 minutos</p>
                            </div>

                            <i className="bi bi-chevron-up"></i>
                        </div>

                        <Link
                            href="/cursos/1/aulas/1"
                            className="aulas-item aulas-item-ativa"
                        >
                            <i className="bi bi-play-circle-fill"></i>

                            <div>
                                <span>Introdução ao xadrez</span>
                                <small>5 min</small>
                            </div>

                            <i className="bi bi-play-fill"></i>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/2"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>O tabuleiro e suas casas</span>
                                <small>7 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/3"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Organização das peças</span>
                                <small>6 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/4"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Preparando uma partida</span>
                                <small>7 min</small>
                            </div>
                        </Link>
                    </div>

                    <div className="aulas-modulo">
                        <div className="aulas-modulo-titulo">
                            <div>
                                <span className="aulas-modulo-numero">02</span>
                            </div>

                            <div>
                                <h3>Movimentos das peças</h3>
                                <p>5 aulas · 35 minutos</p>
                            </div>

                            <i className="bi bi-chevron-down"></i>
                        </div>

                        <Link
                            href="/cursos/1/aulas/5"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Movimento dos peões</span>
                                <small>7 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/6"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Torres e bispos</span>
                                <small>7 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/7"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Cavalos e seus movimentos</span>
                                <small>7 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/8"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Dama e rei</span>
                                <small>7 min</small>
                            </div>
                        </Link>

                        <Link
                            href="/cursos/1/aulas/9"
                            className="aulas-item"
                        >
                            <i className="bi bi-play-circle"></i>

                            <div>
                                <span>Exercícios práticos</span>
                                <small>7 min</small>
                            </div>
                        </Link>
                    </div>

                    <div className="aulas-modulo">
                        <div className="aulas-modulo-titulo">
                            <div>
                                <span className="aulas-modulo-numero">03</span>
                            </div>

                            <div>
                                <h3>Regras fundamentais</h3>
                                <p>4 aulas · 30 minutos</p>
                            </div>

                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="aulas-modulo">
                        <div className="aulas-modulo-titulo">
                            <div>
                                <span className="aulas-modulo-numero">04</span>
                            </div>

                            <div>
                                <h3>Primeiras estratégias</h3>
                                <p>4 aulas · 30 minutos</p>
                            </div>

                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="aulas-modulo">
                        <div className="aulas-modulo-titulo">
                            <div>
                                <span className="aulas-modulo-numero">05</span>
                            </div>

                            <div>
                                <h3>Prática e revisão</h3>
                                <p>3 aulas · 30 minutos</p>
                            </div>

                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
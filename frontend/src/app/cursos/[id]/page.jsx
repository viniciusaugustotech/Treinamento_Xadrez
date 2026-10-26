"use client";

import { use } from "react";
import { useParams } from "next/navigation";
import cursos from "../../../../../backend/data/banco.js";
import Link from "next/link";
import "./detalhes.css";

export default function DetalhesCurso() {

    const params = useParams();
    const idCurso = params.id;
    const curso = cursos.find(item => String(item.id) === String(idCurso));

    if (!curso) {
        return <div className="detalhes-pagina"><p>Curso não encontrado</p></div>
    }

    return (
        <div className="detalhes-pagina">
            <div className="detalhes-breadcrumb">
                <Link href="/">Início</Link>
                <i className="bi bi-chevron-right"></i>
                <Link href="/cursos">Cursos</Link>
                <i className="bi bi-chevron-right"></i>
                <span>Detalhes do curso</span>
            </div>

            <section className="detalhes-hero">
                <div className="detalhes-info">
                    <span className="detalhes-tag">Iniciante</span>

                    <h1>{curso.titulo}</h1>

                    <p>
                        {curso.descricao}
                    </p>

                    <div className="detalhes-metricas">
                        <div>
                            <i className="bi bi-clipboard-data"></i>
                            <span>{curso.modulos} módulos</span>
                        </div>

                        <div>
                            <i className="bi bi-clock"></i>
                            <span>{curso.duracao}</span>
                        </div>

                        <div>
                            <i className="bi bi-play-circle"></i>
                            <span>{curso.aulas} aulas</span>
                        </div>
                    </div>

                    <Link href="#conteudo-curso" className="detalhes-botao">
                        Começar curso
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <div className="detalhes-capa">
                    <img
                        src="/imagens/cursos/fundamentos.jpg"
                        alt="Capa do curso Fundamentos do Xadrez"
                    />
                </div>
            </section>

            <div className="detalhes-conteudo">
                <main className="detalhes-principal">
                    <section className="detalhes-secao">
                        <h2>Sobre o curso</h2>

                        <p>
                            {curso.descricao_longa.map((paragrafo, index) => {
                                <p key={index}>
                                    {paragrafo}
                                </p>
                            })}
                        </p>

                        <p>
                            Ao longo das aulas, você aprenderá a analisar
                            jogadas, proteger suas peças e compreender
                            melhor as possibilidades de cada movimento.
                        </p>
                    </section>

                    <section className="detalhes-secao">
                        <h2>O que você vai aprender</h2>

                        <div className="detalhes-aprendizado">
                            <p>
                                <i className="bi bi-check-circle-fill"></i>
                                Conhecer o tabuleiro e as peças
                            </p>

                            <p>
                                <i className="bi bi-check-circle-fill"></i>
                                Entender os movimentos de cada peça
                            </p>

                            <p>
                                <i className="bi bi-check-circle-fill"></i>
                                Aprender as regras fundamentais do jogo
                            </p>

                            <p>
                                <i className="bi bi-check-circle-fill"></i>
                                Compreender xeque, xeque-mate e empate
                            </p>

                            <p>
                                <i className="bi bi-check-circle-fill"></i>
                                Desenvolver suas primeiras estratégias
                            </p>
                        </div>
                    </section>

                    <section
                        className="detalhes-secao"
                        id="conteudo-curso"
                    >
                        <h2>Conteúdo do curso</h2>

                        <p className="detalhes-subtitulo">
                            Confira os módulos e as aulas disponíveis.
                        </p>

                        <div className="detalhes-modulos">
                            <div className="detalhes-modulo">
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>01</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>Conhecendo o xadrez</h3>
                                        <p>4 aulas · 25 minutos</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Introdução ao xadrez</span>
                                        <span>5 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>O tabuleiro e suas casas</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Organização das peças</span>
                                        <span>6 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Preparando uma partida</span>
                                        <span>7 min</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detalhes-modulo">
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>02</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>Movimentos das peças</h3>
                                        <p>5 aulas · 35 minutos</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Movimento dos peões</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Torres e bispos</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Cavalos e seus movimentos</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Dama e rei</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Exercícios práticos</span>
                                        <span>7 min</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detalhes-modulo">
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>03</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>Regras fundamentais</h3>
                                        <p>4 aulas · 30 minutos</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Captura de peças</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Xeque e xeque-mate</span>
                                        <span>8 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Empates e situações especiais</span>
                                        <span>8 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Revisão das regras</span>
                                        <span>7 min</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detalhes-modulo">
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>04</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>Primeiras estratégias</h3>
                                        <p>4 aulas · 30 minutos</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Controlando o centro</span>
                                        <span>7 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Proteção das peças</span>
                                        <span>8 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Desenvolvimento das peças</span>
                                        <span>8 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Planejando suas jogadas</span>
                                        <span>7 min</span>
                                    </div>
                                </div>
                            </div>

                            <div className="detalhes-modulo">
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>05</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>Prática e revisão</h3>
                                        <p>3 aulas · 30 minutos</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Analisando uma partida</span>
                                        <span>10 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Exercícios de revisão</span>
                                        <span>10 min</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-play-circle"></i>
                                        <span>Próximos passos no xadrez</span>
                                        <span>10 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <aside className="detalhes-lateral">
                    <div className="detalhes-progresso-card">
                        <div className="progresso-icone">
                            <i className="bi bi-trophy"></i>
                        </div>

                        <h3>Pronto para aprender?</h3>

                        <p>
                            Comece agora e desenvolva suas habilidades
                            no xadrez, uma aula de cada vez.
                        </p>

                        <div className="progresso-informacoes">
                            <div>
                                <i className="bi bi-bar-chart"></i>
                                <span>Nível</span>
                                <strong>Iniciante</strong>
                            </div>

                            <div>
                                <i className="bi bi-clock"></i>
                                <span>Duração</span>
                                <strong>2h 30min</strong>
                            </div>

                            <div>
                                <i className="bi bi-collection-play"></i>
                                <span>Módulos</span>
                                <strong>5 módulos</strong>
                            </div>
                        </div>

                        <Link
                            href="#conteudo-curso"
                            className="detalhes-botao lateral-botao"
                        >
                            Ver conteúdo
                            <i className="bi bi-arrow-down"></i>
                        </Link>
                    </div>

                    <div className="detalhes-ajuda">
                        <i className="bi bi-lightbulb"></i>

                        <h3>Dica para estudar</h3>

                        <p>
                            Reserve alguns minutos para praticar depois
                            de cada aula. A consistência ajuda a melhorar
                            seu raciocínio estratégico.
                        </p>
                    </div>
                </aside>
            </div>

            <div className="detalhes-voltar">
                <Link href="/cursos">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para cursos
                </Link>
            </div>
        </div>
    );
}
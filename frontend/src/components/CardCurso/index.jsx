"use client";

import Link from "next/link";
import "./CardCurso.css?v=1";

export default function CardCurso(){
    return (
    <div className="cursos">
                <div className="curso">
                    <div className="curso-capa">
                        <section className="tag">
                            <span>Iniciante</span>
                        </section>
                        <section className="imagem">
                            <img src="/imagens/fundamentos.jpg" alt="capa" />
                        </section>
                    </div>
                    <div className="curso-texto">
                        <section className="descricao">
                            <h3>Fundamentos do Xadrez</h3>
                            <p>Aprenda as regras, os movimentos <br />
                            das peças e conceitos básicos para <br />
                            começar a jogar com confiança.</p>
                        </section>
                    </div>
                    <div className="curso-descricao">
                        <section className="modulo">
                            <i className="bi bi-clipboard-data"></i>
                            <p>5 módulos</p>
                        </section>
                        <section className="tempo">
                            <i className="bi bi-clock"></i>
                            <p>2h 30min</p>
                        </section>
                        <section className="botao">
                            <Link href="/">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            </section>
                    </div>
                </div>
                <div className="curso">
                    <div className="curso-capa">
                        <section className="tag">
                            <span>Intermediário</span>
                        </section>
                        <section className="imagem">
                            <img src="/imagens/taticas.jpg" alt="capa" />
                        </section>
                    </div>
                    <div className="curso-texto">
                        <section className="descricao">
                            <h3>Táticas e Combinações</h3>
                            <p>Desenvolva seu olhar táticas e aprenda
                            <br />
                            as principais combinações para decidir 
                            <br />
                            partidas
                            </p>
                        </section>
                    </div>
                    <div className="curso-descricao">
                        <section className="modulo">
                            <i className="bi bi-clipboard-data"></i>
                            <p>6 módulos</p>
                        </section>
                        <section className="tempo">
                            <i className="bi bi-clock"></i>
                            <p>4h 15min</p>
                        </section>
                        <section className="botao">
                            <Link href="/">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            </section>
                    </div>
                </div>
                <div className="curso">
                    <div className="curso-capa">
                        <section className="tag">
                            <span>Avançado</span>
                        </section>
                        <section className="imagem">
                            <img src="/imagens/estrategia.jpg" alt="capa" />
                        </section>
                    </div>
                    <div className="curso-texto">
                        <section className="descricao">
                            <h3>Estratégia e Posicionamento</h3>
                            <p>Entenda os planos estratégicos e como <br /> 
                            controlar o centro, as colunas e as peças <br /> 
                            maiores.</p>
                        </section>
                    </div>
                    <div className="curso-descricao">
                        <section className="modulo">
                            <i className="bi bi-clipboard-data"></i>
                            <p>10 módulos</p>
                        </section>
                        <section className="tempo">
                            <i className="bi bi-clock"></i>
                            <p>6h 45min</p>
                        </section>
                        <section className="botao">
                            <Link href="/">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            </section>
                    </div>
                </div>
                <div className="curso">
                    <div className="curso-capa">
                        <section className="tag">
                            <span>Intermediário</span>
                        </section>
                        <section className="imagem">
                            <img src="/imagens/abertura.jpeg" alt="capa" />
                        </section>
                    </div>
                    <div className="curso-texto">
                        <section className="descricao">
                            <h3>Aberturas Clássicas</h3>
                            <p>Estude as principais aberturas e <br />
                            aprenda a escolher a melhor opção <br />
                            para o seu estilo de jogo.</p>
                        </section>
                    </div>
                    <div className="curso-descricao">
                        <section className="modulo">
                            <i className="bi bi-clipboard-data"></i>
                            <p>7 módulos</p>
                        </section>
                        <section className="tempo">
                            <i className="bi bi-clock"></i>
                            <p>3h 50min</p>
                        </section>
                        <section className="botao">
                            <Link href="/">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            </section>
                    </div>
                </div>
            </div>
    )
}
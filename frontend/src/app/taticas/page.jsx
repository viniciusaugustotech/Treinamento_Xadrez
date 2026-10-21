"use client";

import { aplicarEstilo } from "@backend/utils/cursos.js";
import Link from "next/link";
import "./taticas.css";

export default function Taticas() {
    aplicarEstilo();

    return (
        <div className="pagina-taticas">
            <section className="taticas-banner">
                <div className="taticas-texto">
                    <span className="taticas-tag">Pratique e evolua</span>

                    <h1>Treine suas táticas no xadrez</h1>

                    <p>
                        Resolva desafios, desenvolva seu raciocínio
                        e aprenda a encontrar as melhores jogadas.
                    </p>

                    <Link href="#exercicios" className="taticas-botao">
                        Começar a praticar
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <div className="taticas-imagem">
                    <img
                        src="/imagens/taticas.jpg"
                        alt="Peças de xadrez para treinamento de táticas"
                    />
                </div>
            </section>

            <section className="taticas-introducao">
                <h2>Aprenda jogando</h2>

                <p>
                    Escolha um tipo de exercício e pratique suas habilidades
                    para tomar decisões melhores durante as partidas.
                </p>
            </section>

            <section className="taticas-categorias" id="exercicios">
                <Link href="/taticas" className="taticas-card">
                    <div className="taticas-icone">
                        <i className="bi bi-bullseye"></i>
                    </div>

                    <h3>Xeque-mate</h3>

                    <p>
                        Encontre a sequência de jogadas que leva ao
                        xeque-mate.
                    </p>

                    <span>
                        Praticar
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </Link>

                <Link href="/taticas" className="taticas-card">
                    <div className="taticas-icone">
                        <i className="bi bi-lightning"></i>
                    </div>

                    <h3>Garfo</h3>

                    <p>
                        Aprenda a atacar duas ou mais peças ao mesmo tempo.
                    </p>

                    <span>
                        Praticar
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </Link>

                <Link href="/taticas" className="taticas-card">
                    <div className="taticas-icone">
                        <i className="bi bi-shield-check"></i>
                    </div>

                    <h3>Peças indefesas</h3>

                    <p>
                        Identifique peças desprotegidas e aproveite
                        oportunidades no tabuleiro.
                    </p>

                    <span>
                        Praticar
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </Link>

                <Link href="/taticas" className="taticas-card">
                    <div className="taticas-icone">
                        <i className="bi bi-diagram-3"></i>
                    </div>

                    <h3>Combinações</h3>

                    <p>
                        Descubra sequências de movimentos para conquistar
                        vantagem na partida.
                    </p>

                    <span>
                        Praticar
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </Link>
            </section>

            <section className="taticas-desafio">
                <div>
                    <span className="taticas-tag">Desafio do dia</span>

                    <h2>Está pronto para o próximo movimento?</h2>

                    <p>
                        Analise o tabuleiro, pense nas possibilidades
                        e escolha sua melhor jogada.
                    </p>
                </div>

                <div className="taticas-desafio-imagem">
                    <img
                        src="/imagens/estrategia.jpg"
                        alt="Peças de xadrez em uma posição estratégica"
                    />
                </div>
            </section>
        </div>
    );
}
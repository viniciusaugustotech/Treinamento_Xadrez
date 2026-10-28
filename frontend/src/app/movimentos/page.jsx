"use client";

import Link from "next/link";
import "./movimentos.css";

export default function Movimentos() {

    return (
        <main className="pagina-movimentos">
            <section className="movimentos-banner">
                <div className="movimentos-banner-conteudo">
                    <span className="movimentos-etiqueta">GUIA DO XADREZ</span>
                    <h1>Aprenda os movimentos das peças</h1>
                    <p>
                        Descubra como cada peça se movimenta pelo tabuleiro
                        e aprenda as regras fundamentais para jogar xadrez.
                    </p>
                    <a href="#pecas" className="movimentos-botao">
                        Conhecer as peças
                    </a>
                </div>

                <div className="movimentos-banner-imagem" style={{ backgroundColor: '#1e3a5f', padding: '24px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/imagens/movimento.png"
                        alt="Peças de xadrez sobre um tabuleiro"
                    />
                </div>
            </section>

            <section className="movimentos-introducao">
                <h2>Conheça cada peça</h2>
                <p>
                    Cada peça tem sua própria maneira de se movimentar.
                    Aprenda as diferenças para planejar suas jogadas.
                </p>
            </section>

            <section className="movimentos-grid" id="pecas">
                <article className="movimento-card">
                    <div className="movimento-icone">♙</div>
                    <h3>Peão</h3>
                    <p>
                        Avança uma casa para frente. No primeiro movimento,
                        pode avançar duas casas. Captura peças na diagonal.
                    </p>
                    <span className="movimento-tipo">Movimento especial</span>
                </article>

                <article className="movimento-card">
                    <div className="movimento-icone">♖</div>
                    <h3>Torre</h3>
                    <p>
                        Move-se em linha reta, na horizontal ou vertical,
                        por quantas casas estiverem livres.
                    </p>
                    <span className="movimento-tipo">Linhas retas</span>
                </article>

                <article className="movimento-card">
                    <div className="movimento-icone">♘</div>
                    <h3>Cavalo</h3>
                    <p>
                        Move-se em formato de L: duas casas em uma direção
                        e uma casa perpendicular. Pode saltar outras peças.
                    </p>
                    <span className="movimento-tipo">Movimento em L</span>
                </article>

                <article className="movimento-card">
                    <div className="movimento-icone">♗</div>
                    <h3>Bispo</h3>
                    <p>
                        Desloca-se na diagonal por quantas casas estiverem
                        livres, mantendo a cor das casas em que começou.
                    </p>
                    <span className="movimento-tipo">Diagonais</span>
                </article>

                <article className="movimento-card">
                    <div className="movimento-icone">♕</div>
                    <h3>Dama</h3>
                    <p>
                        Move-se na horizontal, vertical ou diagonal,
                        combinando os movimentos da torre e do bispo.
                    </p>
                    <span className="movimento-tipo">Movimento livre</span>
                </article>

                <article className="movimento-card">
                    <div className="movimento-icone">♔</div>
                    <h3>Rei</h3>
                    <p>
                        Move-se uma casa em qualquer direção, desde que
                        não fique em uma casa ameaçada pelo adversário.
                    </p>
                    <span className="movimento-tipo">Uma casa por vez</span>
                </article>
            </section>

            <section className="movimentos-destaque">
                <div>
                    <h2>Existem movimentos especiais!</h2>
                    <p>
                        Além dos movimentos básicos, o xadrez possui regras
                        como roque, captura en passant e promoção do peão.
                        Conhecê-las ajuda você a jogar melhor.
                    </p>
                </div>
                <Link href="/cursos" className="movimentos-botao">
                    Explorar cursos
                </Link>
            </section>
        </main>
    );
}

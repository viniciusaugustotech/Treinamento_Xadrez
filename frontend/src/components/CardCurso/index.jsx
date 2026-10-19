"use client";

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
                            <img src="/imagens/lista.jpg" alt="modulo" />
                            <p>5 módulos</p>
                        </section>
                        <section className="tempo">
                            <img src="" alt="relogio" />
                            <p>2h 30min</p>
                        </section>
                    </div>
                </div>
            </div>
    )
}
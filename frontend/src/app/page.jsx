"use client";
import Link from "next/link";
import "./globals.css";

import Image from "next/image";

export default function Home() {
  return (
    <>
     <main>
            <div className="inicio">
                <div className="mensagem">
                    <div className="mensagem-topicos">
                        <hr />
                        <section>
                            <p>ESTUDE</p>
                            <p>*</p>
                            <p>EVOLUA</p>
                            <p>*</p>
                            <p>CONQUISTE</p>
                        </section>
                    </div>
                    <div className="mensagem-texto">
                        <section className="titulo">
                            <h2>Torne-se um <br/>
                            jogador melhor</h2>
                        </section>
                        <section className="paragrafo">
                            <p>O Passo de Mestre é o seu aliado no aprendizado e <br/> 
                            aperfeiçoamento do xadrez. Aqui você encontra cursos <br/>
                            completos, táticas estratégicas e muito mais.</p>
                        </section>
                        <section className="Link">
                            <Link href="/">
                            <i className="bi bi-arrow-right-short"></i>
                                <p>Comece agora</p>
                            </Link>
                        </section>
                    </div>
                </div>
                <div className="foto">
                    <img src="/imagens/capa.png" alt="slogan" />
                </div>
            </div>
            <div className="blocos">
                <div className="bloco">
                    <section className="bloco-imagem">
                        <i class="bi bi-mortarboard"></i>
                    </section>
                    <section className="bloco-texto">
                        <h3>Cursos completos</h3>
                        <p>Do básico ao avançado, no seu ritmo.</p>
                    </section>
                </div>
                <div className="bloco">
                <section className="bloco-imagem">
                    <i className="bi bi-bullseye"></i>
                </section>
                <section className="bloco-texto">
                    <h3>Táticas e exercícios</h3>
                    <p>Melhore seu raciocínio estratégico.</p>
                </section>
            </div>
            <div className="bloco">
                <section className="bloco-imagem">
                <i className="bi bi-bar-chart"></i>
                </section>
                <section className="bloco-texto">
                    <h3>Acompanhe seu progresso</h3>
                    <p>Veja suas estatísticas e evolua com dados reais.</p>
                </section>
            </div>
            <div className="bloco">
                <section className="bloco-imagem">
                <i className="bi bi-star"></i>
                </section>
                <section className="bloco-texto">
                    <h3>Recomendações personalizadas</h3>
                    <p>Treinamentos ideias para o seu nível.</p>
                </section>
            </div>
            </div>
        </main>
    </>
  );
}

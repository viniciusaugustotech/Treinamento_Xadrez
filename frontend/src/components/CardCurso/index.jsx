"use client";
import cursos from "../../../../backend/data/banco.js"
import { aplicarEstilo } from "@backend/utils/cursos.js"
import Link from "next/link";
import "./CardCurso.css?v=1";

export default function CardCurso(){
    aplicarEstilo(".tag");

    return (
    <div>
        <div className="secao-cabecalho">
            <div className="cabecalho-titulo">
                <div className="linha-destaque"></div>
                <h1>Cursos em Destaque</h1>
            </div>
            <div className="cabecalho-link">
                <a href="/cursos" className="ver-todos">
                Ver todos os cursos 
                <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
        <div className="cursos">
            { cursos.map((item, index) => (
                <div className="curso" key={index}>
                    <div className="curso-capa">
                        <section className="tag">
                            <span>{item.tag}</span>
                        </section>
                        <section className="imagem">
                            <img src={item.imagem} alt="capa" />
                        </section>
                    </div>
                    <div className="curso-texto">
                        <section className="descricao">
                            <h3>{item.titulo}</h3>
                            <p>{item.descricao}</p>
                        </section>
                    </div>
                    <div className="curso-descricao">
                        <section className="modulo">
                            <i className="bi bi-clipboard-data"></i>
                            <p>{item.modulos} módulos</p>
                        </section>
                        <section className="tempo">
                            <i className="bi bi-clock"></i>
                            <p>{item.duracao}</p>
                        </section>
                        <section className="botao">
                            <Link href={"/cursos/" + item.id}>
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
            ))}
                </div>
            </div>
    )
}
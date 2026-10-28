"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import "./detalhes.css";
import { aplicarEstilo } from "@backend/utils/cursos.js";
const cursos = require("../../../../../backend/data/curso.json");
const modulos = require("../../../../../backend/data/modulo.json");
const aulas = require("../../../../../backend/data/aulas.json");

export default function DetalhesCurso() {

    aplicarEstilo(".detalhes-tag");

    const params = useParams();
    const idCurso = params.id;
    
    const curso = cursos.find(item => String(item.id_curso) === String(idCurso));

    const modulosDoCurso = modulos.filter(mod => String(mod.id_curso) === String(idCurso));
    const primeiroModulo = modulosDoCurso[0];

    const aulasDoPrimeiroModulo = primeiroModulo 
        ? aulas.filter(aula => String(aula.id_modulo) === String(primeiroModulo.id_modulo))
        : [];
    const primeiraAulaId = aulasDoPrimeiroModulo[0]?.id_aula;

    if (!curso) {
        return <div className="detalhes-pagina"><p>Curso não encontrado</p></div>;
    }

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
                    <span className="detalhes-tag">{curso.tag}</span>

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

                    {idCurso && aulas && aulas[idCurso] ? (
                        <Link href={`/cursos/${idCurso}/aulas/${primeiraAulaId}`} className="detalhes-botao">
                            Começar curso
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                        ) : (
                        <button className="detalhes-botao" disabled>Carregando...</button>
                        )}

                </div>

                <div className="detalhes-capa">
                    <img
                        src={curso.imagem}
                        alt="Capa do curso Fundamentos do Xadrez"
                    />
                </div>
            </section>

            <div className="detalhes-conteudo">
                <main className="detalhes-principal">
                    <section className="detalhes-secao">
                        <h2>Sobre o curso</h2>

                            {curso.descricao_longa.map((paragrafo, index) => (
                                <p key={index}>
                                    {paragrafo}
                                </p>
                            ))}

                    </section>

                    <section className="detalhes-secao">
                        <h2>O que você vai aprender</h2>

                        <div className="detalhes-aprendizado">
                            {curso.resumo_conteudo.map((lista, index) => (
                                <p key={index}>
                                <i className="bi bi-check-circle-fill"></i>
                                {lista}
                            </p>
                            ))}
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
                            {modulos.filter(item => item.id_curso == idCurso).map((mod, index) => (
                                <div className="detalhes-modulo" key={index}>
                                <div className="detalhes-modulo-topo">
                                    <div className="detalhes-modulo-numero">
                                        <span>{mod.ordem}</span>
                                    </div>

                                    <div className="detalhes-modulo-info">
                                        <h3>{mod.titulo}</h3>
                                        <p>{mod.aulas_qtd} aulas · {mod.duracao}</p>
                                    </div>

                                    <i className="bi bi-chevron-down"></i>
                                </div>

                                <div className="detalhes-aulas">
                                    {
                                        aulas.filter(obj => String(obj.id_modulo) === String(mod.id_modulo)).map((aula) => (
                                            <div key={aula.id_aula}>
                                                <i className="bi bi-play-circle"></i>
                                                <span>{aula.titulo}</span>
                                                <span>{aula.duracao}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            ))}
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
                                <strong>{curso.tag}</strong>
                            </div>

                            <div>
                                <i className="bi bi-clock"></i>
                                <span>Duração</span>
                                <strong>{curso.duracao}</strong>
                            </div>

                            <div>
                                <i className="bi bi-collection-play"></i>
                                <span>Módulos</span>
                                <strong>{curso.modulos} módulos</strong>
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
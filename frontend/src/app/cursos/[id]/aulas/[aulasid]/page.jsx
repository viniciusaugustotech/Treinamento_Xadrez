"use client";

import Link from "next/link";
import "./aulas.css";
import { useParams } from "next/navigation";
const aulas = require("../../../../../../../backend/data/aulas.json");
const cursos = require("../../../../../../../backend/data/curso.json");
const modulos = require("../../../../../../../backend/data/modulo.json");

export default function AulaCurso() {

    const params = useParams();
    const idCurso = params.id;
    const idAula = params.aulasid;

    const aulaAtual = aulas.find((aula) => String(aula.id_aula) === String(idAula));
    const modulosEncontrados = modulos.find((mod) => String(mod.id_curso) === String(idCurso));
    const curso = cursos.find(item => String(item.id_curso) === String(idCurso));

    return (
        <div className="aulas-pagina">
            <header className="aulas-cabecalho">
                <Link href={"/cursos/"+ idCurso} className="aulas-voltar">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para o curso
                </Link>

                <div className="aulas-identificacao">
                    <span>{curso.titulo}</span>
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

                    { modulosEncontrados ? (
                    <section className="aulas-informacoes">
                        <div className="aulas-etiquetas">
                            <span className="aulas-tag">Módulo {modulosEncontrados.ordem}</span>
                            <span className="aulas-duracao">
                                <i className="bi bi-clock"></i>
                                {modulosEncontrados.duracao}
                            </span>
                        </div>

                        <h1>{aulaAtual.titulo}</h1>

                        <p>
                            {aulaAtual.descricao}
                        </p>

                        <div className="aulas-objetivos">
                            <h2>O que você vai aprender</h2>
                            {aulaAtual.objetivos.map((objetivo, index) => (
                            <div key={index}>
                                <i className="bi bi-check-circle-fill"></i>
                                {objetivo}
                            </div>
                            ))}
                        </div>

                        <div className="aulas-navegacao">
                            <Link
                                href={`/cursos/${Number(idAula) + 1}`}
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
                    ) : (
                        <p>Nenhum módulo encontrado para este curso.</p>
                    )}
                </main>

                <aside className="aulas-sidebar">
                    <div className="aulas-sidebar-cabecalho">
                        <div>
                            <h2>Conteúdo do curso</h2>
                            <p>{curso.titulo}</p>
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
{modulos.filter(modulo => String(modulo.id_curso) === String(idCurso)).map((mod, index) => (
    <div className="aulas-modulo" key={index}>
        <div className="aulas-modulo-titulo">
            <div>
                <span className="aulas-modulo-numero">{mod.ordem}</span>
            </div>

            <div>
                <h3>{mod.titulo}</h3>
                <p>{mod.aulas_qtd} aulas · {mod.duracao}</p>
            </div>

            <i className="bi bi-chevron-up"></i>
        </div>

        {aulas.filter(aula => String(aula.id_modulo) === String(mod.id_modulo)).map((obj, indexAula) => (
            <Link
                key={indexAula}
                href={`/cursos/${idCurso}/aulas/${obj.id_aula}`}
                className={`aulas-item ${String(idAula) === String(obj.id_aula) ? 'aulas-item-ativa' : ''}`}
            >
                <i className="bi bi-play-circle-fill"></i>

                <div>
                    <span>{obj.titulo}</span>
                    <small>{obj.duracao}</small>
                </div>

                <i className="bi bi-play-fill"></i>
            </Link>
        ))}
    </div>
))}

                </aside>
            </div>
        </div>
    );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./aulas.css";

export default function AulaCurso() {
    const params = useParams();
    const idCurso = params?.id;
    const idAula = params?.aulasid;

    const [curso, setCurso] = useState(null);
    const [modulos, setModulos] = useState([]);
    const [aulas, setAulas] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarDados() {
            try {
                const [resCursos, resModulos, resAulas] = await Promise.all([
                    fetch("http://localhost:5000/cursos"),
                    fetch("http://localhost:5000/modulos"),
                    fetch(`http://localhost:5000/cursos/${idCurso}/aulas`)
                ]);

                const dadosCursos = await resCursos.json();
                const dadosModulos = await resModulos.json();
                const dadosAulas = await resAulas.json();

                const listaCursos = Array.isArray(dadosCursos) ? dadosCursos : (dadosCursos.dados || []);
                const listaModulos = Array.isArray(dadosModulos) ? dadosModulos : (dadosModulos.dados || []);
                const listaAulas = Array.isArray(dadosAulas) ? dadosAulas : (dadosAulas.dados || []);

                setCurso(listaCursos.find(item => String(item.id_curso) === String(idCurso)));
                setModulos(listaModulos);
                setAulas(listaAulas);
            } catch (err) {
                console.error(err);
            } finally {
                setCarregando(false);
            }
        }

        if (idCurso) carregarDados();
    }, [idCurso]);

    if (carregando) return <div className="aulas-pagina"><p>Carregando...</p></div>;
    if (!curso) return <div className="aulas-pagina"><p>Curso não encontrado.</p></div>;

    const modulosDoCurso = modulos.filter(mod => String(mod.id_curso) === String(idCurso));
    const idsModulosDoCurso = modulosDoCurso.map(m => String(m.id_modulo));

    const aulasDoCurso = aulas.filter(aula => idsModulosDoCurso.includes(String(aula.id_modulo)));
    const aulaAtual = aulasDoCurso.find(aula => String(aula.id_aula) === String(idAula)) || {};

    const indiceGlobal = aulasDoCurso.findIndex(aula => String(aula.id_aula) === String(idAula));
    const aulasconcluidas = indiceGlobal !== -1 ? indiceGlobal : 0;
    const proximaAulaObj = aulasDoCurso[indiceGlobal + 1];

    const modulosEncontrados = modulos.find(mod => String(mod.id_modulo) === String(aulaAtual?.id_modulo));

    const videoId = aulaAtual.link_youtube 
        ? aulaAtual.link_youtube.split('/').pop().replace('watch?v=', '').split('?')[0] 
        : '';

    const progressoPorcentagem = aulasDoCurso.length 
        ? (((aulasconcluidas + 1) / aulasDoCurso.length) * 100).toFixed(1).replace('.', ',')
        : '0,0';

    return (
        <div className="aulas-pagina">
            <header className="aulas-cabecalho">
                <Link href={"/cursos/" + idCurso} className="aulas-voltar">
                    <i className="bi bi-arrow-left"></i>
                    Voltar para o curso
                </Link>

                <div className="aulas-identificacao">
                    <span>{curso.titulo}</span>
                    <i className="bi bi-chevron-right"></i>
                    <span>Aula {String(aulasconcluidas + 1).padStart(2, '0')}</span>
                </div>
            </header>

            <div className="aulas-layout">
                <main className="aulas-conteudo">
                    <section className="aulas-video">
                        {aulaAtual.link_youtube ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={aulaAtual.titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px", aspectRatio: "16/9" }}
                            ></iframe>
                        ) : (
                            <video controls poster="/imagens/fundamentos.jpg">
                                <source src="/videos/aula-introducao.mp4" type="video/mp4" />
                                Seu navegador não suporta a reprodução de vídeos.
                            </video>
                        )}
                    </section>

                    {modulosEncontrados ? (
                        <section className="aulas-informacoes">
                            <div className="aulas-etiquetas">
                                <span className="aulas-tag">Módulo {modulosEncontrados.ordem}</span>
                                <span className="aulas-duracao">
                                    <i className="bi bi-clock"></i>
                                    {modulosEncontrados.duracao}
                                </span>
                            </div>

                            <h1>{aulaAtual.titulo}</h1>
                            <p>{aulaAtual.descricao}</p>

                            {aulaAtual.objetivos && (
                                <div className="aulas-objetivos">
                                    <h2>O que você vai aprender</h2>
                                    {aulaAtual.objetivos.map((objetivo, index) => (
                                        <div key={index}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            {objetivo}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="aulas-navegacao">
                                <Link
                                    href={`/cursos/${idCurso}`}
                                    className="aulas-botao aulas-botao-secundario"
                                >
                                    <i className="bi bi-arrow-left"></i>
                                    Voltar ao curso
                                </Link>

                                {proximaAulaObj && (
                                    <Link
                                        href={`/cursos/${idCurso}/aulas/${proximaAulaObj.id_aula}`}
                                        className="aulas-botao"
                                    >
                                        Próxima aula
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                )}
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
                            <strong>{progressoPorcentagem}%</strong>
                        </div>

                        <div className="aulas-barra">
                            <div 
                                className="aulas-barra-preenchimento" 
                                style={{ width: `${progressoPorcentagem.replace(',', '.')}%` }}
                            ></div>
                        </div>
                        <p>
                            {aulasconcluidas + 1} de {aulasDoCurso.length} aulas concluídas
                        </p>
                    </div>

                    {modulosDoCurso.map((mod) => (
                        <div className="aulas-modulo" key={mod.id_modulo}>
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

                            {aulas
                                .filter(aula => String(aula.id_modulo) === String(mod.id_modulo))
                                .map((obj) => (
                                    <Link
                                        key={obj.id_aula}
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
                                ))
                            }
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    );
}
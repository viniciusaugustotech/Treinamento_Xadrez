"use client";

import { useState } from "react";
import Link from "next/link";
import "./admin.css";

export default function Admin() {
    const [listaCursos, setListaCursos] = useState([
        { id: 1, titulo: "Fundamentos do Xadrez", nivel: "Iniciante", aulas: 20, alunos: 156, status: "Publicado", imagem: "/imagens/fundamentos.jpg" },
        { id: 2, titulo: "Estratégias de Xadrez", nivel: "Intermediário", aulas: 15, alunos: 92, status: "Publicado", imagem: "/imagens/estrategia.jpg" },
        { id: 3, titulo: "Táticas Avançadas", nivel: "Avançado", aulas: 18, alunos: 45, status: "Publicado", imagem: "/imagens/taticas.jpg" }
    ]);

    const excluirCurso = (id) => {
        setListaCursos(listaCursos.filter(curso => curso.id !== id));
    };

    return (
        <main className="admin-pagina" style={{ display: "block", padding: "40px 6%" }}>
            
            <header className="admin-topo" style={{ marginBottom: "35px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <span className="admin-subtitulo" style={{ letterSpacing: "1px", fontWeight: "700" }}>PAINEL DE CONTROLE</span>
                    <h1 style={{ fontSize: "32px", margin: "10px 0" }}>Visão Geral do Sistema</h1>
                    <p style={{ color: "#637587" }}>Acompanhe os principais indicadores e gerencie a listagem de dados.</p>
                </div>

                <Link href="/" className="admin-ver-site" style={{ textDecoration: "none", fontWeight: "600" }}>
                    <i className="bi bi-box-arrow-up-right" style={{ marginRight: "8px" }}></i>
                    Ver site
                </Link>
            </header>

            <section className="admin-indicadores" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
                <article className="admin-indicador">
                    <div className="admin-indicador-topo">
                        <span>Total de alunos</span>
                        <i className="bi bi-people"></i>
                    </div>
                    <h2>248</h2>
                    <p>Alunos cadastrados</p>
                </article>

                <article className="admin-indicador">
                    <div className="admin-indicador-topo">
                        <span>Cursos publicados</span>
                        <i className="bi bi-journal-bookmark"></i>
                    </div>
                    <h2>{listaCursos.length}</h2>
                    <p>Cursos disponíveis</p>
                </article>

                <article className="admin-indicador">
                    <div className="admin-indicador-topo">
                        <span>Aulas cadastradas</span>
                        <i className="bi bi-play-circle"></i>
                    </div>
                    <h2>86</h2>
                    <p>Conteúdos registrados</p>
                </article>

                <article className="admin-indicador">
                    <div className="admin-indicador-topo">
                        <span>Matrículas</span>
                        <i className="bi bi-graph-up-arrow"></i>
                    </div>
                    <h2>573</h2>
                    <p>Matrículas acumuladas</p>
                </article>
            </section>

            <section className="admin-bloco">
                <div className="admin-bloco-titulo" style={{ marginBottom: "20px" }}>
                    <div>
                        <h2>Resumo dos Cursos Ativos</h2>
                        <p>Consulte os registros do banco de dados e gerencie a remoção de itens da tabela.</p>
                    </div>
                </div>

                <div className="admin-tabela-container">
                    <table className="admin-tabela">
                        <thead>
                            <tr>
                                <th>Curso</th>
                                <th>Nível</th>
                                <th>Aulas Ativas</th>
                                <th>Alunos Ativos</th>
                                <th>Status</th>
                                <th style={{ textAlign: "right", paddingRight: "20px" }}>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listaCursos.map((curso) => (
                                <tr key={curso.id}>
                                    <td>
                                        <div className="admin-curso">
                                            <img src={curso.imagem} alt={curso.titulo} />
                                            <span>{curso.titulo}</span>
                                        </div>
                                    </td>
                                    <td>{curso.nivel}</td>
                                    <td>{curso.aulas} aulas</td>
                                    <td>{curso.alunos} alunos</td>
                                    <td>
                                        <span className="admin-status publicado">
                                            {curso.status}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: "right", paddingRight: "20px" }}>
                                        <button 
                                            type="button" 
                                            className="perfil-botao secundario" 
                                            style={{ color: "#d32f2f", borderColor: "#fdadad", padding: "6px 12px", fontSize: "12px" }}
                                            onClick={() => excluirCurso(curso.id)}
                                        >
                                            <i className="bi bi-trash" style={{ marginRight: "4px" }}></i> Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </main>
    );
}

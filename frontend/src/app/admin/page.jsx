"use client";

import Link from "next/link";
import "./admin.css";

export default function Admin() {

    return (
        <main className="admin-pagina">
            <aside className="admin-sidebar">
                <Link href="/" className="admin-logo">
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                    <span>Passo de Mestre</span>
                </Link>

                <span className="admin-menu-titulo">ADMINISTRAÇÃO</span>

                <nav className="admin-menu">
                    <Link href="/admin" className="admin-menu-item ativo">
                        <i className="bi bi-speedometer2"></i>
                        Visão geral
                    </Link>

                    <Link href="/admin/cursos" className="admin-menu-item">
                        <i className="bi bi-journal-bookmark"></i>
                        Cursos
                    </Link>

                    <Link href="/admin/alunos" className="admin-menu-item">
                        <i className="bi bi-people"></i>
                        Alunos
                    </Link>

                    <Link href="/admin/aulas" className="admin-menu-item">
                        <i className="bi bi-play-circle"></i>
                        Aulas
                    </Link>

                    <Link href="/admin/relatorios" className="admin-menu-item">
                        <i className="bi bi-bar-chart"></i>
                        Relatórios
                    </Link>

                    <Link href="/admin/configuracoes" className="admin-menu-item">
                        <i className="bi bi-gear"></i>
                        Configurações
                    </Link>
                </nav>

                <div className="admin-sidebar-rodape">
                    <div className="admin-avatar">A</div>
                    <div>
                        <strong>Administrador</strong>
                        <span>Gestão da plataforma</span>
                    </div>
                </div>
            </aside>

            <section className="admin-conteudo">
                <header className="admin-topo">
                    <div>
                        <span className="admin-subtitulo">PAINEL DE CONTROLE</span>
                        <h1>Visão geral</h1>
                        <p>Acompanhe os principais dados da plataforma.</p>
                    </div>

                    <Link href="/" className="admin-ver-site">
                        <i className="bi bi-box-arrow-up-right"></i>
                        Ver site
                    </Link>
                </header>

                <section className="admin-indicadores">
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
                        <h2>12</h2>
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
                    <div className="admin-bloco-titulo">
                        <div>
                            <h2>Gerenciamento de cursos</h2>
                            <p>Consulte os cursos cadastrados na plataforma.</p>
                        </div>

                        <Link href="/admin/cursos" className="admin-botao">
                            <i className="bi bi-plus-lg"></i>
                            Gerenciar cursos
                        </Link>
                    </div>

                    <div className="admin-tabela-container">
                        <table className="admin-tabela">
                            <thead>
                                <tr>
                                    <th>Curso</th>
                                    <th>Nível</th>
                                    <th>Aulas</th>
                                    <th>Alunos</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div className="admin-curso">
                                            <img
                                                src="/imagens/fundamentos.jpg"
                                                alt=""
                                            />
                                            <span>Fundamentos do Xadrez</span>
                                        </div>
                                    </td>
                                    <td>Iniciante</td>
                                    <td>12</td>
                                    <td>156</td>
                                    <td>
                                        <span className="admin-status publicado">
                                            Publicado
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="admin-curso">
                                            <img
                                                src="/imagens/estrategia.jpg"
                                                alt=""
                                            />
                                            <span>Estratégias de Xadrez</span>
                                        </div>
                                    </td>
                                    <td>Intermediário</td>
                                    <td>18</td>
                                    <td>92</td>
                                    <td>
                                        <span className="admin-status publicado">
                                            Publicado
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="admin-curso">
                                            <img
                                                src="/imagens/taticas.jpg"
                                                alt=""
                                            />
                                            <span>Táticas Avançadas</span>
                                        </div>
                                    </td>
                                    <td>Avançado</td>
                                    <td>15</td>
                                    <td>64</td>
                                    <td>
                                        <span className="admin-status rascunho">
                                            Em preparação
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="admin-bloco">
                    <div className="admin-bloco-titulo">
                        <div>
                            <h2>Acesso rápido</h2>
                            <p>Atalhos para as principais tarefas administrativas.</p>
                        </div>
                    </div>

                    <div className="admin-atalhos">
                        <Link href="/admin/cursos" className="admin-atalho">
                            <div className="admin-atalho-icone azul">
                                <i className="bi bi-journal-plus"></i>
                            </div>
                            <div>
                                <h3>Gerenciar cursos</h3>
                                <p>Cadastrar e editar cursos</p>
                            </div>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link href="/admin/alunos" className="admin-atalho">
                            <div className="admin-atalho-icone laranja">
                                <i className="bi bi-person-lines-fill"></i>
                            </div>
                            <div>
                                <h3>Gerenciar alunos</h3>
                                <p>Consultar usuários cadastrados</p>
                            </div>
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link href="/admin/relatorios" className="admin-atalho">
                            <div className="admin-atalho-icone verde">
                                <i className="bi bi-file-earmark-bar-graph"></i>
                            </div>
                            <div>
                                <h3>Relatórios</h3>
                                <p>Acompanhar os dados da plataforma</p>
                            </div>
                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}

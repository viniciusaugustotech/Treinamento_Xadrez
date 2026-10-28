"use client";

import Link from "next/link";
import "./painel.css";
import { useEffect, useState } from "react";

export default function Painel() {
    const [usuario, setUsuario] = useState(null);
    const [totalCursos, setTotalCursos] = useState(0);
    const [totalAulas, setTotalAulas] = useState(0);
    const [progresso, setProgresso] = useState(0);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarDadosPainel() {
            try {
                const usuarioSalvo = localStorage.getItem("usuario");
                if (!usuarioSalvo) {
                    setCarregando(false);
                    return;
                }

                const dadosLocais = JSON.parse(usuarioSalvo);
                const idProcurado = Number(dadosLocais.id_usuario || dadosLocais.id);

                if (!idProcurado) {
                    setCarregando(false);
                    return;
                }

                const res = await fetch("http://localhost:5000/usuarios");
                const listaUsuarios = await res.json();
                const usuariosArray = Array.isArray(listaUsuarios) ? listaUsuarios : (listaUsuarios.dados || []);

                const usuarioBanco = usuariosArray.find(
                    u => Number(u.id_usuario || u.id) === idProcurado
                );

                if (usuarioBanco) {
                    setUsuario(usuarioBanco);

                    const cursos = usuarioBanco.cursos_inscritos || [];
                    const aulas = usuarioBanco.aulas_concluidas || [];

                    const qtdCursos = cursos.length;
                    const qtdAulas = aulas.length;

                    setTotalCursos(qtdCursos);
                    setTotalAulas(qtdAulas);

                    if (qtdCursos > 0) {
                        const totalAulasEstimadas = qtdCursos * 10; 
                        const pctCalculada = Math.min(Math.round((qtdAulas / totalAulasEstimadas) * 100), 100);
                        setProgresso(pctCalculada);
                    } else {
                        setProgresso(0);
                    }
                } else {
                    setUsuario(dadosLocais);
                }

            } catch (erro) {
                console.error("Erro ao carregar dados do painel:", erro);
            } finally {
                setCarregando(false);
            }
        }

        carregarDadosPainel();
    }, []);

    if (carregando) {
        return (
            <main className="pagina-painel">
                <p style={{ padding: "2rem" }}>Carregando dados do painel...</p>
            </main>
        );
    }

    if (!usuario) {
        return (
            <main className="pagina-painel" style={{ padding: "2rem", textAlign: "center" }}>
                <h2>Acesso restrito</h2>
                <p>Você precisa estar logado para acessar o painel.</p>
                <br />
                <Link href="/login" style={{ textDecoration: "underline", color: "#0070f3" }}>
                    Ir para o Login
                </Link>
            </main>
        );
    }

    return (
        <main className="pagina-painel">
            <section className="painel-boas-vindas">
                <div>
                    <span className="painel-etiqueta">ÁREA DO ALUNO</span>
                    <h1>Bem-vindo de volta, {usuario.nome_usuario || usuario.nome || "Enxadrista"}!</h1>
                    <p>
                        Aproveite as estatísticas, pratique suas habilidades
                        e avance no seu caminho para dominar o xadrez.
                    </p>
                </div>

                <div className="painel-imagem" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/imagens/tabuleiro.jpg"
                        alt="Tabuleiro de xadrez"
                    />
                </div>
            </section>

            <section className="painel-estatisticas">
                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone azul">
                        <i className="bi bi-journal-bookmark"></i>
                    </div>
                    <div>
                        <span>Cursos inscritos</span>
                        <h2>{totalCursos}</h2>
                    </div>
                </article>

                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone laranja">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <div>
                        <span>Aulas concluídas</span>
                        <h2>{totalAulas}</h2>
                    </div>
                </article>

                <article className="painel-estatistica">
                    <div className="painel-estatistica-icone verde">
                        <i className="bi bi-trophy"></i>
                    </div>
                    <div>
                        <span>Progresso geral</span>
                        <h2>{progresso}%</h2>
                    </div>
                </article>
            </section>

            <section className="painel-secao">
                <div className="painel-titulo">
                    <div>
                        <h2>Explore e pratique</h2>
                        <p>Desenvolva suas habilidades fora das aulas.</p>
                    </div>
                </div>

                <div className="painel-recursos">
                    <Link href="/movimentos" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-grid-3x3"></i>
                        </div>
                        <div>
                            <h3>Guia de movimentos</h3>
                            <p>Revise como cada peça se movimenta.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link href="/taticas" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-lightbulb"></i>
                        </div>
                        <div>
                            <h3>Treino de táticas</h3>
                            <p>Conheça estratégias e combinações.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link href="/cursos" className="painel-recurso">
                        <div className="painel-recurso-icone">
                            <i className="bi bi-collection-play"></i>
                        </div>
                        <div>
                            <h3>Todos os cursos</h3>
                            <p>Descubra novos conteúdos para estudar.</p>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </main>
    );
}
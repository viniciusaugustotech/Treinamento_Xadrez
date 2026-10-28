"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./cursos.css";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);

  useEffect(() => {
    async function buscarCursos() {
      try {
        const res = await fetch("http://localhost:5000/cursos");
        if (res.ok) {
          const dados = await res.json();
          setCursos(Array.isArray(dados) ? dados : dados.dados || []);
        }
      } catch (erro) {
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    }
    buscarCursos();
  }, []);

  function handleTagChange(tag) {
    if (tagsSelecionadas.includes(tag)) {
      setTagsSelecionadas(tagsSelecionadas.filter((item) => item !== tag));
    } else {
      setTagsSelecionadas([...tagsSelecionadas, tag]);
    }
  }

  function limparFiltros() {
    setBusca("");
    setTagsSelecionadas([]);
  }

  const cursosFiltrados = cursos.filter((curso) => {
    const textoMatch =
      curso.titulo?.toLowerCase().includes(busca.toLowerCase()) ||
      curso.descricao?.toLowerCase().includes(busca.toLowerCase());
    const tagMatch =
      tagsSelecionadas.length === 0 || tagsSelecionadas.includes(curso.tag);
    return textoMatch && tagMatch;
  });

  const contarPorTag = (tag) => cursos.filter((c) => c.tag === tag).length;

  return (
    <main>
      <div className="banner-cursos">
        <div className="banner-mensagem">
          <div className="banner-topicos">
            <hr />
            <section>
              <p>CURSOS</p>
            </section>
          </div>

          <div className="banner-texto">
            <h1>
              Desenvolva suas
              <br />
              habilidades no xadrez
            </h1>

            <p>
              Explore nossos cursos e encontre o treinamento ideal para
              <br />
              o seu nível. Do básico ao avançado, temos o curso certo para você.
            </p>
          </div>
        </div>

        <div className="banner-imagem">
          <img src="/imagens/capa-cursos.png" alt="Peças de xadrez" />
        </div>

        <div className="banner-frase">
          <p>
            Aprender xadrez
            <br />
            é construir um
            <br />
            pensamento mais
            <br />
            estratégico.
          </p>
        </div>
      </div>

      <div className="catalogo">
        <aside className="filtros">
          <h2>
            <i className="bi bi-funnel-fill"></i> Filtros
          </h2>

          <div className="filtro-grupo">
            <h3>Buscar curso</h3>
            <div className="filtro-busca">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Digite o nome do curso..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          <div className="filtro-grupo">
            <h3>Nível de dificuldade</h3>

            <label>
              <input
                type="checkbox"
                checked={tagsSelecionadas.includes("Iniciante")}
                onChange={() => handleTagChange("Iniciante")}
              />
              <span>Iniciante</span>
              <small>({contarPorTag("Iniciante")})</small>
            </label>

            <label>
              <input
                type="checkbox"
                checked={tagsSelecionadas.includes("Intermediário")}
                onChange={() => handleTagChange("Intermediário")}
              />
              <span>Intermediário</span>
              <small>({contarPorTag("Intermediário")})</small>
            </label>

            <label>
              <input
                type="checkbox"
                checked={tagsSelecionadas.includes("Avançado")}
                onChange={() => handleTagChange("Avançado")}
              />
              <span>Avançado</span>
              <small>({contarPorTag("Avançado")})</small>
            </label>
          </div>

          <button className="limpar-filtros" onClick={limparFiltros}>
            <i className="bi bi-arrow-repeat"></i> Limpar filtros
          </button>
        </aside>

        <section className="resultado-cursos">
          <div className="resultado-topo">
            <p>{cursosFiltrados.length} curso(s) encontrado(s)</p>
          </div>

          {carregando ? (
            <p style={{ padding: "2rem" }}>Carregando cursos do banco...</p>
          ) : cursosFiltrados.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <p>Nenhum curso encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="lista-cursos">
              {cursosFiltrados.map((item) => {
                const classeTag = item.tag
                  ?.toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "");

                return (
                  <article className="curso" key={item.id_curso}>
                    <div className="curso-imagem">
                      <img src={item.imagem} alt={item.titulo} />
                      <span className={`nivel ${classeTag}`}>{item.tag}</span>
                    </div>

                    <div className="curso-conteudo">
                      <h3>{item.titulo}</h3>
                      <p>{item.descricao}</p>

                      <div className="curso-info">
                        <span>
                          <i className="bi bi-journal-bookmark"></i>{" "}
                          {item.modulos} módulos
                        </span>
                        <span>
                          <i className="bi bi-clock"></i> {item.duracao}
                        </span>
                      </div>

                      <Link href={`/cursos/${item.id_curso}`} className="curso-detalhes">
                        Ver detalhes <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
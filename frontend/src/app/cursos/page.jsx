"use client";

import Link from "next/link";
import "./cursos.css";
const cursos = require("../../../../backend/data/curso.json");

export default function Cursos() {
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
            <h3>Nível de dificuldade</h3>

            <label>
              <input type="checkbox" />
              <span>Iniciante</span>
              <small>(4)</small>
            </label>

            <label>
              <input type="checkbox" />
              <span>Intermediário</span>
              <small>(5)</small>
            </label>

            <label>
              <input type="checkbox" />
              <span>Avançado</span>
              <small>(3)</small>
            </label>
          </div>

          <div className="filtro-grupo">
            <h3>Duração</h3>

            <label>
              <input type="checkbox" />
              <span>Até 2h</span>
              <small>(3)</small>
            </label>

            <label>
              <input type="checkbox" />
              <span>2h a 5h</span>
              <small>(6)</small>
            </label>

            <label>
              <input type="checkbox" />
              <span>Mais de 5h</span>
              <small>(3)</small>
            </label>
          </div>

          <div className="filtro-grupo">
            <h3>Buscar curso</h3>

            <div className="filtro-busca">
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Digite o nome do curso..." />
            </div>
          </div>

          <button className="limpar-filtros">
            <i className="bi bi-arrow-repeat"></i> Limpar filtros
          </button>
        </aside>

        <section className="resultado-cursos">
          <div className="resultado-topo">
            <p>10 cursos encontrados</p>

            <div className="ordenacao">
              <label htmlFor="ordenar">Ordenar por:</label>
              <select id="ordenar">
                <option>Mais populares</option>
                <option>Nome do curso</option>
                <option>Menor duração</option>
              </select>
            </div>
          </div>

          <div className="lista-cursos">
            {cursos.map((item, index) => (
              <article className="curso" key={index}>
              <div className="curso-imagem">
                <img src="/imagens/fundamentos.jpg" alt="Fundamentos do Xadrez" />
                <span className="nivel iniciante">{item.tag}</span>
              </div>

              <div className="curso-conteudo">
                <h3>{item.titulo}</h3>
                <p>
                  {item.descricao}
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> {item.modulos} módulos</span>
                  <span><i className="bi bi-clock"></i> 2h 30min</span>
                </div>

                <Link href="/cursos/1" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>
            ))}
          </div>

          <div className="paginacao">
            <button disabled>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="pagina-ativa">1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
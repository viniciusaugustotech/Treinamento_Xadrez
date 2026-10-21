"use client";

import Link from "next/link";
import "./cursos.css";

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
            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/fundamentos.jpg" alt="Fundamentos do Xadrez" />
                <span className="nivel iniciante">Iniciante</span>
              </div>

              <div className="curso-conteudo">
                <h3>Fundamentos do Xadrez</h3>
                <p>
                  Aprenda as regras, os movimentos das peças e conceitos básicos
                  para começar a jogar com confiança.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 5 módulos</span>
                  <span><i className="bi bi-clock"></i> 2h 30min</span>
                </div>

                <Link href="/cursos/1" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>

            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/taticas.jpg" alt="Táticas e Combinações" />
                <span className="nivel intermediario">Intermediário</span>
              </div>

              <div className="curso-conteudo">
                <h3>Táticas e Combinações</h3>
                <p>
                  Desenvolva seu olhar tático e aprenda as principais combinações
                  para decidir partidas.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 8 módulos</span>
                  <span><i className="bi bi-clock"></i> 4h 15min</span>
                </div>

                <Link href="/cursos/2" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>

            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/aberturas.jpg" alt="Aberturas Clássicas" />
                <span className="nivel intermediario">Intermediário</span>
              </div>

              <div className="curso-conteudo">
                <h3>Aberturas Clássicas</h3>
                <p>
                  Estude as principais aberturas e aprenda a escolher a melhor
                  opção para o seu estilo de jogo.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 7 módulos</span>
                  <span><i className="bi bi-clock"></i> 3h 50min</span>
                </div>

                <Link href="/cursos/3" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>

            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/estrategia.jpg" alt="Estratégia e Posicionamento" />
                <span className="nivel avancado">Avançado</span>
              </div>

              <div className="curso-conteudo">
                <h3>Estratégia e Posicionamento</h3>
                <p>
                  Entenda os planos estratégicos e como controlar o centro,
                  as colunas e as peças maiores.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 10 módulos</span>
                  <span><i className="bi bi-clock"></i> 6h 45min</span>
                </div>

                <Link href="/cursos/4" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>

            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/finais.jpg" alt="Finais de Partida" />
                <span className="nivel iniciante">Iniciante</span>
              </div>

              <div className="curso-conteudo">
                <h3>Finais de Partida</h3>
                <p>
                  Aprenda os principais finais e técnicas para converter
                  vantagens em vitórias.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 6 módulos</span>
                  <span><i className="bi bi-clock"></i> 3h 20min</span>
                </div>

                <div className="curso-progresso">
                  <div><span></span></div>
                  <small>3 de 6</small>
                </div>

                <Link href="/cursos/5" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>

            <article className="curso">
              <div className="curso-imagem">
                <img src="/imagens/meio-jogo.jpg" alt="Xadrez no Meio-Jogo" />
                <span className="nivel intermediario">Intermediário</span>
              </div>

              <div className="curso-conteudo">
                <h3>Xadrez no Meio-Jogo</h3>
                <p>
                  Domine as ideias principais do meio-jogo e aprenda a criar
                  planos eficientes.
                </p>

                <div className="curso-info">
                  <span><i className="bi bi-journal-bookmark"></i> 8 módulos</span>
                  <span><i className="bi bi-clock"></i> 5h 10min</span>
                </div>

                <Link href="/cursos/6" className="curso-detalhes">
                  Ver detalhes <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>
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
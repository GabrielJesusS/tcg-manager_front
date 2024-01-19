<h1>Pokémon TCG Manager</h1>
<p>Este é o repositório oficial do projeto <strong>Pokémon TCG Manager</strong>, desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) em Análise e Desenvolvimento de Sistemas. Este projeto é um "blog" dedicado ao Pokémon Trading Card Game (TCG) e foi construído usando Next.js 13, aproveitando as funcionalidades de Static App e integrando-se a uma API REST que consome dados da API pública <strong><a href="https://pokemontcg.io/">https://pokemontcg.io/</a></strong>.</p>

<h2>Visão Geral</h2>

<p>O <strong>Pokémon TCG Manager</strong> é uma plataforma destinada aos entusiastas do Pokémon TCG, oferecendo um espaço centralizado para compartilhar informações, estratégias, análises de cartas e notícias relevantes sobre o universo do jogo.</p>

<h2>Tecnologias Utilizadas</h2>

<ul>
<li><strong>Next.js 13:</strong> A escolha desta versão específica do Next.js aproveita as últimas funcionalidades e melhorias de desempenho.</li>
<li><strong>Static App:</strong> Utilizamos geração estática para garantir uma experiência de usuário rápida e eficiente.</li>
<li><strong>API REST:</strong> Desenvolvemos uma API REST personalizada para interagir com a API pública do <a href="https://pokemontcg.io/">pokemontcg.io</a>, proporcionando um controle mais preciso sobre os dados consumidos.</li>
<li><strong><a href="https://pokemontcg.io/">pokemontcg.io</a> API:</strong> Integrada para obter informações em tempo real sobre cartas, conjuntos e outros dados relevantes do Pokémon TCG.</li>
</ul>

<h2>Funcionalidades Principais</h2>

<ul>
<li><strong>Listagem de Cartas:</strong> Apresentação organizada das cartas do Pokémon TCG, incluindo detalhes como nome, tipo, raridade e estatísticas.</li>
<li><strong>Análises de Cartas:</strong> Espaço para análises detalhadas de cartas específicas, estratégias de jogo e discussões sobre metagame.</li>
<li><strong>Notícias e Atualizações:</strong> Publicação de notícias relevantes sobre lançamentos de conjuntos, eventos, e atualizações no mundo do Pokémon TCG.</li>
<li><strong>Comunidade:</strong> Área dedicada à interação da comunidade, permitindo que os usuários compartilhem experiências, estratégias e troquem informações.</li>
</ul>

<h2>Instalação</h2>

<ol>
<li><strong>Clone o Repositório do front end:</strong>
<pre><code>git clone https://github.com/GabrielJesusS/tcg-manager_front
cd pokemon-tcg-manager</code></pre>
</li>

<li><strong>Instale as Dependências:</strong>
<pre><code>npm install</code></pre>
</li>

<li><strong>Configure as Variáveis de Ambiente:</strong>
<p>Renomeie o arquivo <code>.env.example</code> para <code>.env</code> e adicione as configurações necessárias.</p>
<ol>
<li><code>NEXT_PUBLIC_API_URL="url para a api rest"</code></li>
<li><code>NEXT_PUBLIC_COOKIE_NAME="nome do cookie a ser salvo"</code></li>
</ol>
</li>

<li><strong>Execute o Projeto:</strong>
<pre><code>npm run dev</code></pre>
</li>
</ol>
<p align="center">
  <img src="https://i.chzbgr.com/full/8480838656/h2D5A6C1C/pokemon-memes-squirtle-dancing-gif" />
</p>

<small>Lembre-se, para que a aplicação seja executada de forma correta, é necessário também acessar o repositório da <a href="https://github.com/L3m0S/TCG_MANAGER/tree/master">api rest</a></small>

<p><a href="https://github.com/GabrielJesusS">Gabriel Jesus</a> & <a href="https://github.com/L3m0S">Gabriel Lemos</a></p>

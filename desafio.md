# Sobre

Estes documento README tem como objetivo fornecer as informaÃ§Ãµes necessÃ¡rias para realizaÃ§Ã£o do projeto de avaliaÃ§Ã£o de candidatos.

# ðŸ— O que fazer?

- VocÃª deve realizar um fork deste repositÃ³rio e, ao finalizar, enviar o link do seu repositÃ³rio para a nossa equipe. Lembre-se, NÃƒO Ã© necessÃ¡rio criar um Pull Request para isso, nÃ³s iremos avaliar e retornar por email o resultado do seu teste.

# ðŸš¨ Requisitos

- A API deverÃ¡ ser construÃ­da em **NodeJS** ou **Rails**
- Implementar autenticaÃ§Ã£o e deverÃ¡ seguir o padrÃ£o **JWT**, lembrando que o token a ser recebido deverÃ¡ ser no formato **Bearer**
- Caso seja desenvolvida em NodeJS o seu projeto terÃ¡ que ser implementado em **ExpressJS** ou **SailsJS**
- Para a comunicaÃ§Ã£o com o banco de dados utilize algum **ORM**/**ODM**
- Bancos relacionais permitidos:
  - MySQL
  - MariaDB
  - Postgre
- Bancos nÃ£o relacionais permitidos:
  - MongoDB
- Sua API deverÃ¡ seguir os padrÃµes Rest na construÃ§Ã£o das rotas e retornos
- Sua API deverÃ¡ conter a collection/variÃ¡veis do postman ou algum endpoint da documentaÃ§Ã£o em openapi para a realizaÃ§Ã£o do teste
- Ã‰ desejÃ¡vel que o teste esteja na liguagem  **JavaScript** buscando avaliar o entendimento completo da linguagem e nÃ£o de estruturas ou dependÃªncias que abstraiam determinadas definiÃ§Ãµes nÃ£o alheias ao ECMAScript. No entanto, testes realizados em **TypeScript** tambÃ©m serÃ£o aceitos.

# ðŸ•µðŸ»â€â™‚ï¸ Itens a serem avaliados

- Estrutura do Projeto
- SeguranÃ§a da API, como autenticaÃ§Ã£o, senhas salvas no banco, SQL Injection e outros
- Boas prÃ¡ticas da Linguagem/Framework
- Seu projeto deverÃ¡ seguir tudo o que foi exigido na seÃ§Ã£o [O que desenvolver?](##--o-que-desenvolver)
- Migrations para a criaÃ§Ã£o das tabelas do banco relacional

# ðŸŽ Extra

Esses itens nÃ£o sÃ£o obrigatÃ³rios, porÃ©m desejados.

- Testes unitÃ¡rios
- Linter
- Code Formater

**Obs.: Lembrando que o uso de algum linter ou code formater irÃ¡ depender da linguagem que sua API for criada**

# ðŸ–¥ O que desenvolver?

VocÃª deverÃ¡ criar uma API que o site [IMDb](https://www.imdb.com/) irÃ¡ consultar para exibir seu conteÃºdo, sua API deve conter as seguintes features:

- Admin

  - Cadastro
  - EdiÃ§Ã£o
  - ExclusÃ£o lÃ³gica (DesativaÃ§Ã£o)

- UsuÃ¡rio

  - Cadastro
  - EdiÃ§Ã£o
  - ExclusÃ£o lÃ³gica (DesativaÃ§Ã£o)

- Filmes

  - Cadastro (Somente um usuÃ¡rio administrador poderÃ¡ realizar esse cadastro)
  - Voto (A contagem dos votos serÃ¡ feita por usuÃ¡rio de 0-4 que indica quanto o usuÃ¡rio gostou do filme)
  - Listagem (deverÃ¡ ter filtro por diretor, nome, gÃªnero e/ou atores)
  - Detalhe do filme trazendo todas as informaÃ§Ãµes sobre o filme, inclusive a mÃ©dia dos votos

**Obs.: Apenas os usuÃ¡rios poderÃ£o votar nos filmes e a API deverÃ¡ validar quem Ã© o usuÃ¡rio que estÃ¡ acessando, ou seja, se Ã© admin ou nÃ£o**

# ðŸ”— Links

- DocumentaÃ§Ã£o JWT https://jwt.io/
- Frameworks NodeJS:

  1. https://expressjs.com/pt-br/
  2. https://sailsjs.com/

- Guideline rails http://guides.rubyonrails.org/index.html
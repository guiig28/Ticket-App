# Gerenciador de Tickets para Resolução de Problemas de Computação

Este é um projeto de aplicação web desenvolvida em React.js com o auxílio do Next.js, utilizando o Mongoose para se conectar ao banco de dados MongoDB Atlas. A aplicação foi criada como parte de um estudo de desenvolvimento fullstack com base em uma [videoaula](https://youtu.be/H0vhkoXljq0?si=7HMJV_szs6oAUK4g) fornecida pela instituição FreeCodeCamp.org.

## Visão Geral

Este aplicativo é um gerenciador de tickets projetado para ajudar equipes de suporte e administradores a acompanhar e resolver problemas de computação. Ele oferece funcionalidades para criar, visualizar, atualizar e fechar tickets de suporte de forma eficiente.

## Principais Funcionalidades

- **Gerenciamento de Tickets:** Crie, visualize, atualize e feche tickets de suporte.
- **Integração com MongoDB Atlas:** Utiliza o Mongoose para se conectar ao banco de dados MongoDB Atlas para armazenar e recuperar dados de forma eficiente.
- **Interface Amigável:** Interface de usuário intuitiva e responsiva, projetada para facilitar a navegação e uso.

## Tecnologias utilizadas

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em seu sistema:

- Node.js
- npm ou yarn
- Conta no MongoDB Atlas (para configurar o banco de dados)

## Instalação

1. Clone este repositório para o seu ambiente local.
2. No diretório raiz do projeto, execute `npm install` ou `yarn install` para instalar as dependências do projeto.
3. Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis de ambiente necessárias para a conexão com o MongoDB Atlas. Por exemplo:
   ```
   MONGODB_URI=SUA_URI_DO_MONGODB_ATLAS
   NEXTAUTH_URL=URL_DO_PROJETO
   GITHUB_LINK=LINK_DO_GITHUB
   ```
4. Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
5. Acesse a aplicação em `http://localhost:3000` no seu navegador.

Claro, aqui está a seção de descrição da API para as rotas especificadas, sem os exemplos de uso:

## Descrição da API

### GET /api/Tickets

Esta rota retorna todos os tickets de suporte armazenados no banco de dados.

#### Parâmetros da Requisição

Nenhum parâmetro é necessário para esta rota.

#### Resposta da Requisição

- **200 OK**: Retorna uma lista de todos os tickets de suporte no formato JSON.
  Exemplo de resposta:

  ```json
  [
    {
      "_id": "1",
      "title": "Problema de conexão com a internet",
      "description": "Não consigo acessar a internet em meu computador",
      "priority": 3,
      "progress": 77,
      "category": "Problema de Hardware",
      "status": "Iniciado",
      "createdAt": "2024-05-28T12:00:00Z",
      "updatedAt": "2024-05-28T12:00:00Z"
    },
    {
      "_id": "2",
      "title": "Erro ao instalar o software X",
      "description": "Recebo uma mensagem de erro ao tentar instalar o software X",
      "priority": 5,
      "progress": 100,
      "category": "Problema de Software",
      "status": "Terminado",
      "createdAt": "2024-05-27T15:30:00Z",
      "updatedAt": "2024-05-27T15:30:00Z"
    }
  ]
  ```

- **500 Internal Server Error**: Falha no servidor.

### POST /api/Tickets

Esta rota cria um novo ticket de suporte no banco de dados.

#### Parâmetros da Requisição

- **title** (obrigatório): Título do ticket.
- **description** (obrigatótio): Descrição do problema relatado no ticket.
- **priority** (obrigatório): Prioridade de resolução do problema.
- **progress** (obrigatório): Progresso de resolução do problema.
- **category** (obrigatório): Categoria do problema.
- **status** (obrigatório): Status do ticket.

#### Resposta da Requisição

- **201 Created**: Retorna o ticket recém-criado no formato JSON.
  Exemplo de resposta:
  ```json
  {
    "id": "3",
    "title": "Problema ao imprimir",
    "description": "A impressora não está respondendo",
    "priority": 1,
    "progress": 10,
    "category": "Problema de Hardware",
    "status": "Iniciado",
    "createdAt": "2024-05-28T14:00:00Z",
    "updatedAt": "2024-05-28T14:00:00Z"
  }
  ```

### GET /api/Tickets/:id

Esta rota retorna um ticket de suporte específico com base no ID fornecido.

#### Parâmetros da Requisição

Nenhum parâmetro é necessário para esta rota.

#### Parâmetros da Rota

- **id** (obrigatório): ID único do ticket.

#### Resposta da Requisição

- **200 OK**: Retorna o ticket solicitado no formato JSON.

- **500 Internal Server Error**: Falha no servidor.

### PUT /api/Tickets/:id

Esta rota atualiza um ticket de suporte específico com base no ID fornecido.

#### Parâmetros da Requisição

- **title** (opcional): Novo título para o ticket.
- **description** (opcional): Nova descrição para o ticket.
- **priority** (opicional): Nova prioridade de resolução para o problema.
- **progress** (opicional): Atualização do progresso da resolução do problema.
- **category** (opcional): Nova categoria pro problema.
- **status** (opcional): Novo status para o ticket.

#### Parâmetros da Rota

- **id** (obrigatório): ID único do ticket.

#### Resposta da Requisição

- **200 OK**: Retorna o ticket atualizado no formato JSON.

- **500 Internal Server Error**: Falha no servidor.

### DELETE /api/Tickets/:id

Esta rota exclui um ticket de suporte específico com base no ID fornecido.

#### Parâmetros da Requisição

Nenhum parâmetro é necessário para esta rota.

#### Parâmetros da Rota

- **id** (obrigatório): ID único do ticket a ser excluído.

#### Resposta da Requisição

- **204 No Content**: Retorna uma resposta vazia indicando que o ticket foi excluído com sucesso.

- **500 Internal Server Error**: Falha no servidor.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar problemas ou sugerir melhorias. Se desejar contribuir com código, por favor abra um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/license/mit).

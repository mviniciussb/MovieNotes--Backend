# Rocket Movies API

**Descrição:**

O *Rocket Movies API* é uma API desenvolvida no programa Explorer da Rocketseat, utilizando o framework Express para o gerenciamento de rotas e o banco de dados SQLite. A aplicação fornece endpoints para gerenciar filmes e notas, permitindo o armazenamento e recuperação de dados. A API é projetada para ser simples, escalável e de fácil integração com o front-end do *Movie Notes*.

---

**Tecnologias utilizadas:**

- **Express**: Framework Node.js para criação de APIs e gerenciamento de rotas.
- **Knex**: Query builder para interagir com o banco de dados SQLite.
- **SQLite**: Banco de dados leve utilizado para armazenar os dados da aplicação.
- **JWT (jsonwebtoken)**: Para a criação de tokens JWT e autenticação de usuários.
- **bcryptjs**: Para criptografia de senhas de usuários.
- **Cors**: Middleware para habilitar requisições cross-origin (CORS).
- **Multer**: Middleware para lidar com uploads de arquivos.
- **PM2**: Gerenciador de processos para o ambiente de produção.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **Jest**: Framework de testes para a aplicação.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

---

**Como instalar e rodar o projeto:**

1. **Clone o repositório:**

   No terminal, execute o comando:

   ```bash
   git clone https://github.com/mviniciussb/rocket-movies-api.git

2. **Acesse o diretório do projeto:**
   ```bash
   cd MovieNotes--Backend
   ```
3. **Instale as dependências:**
   Se você ainda não tiver as dependências instaladas, execute o comando:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   Após a instalação, inicie o servidor de desenvolvimento com o comando:
   ```bash
   npm run dev
   ```
   O servidor estará rodando em http://localhost:3333.

5. **Para executar migrações no banco de dados:**
   ```bash
   npm run migrate
   ```


**Como usar:**

 A API está configurada para gerenciar filmes e notas, com endpoints que permitem o cadastro, leitura, atualização e exclusão de dados.
Realize as requisições HTTP para interagir com a API:

- POST /movies: Criar um novo filme.
- GET /movies: Listar filmes.
- GET /movies/:id: Detalhes de um filme específico.
- PUT /movies/:id: Atualizar informações de um filme.
/ DELETE /movies/:id: Remover um filme.

**Contribuição:**

Contribuições são bem-vindas! Se você deseja melhorar a aplicação ou corrigir algum problema, fique à vontade para abrir issues ou enviar pull requests.

# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Luis Guilherme Godim da Fonseca - 24.1.8063*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

Este projeto trata-se de uma aplicação web para a venda de diferentes tipos de café, composta por um frontend e um backend desenvolvidos com tecnologias modernas, como Vite, React, TailwindCSS, Fastify, e Prisma. O sistema permite a gestão de produtos, com funcionalidades de inserção, edição, e remoção de cafés, além de simular a finalização de compras e gerenciar emails dentro da aplicação. O foco principal é oferecer uma experiência fluida ao usuário, desde a navegação até o checkout.

### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->
- Cadastro de novos tipos de café com imagens personalizadas.
- Edição e remoção de produtos da loja.
- Página principal com ofertas de diferentes tipos de café.
- Ordenação de produtos por preço ou nome.
- Funcionalidade de adicionar ou remover produtos do carrinho de compras.
- Simulação de compra via cartão de crédito ou PIX.
- Edição e envio de emails diretamente pela aplicação.
  
### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->
- Módulo de integração com APIs de pagamento reais ainda não foi implementado. A justificativa é o tempo limitado para a finalização do projeto.
- Implementação completa de uma interface administrativa detalhada para gestão dos usuários.
- 
### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->

### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
Os principais desafios encontrados foram relacionados à integração das funcionalidades de frontend e backend, principalmente no que diz respeito à validação de dados e manipulação de imagens. Outro desafio foi a adaptação do design utilizando TailwindCSS, garantindo uma interface responsiva e agradável. A solução foi a aplicação de boas práticas de desenvolvimento e o uso de ferramentas como Zod para validação e Docker para facilitar o ambiente de desenvolvimento.

### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->
# Coffee Shop Backend

## Description

This project is an API for a coffee shop application where users can browse different types of coffee, add them to a shopping cart, and simulate a checkout process. The backend is built using Node.js, Fastify, Prisma, PostgreSQL, and Docker, with features for managing products and simulating order completions.

## Concepts Used in This Project

- REST API
- Docker
- PostgreSQL
- Fastify
- Prisma
- Cookies
- Image Uploads

## Libraries and Commands Used in This Project

### 1. Initialize a Node Project

Create a new Node.js project:

```bash
npm init -y
```

### 2. Set Up TypeScript

TypeScript is used for data typing in JavaScript:

```bash
npm install typescript @types/node -D
npx tsc --init
```

### 3. Install `tsx` for TypeScript Execution

Install `tsx` as a development dependency to run TypeScript files:

```bash
npm install tsx -D
```

### 4. Set Up Prisma ORM

Prisma is an ORM that simplifies data manipulation:

```bash
npm install prisma -D
npx prisma init
```

To manage your database schema, you can use (for visualization of the data):

```bash
npx prisma studio
```

To apply schema changes and run migrations:

```bash
npx prisma migrate dev
```

## Setting the Project up

### 1. Clone the repository and install the dependencies via package.json

Clone this repository to your local machine:

```bash
git clone https://github.com/luisggf/coffee-shop-backend
cd <repository-directory>
```

### 2. Install Project Dependencies

The package.json file is already configured with all the necessary dependencies. To install them, simply run:

```bash
npm install
```

## To Run This Project

### 1. Set Up Environment Variables

Create a `.env` file in the root directory with the following contents (you can modify the values according to your own setup). Example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/coffee_shop?schema=public"
```

## Docker Configuration

The `docker-compose.yml` file defines the services for PostgreSQL:

```yaml
version: "3.7"

services:
  postgres:
    image: bitnami/postgresql:latest
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=coffee_shop
    volumes:
      - coffee_shop_pg_data:/bitnami/postgresql

volumes:
  coffee_shop_pg_data:
```

### Important Notes:

- Ensure that the `POSTGRES_USER` and `POSTGRES_PASSWORD` in the `docker-compose.yml` file match the credentials specified in the `.env` file.
- Use the `DATABASE_URL` in the `.env` file to connect to the PostgreSQL database.

### 2. Run Docker to Create Database Containers

Use Docker to start PostgreSQL containers:

```bash
docker compose up -d
```

### 3. Apply Database Migrations

After setting up the Docker containers, apply the latest database migrations:

```bash
npx prisma migrate dev
```

In case this command doesn't work, check for any local PostgreSQL instance that might be interfering with the Prisma migration for the Docker VM.


### 4. Start the Development Server

To start the server, use the following command:

```bash
npm run dev
```

### 5. End

Now you're ready to go! The server is successfully running, and the backend is prepared to accept and communicate with the frontend application.  
The frontend application can be found here: https://github.com/luisggf/coffee-shop-frontend

OBS: To rerun this server at any time, use the following sequence of commands:

```bash
docker compose up
npm run dev
```

- Note that the Docker Desktop program must be running.

### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->

\bibitem{tailwind} ELMAN, Charles. \textbf{Tailwind CSS Documentation}. Disponível em: \url{https://tailwindcss.com/}. Acesso em: 1 de julho de 2024.

\bibitem{react} REACT. \textbf{React – A JavaScript library for building user interfaces}. Disponível em: \url{https://reactjs.org/}. Acesso em: 1 de julho de 2024.

\bibitem{nodejs} NODE.JS FOUNDATION. \textbf{Node.js Documentation}. Disponível em: \url{https://nodejs.org/en/docs/}. Acesso em: 1 de julho de 2024.

\bibitem{prisma} PRISMA. \textbf{Prisma Documentation}. Disponível em: \url{https://www.prisma.io/docs}. Acesso em: 1 de julho de 2024.

\bibitem{fastify} FASTIFY. \textbf{Fastify Documentation}. Disponível em: \url{https://www.fastify.io/docs/latest/}. Acesso em: 1 de julho de 2024.

\bibitem{vite} VITE. \textbf{Vite Documentation}. Disponível em: \url{https://vitejs.dev/}. Acesso em: 18 de setembro de 2024.

\bibitem{redis} REDIS LABS. \textbf{Redis Documentation}. Disponível em: \url{https://redis.io/docs}. Acesso em: 7 de julho de 2024.

\bibitem{postgresql} POSTGRESQL. \textbf{PostgreSQL Documentation}. Disponível em: \url{https://www.postgresql.org/docs/}. Acesso em: 7 de julho de 2024.

\bibitem{zod} ZOD. \textbf{Zod Documentation}. Disponível em: \url{https://zod.dev/}. Acesso em: 12 de julho de 2024.

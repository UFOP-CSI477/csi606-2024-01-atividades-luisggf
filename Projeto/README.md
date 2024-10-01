# **CSI606-2021-02 - Remoto - Trabalho Final**

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

# Coffee Shop Front
## Libraries and Commands Used in This Project

### 1. Clone the project Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/luisggf/coffee-shop-frontend
cd <repository-directory>
```

### 2. Install Project Dependencies

The `package.json` file is already configured with all the necessary dependencies. To install them, simply run:

```bash
npm install
```

### 3. Available Scripts

The following scripts are available in the `package.json` file:

- **Start the development server**:

  This command will start the Vite development server, enabling hot module replacement (HMR) and fast feedback during development.

  ```bash
  npm run dev
  ```

### 4. Key Dependencies

- **React**: Core library for building user interfaces.
- **React DOM**: The entry point for React into the DOM.
- **React Router DOM**: For handling routing in the application.
- **TypeScript**: For static typing in JavaScript.
- **Vite**: For fast and optimized development and build processes.
- **Radix UI**: For accessible and customizable UI components.
- **Tailwind CSS**: For utility-first CSS styling.
- **Axios**: For making HTTP requests to the backend API.
- **Socket.io Client**: For real-time communication with the backend.

### 5. Project Structure

The project is structured as follows:

```
src/
  ├── assets/            # SVG and Images used for styling
  ├── components/        # Reusable UI Components
  ├── App.tsx            # Main application component
  ├── main.tsx           # Application entry point
  └── index.html         # Main HTML file
  └── vite-env.d.ts
```

### 6. Styling

Tailwind CSS is used for styling the application. If you need to customize the default styles, you can modify the Tailwind configuration file (`tailwind.config.js`) in the project.

### 7. Running the Application

To run the application in development mode:

```bash
npm run dev
```

### 8. Connecting to the Backend

Ensure that the backend API is running and accessible.



### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->

- Tailwind CSS Documentation. Disponível em: https://tailwindcss.com/

- REACT. Disponível em: https://reactjs.org/

- Node.js Documentation. Disponível em: https://nodejs.org/en/docs/

- Prisma Documentation. Disponível em: https://www.prisma.io/docs

- Fastify Documentation. Disponível em: https://www.fastify.io/docs/latest/

- Vite Documentation. Disponível em: https://vitejs.dev/

- Redis Documentation. Disponível em: https://redis.io/docs

- PostgreSQL Documentation. Disponível em: https://www.postgresql.org/docs/

- Zod Documentation. Disponível em: https://zod.dev/

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

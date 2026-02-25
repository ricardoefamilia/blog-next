# 📝 Blog Next

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-orange)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)

Aplicação **Next.js** com persistência em **PostgreSQL (Docker)**
utilizando **Drizzle ORM**, organizada com princípios de **Clean
Architecture**.

---

# 📚 Tecnologias

- ⚡ Next.js
- 🐘 PostgreSQL
- 🧩 Drizzle ORM
- 🐳 Docker Compose
- 🟦 TypeScript

---

# 🏗️ Arquitetura

O projeto segue princípios de **Clean Architecture**, separando
responsabilidades:

    Domain
    Application
    Infrastructure
    Presentation

Fluxo simplificado:

    Next.js
       ↓
    Repository (Drizzle)
       ↓
    PostgreSQL (Docker)

---

# 🚀 Como rodar o projeto

## 📋 Pré-requisitos

- Node.js 18+
- Docker
- Docker Compose

---

## 1️⃣ Clonar o projeto

```bash
git clone <url-do-repositorio>
cd blog-next
```

---

## 2️⃣ Subir o banco de dados (Docker)

```docker-compose.yml:
Modelo: docker-compose-example.yml
```

```bash
docker compose up -d
```

Configuração do banco:

Configuração Valor

---

Porta 5433
Usuário postgres
Senha suasenha
Banco blognext

Verifique:

```bash
docker ps
```

---

## 3️⃣ Criar arquivo `.env`

Na raiz do projeto:

```env
Variáveis de ambiente
Modelo: .env-example

```

---

## 4️⃣ Instalar dependências

```bash
npm install
```

---

## 5️⃣ Criar as tabelas (Drizzle)

```bash
npx drizzle-kit push
```

---

## 6️⃣ Popular o banco (Seed)

```bash
npx tsx src/db/drizzle/seed.ts
```

---

## 7️⃣ Rodar o Next.js

```bash
npm run dev
```

A aplicação estará disponível em:

http://localhost:3000

---

# 🧪 Testando o banco manualmente

```bash
docker exec -it blognext_postgres psql -U postgres -d blognext
```

Comandos úteis:

```sql
\dt
SELECT * FROM posts;
```

---

# 🛠️ Scripts úteis

Comando Descrição

---

docker compose up -d Sobe o banco
docker compose down Para o banco
docker compose down -v Remove banco e dados
npx drizzle-kit push Sincroniza schema
npm run dev Inicia aplicação

---

# 🔥 Reset completo do ambiente

```bash
docker compose down -v
docker compose up -d
npx drizzle-kit push
npx tsx src/db/drizzle/seed.ts
```

---

# 📁 Estrutura do Projeto

    src/
     ├── db/
     │    └── drizzle/
     │         ├── index.ts
     │         ├── schemas.ts
     │         └── seed.ts
     ├── models/
     ├── repositories/
     ├── application/
     └── presentation/

---

# 🐞 Troubleshooting

## Erro 28P01 (senha incorreta)

Verifique:

- Porta 5433
- DATABASE_URL correta
- Container ativo (docker ps)

## Banco não existe

```bash
docker compose down -v
docker compose up -d
```

---

# 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática com:

- Drizzle ORM
- PostgreSQL + Docker
- Clean Architecture
- Integração com Next.js

---

# 📜 Licença

Uso educacional.

---

# ⚡ Next.js Setup (Base Template Information)

This project was bootstrapped with:

- [Next.js](https://nextjs.org)
- [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

---

## ▶️ Getting Started (Next.js Development)

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open:

http://localhost:3000

The application will auto-update as you edit files.

You can begin editing the main page at:

    app/page.tsx

---

## 🔤 Font Optimization

This project uses:

- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

It automatically optimizes and loads the **Geist** font family from
Vercel.

---

# 📘 Learn More About Next.js

If you're new to Next.js or want to explore advanced features:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js Interactive Tutorial](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

# 🚀 Deploy on Vercel

The easiest way to deploy this project is via:

👉 [Vercel
Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

For deployment details, see:

- [Next.js Deployment
  Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

# 🏁 Final Notes

This project integrates:

- Next.js (Frontend)
- Drizzle ORM (Database Layer)
- PostgreSQL via Docker (Local Development)
- Clean Architecture structure

Make sure Docker is running before starting development if the
application depends on database connectivity.

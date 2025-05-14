# Sistema de Check-in de Palestras

Um aplicativo de check-in de palestras usando Node.js com TypeScript, projetado para ser hospedado na Vercel.

## Funcionalidades

- Cadastro e login de organizadores com autenticação por JWT
- Gerenciamento de palestras (CRUD)
- Check-in de participantes com validação de dados
- Prevenção de check-ins duplicados
- Respostas em JSON com status HTTP apropriados

## Tecnologias Utilizadas

- Next.js com TypeScript
- Prisma ORM
- PostgreSQL
- Zod para validação
- JWT para autenticação

## Estrutura do Projeto

- `/app/api` - Endpoints da API
- `/lib` - Utilitários e configurações
- `/prisma` - Schema do banco de dados

## Endpoints da API

### Autenticação

- `POST /api/auth/register` - Registro de organizadores
- `POST /api/auth/login` - Login de organizadores

### Palestras

- `GET /api/lectures` - Listar todas as palestras
- `POST /api/lectures` - Criar nova palestra (requer autenticação)
- `GET /api/lectures/:id` - Obter detalhes de uma palestra
- `PUT /api/lectures/:id` - Atualizar palestra (requer autenticação)
- `DELETE /api/lectures/:id` - Excluir palestra (requer autenticação)

### Check-in

- `POST /api/check-in` - Realizar check-in de participante
- `GET /api/check-in` - Listar check-ins (pode filtrar por palestra)

## Configuração

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente (veja `.env.example`)
4. Execute as migrações do banco de dados: `npx prisma migrate dev`
5. Inicie o servidor de desenvolvimento: `npm run dev`

## Implantação na Vercel

Este projeto está configurado para ser implantado na Vercel. Basta conectar o repositório à sua conta Vercel e configurar as variáveis de ambiente necessárias.

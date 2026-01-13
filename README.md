# OKT – OncoKit Test

Website estático em Next.js (App Router) para apresentação do projeto OKT.

## Como correr

```bash
npm install
npm run dev
```

Depois, abrir `http://localhost:3000`.

## Como trocar imagens

As imagens da galeria vivem em `public/images`. Substitua os ficheiros mantendo os nomes
existentes (ex.: `device-01.svg`) ou atualize as referências em `src/content/gallery.ts`.

## Como editar concursos e FAQ

- Concursos: `src/content/contests.ts`
- FAQ: `src/content/faq.ts`

Adicione ou edite itens nesses ficheiros e a UI será atualizada automaticamente.

## Deploy grátis na Vercel

1. Faça push do repositório para o GitHub.
2. Aceda a https://vercel.com e importe o projeto.
3. Mantenha as opções por defeito e clique em **Deploy**.


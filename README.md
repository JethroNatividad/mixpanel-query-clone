## Setup

### Install dependencies

```bash
bun install
```
    
```bash
npm install
```
    
```bash
yarn install
```
        
```bash
pnpm install
```

### Configure sqlite database

using bun:
```bash
bunx prisma db push
```

using npm:
```bash
npx prisma db push
```

### Seed the database:

using bun:
```bash
bun prisma/seed.ts
```

using node:
```bash
ts-node prisma/seed.ts
```

### Running the server

```bash
bun dev
```
```bash
npm run dev
```
```bash
yarn dev
```
```bash
pnpm dev
```
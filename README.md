# Quati Styles - Storybook

Este repositório contém o **Design System (Quati Styles)** da PGE-MS, documentado e visualizado interativamente através do [Storybook](https://storybook.js.org/).

O principal objetivo deste projeto é centralizar a documentação, componentes visuais, assets e tokens de design (cores, tipografia, espaçamentos) baseados no Vuetify 3 com uma estética Glassmorphism, permitindo que as equipes de desenvolvimento da PGE-MS construam interfaces consistentes, modernas e acessíveis.

---

## 🚀 Demonstração (Live Demo)

A documentação interativa e a galeria de componentes estão publicadas no GitHub Pages e são atualizadas automaticamente a cada merge na branch principal:

👉 **[Acessar o Storybook do Quati Styles](https://labpdi.github.io/storybook-quati/latest/)**

---

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM, Yarn ou PNPM

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/LabPDI/storybook-quati.git
cd storybook-quati
npm install
```

### Desenvolvimento (Modo Dev)

Para subir o Storybook e o ambiente de desenvolvimento local (com hot-reload):

```bash
npm run storybook
```

Isso iniciará o servidor na porta `6006`. Abra [http://localhost:6006](http://localhost:6006) no seu navegador. O código em Vue pode ser utilizado testando nas instâncias internas (via `npm run dev`), mas o foco deste repositório é rodar o Storybook.

### Build (Produção)

Para compilar o Storybook localmente como um conjunto de arquivos estáticos:

```bash
npm run build-storybook
```

Os arquivos gerados ficarão na pasta `storybook-static/`. Você pode servir essa pasta com qualquer servidor web simples, ou implantá-la onde preferir. O workflow atual já publica essa pasta automaticamente no GitHub Pages pelo comando `npm run deploy-storybook`.

---

## 📦 Estrutura do Projeto

- `src/styles/quati-styles/`: Núcleo do Design System (tokens SCSS, estilos de componentes, dark mode).
- `src/plugins/vuetify.js`: Configuração do Vuetify instanciando o tema construído (Quati).
- `src/stories/`: Documentação e exemplos interativos de componentes, divididos por tipologia (Buttons, Forms, ThemeEditor, etc).
- `.github/workflows/deploy-storybook.yml`: Action responsável pelo deploy automático para o GitHub Pages (pasta `/latest`).

---

## 🤝 Contribuindo

Seja adicionando um novo componente de exemplo, atualizando os tokens de cor, ou melhorando a documentação:

1. Crie uma branch para a sua feature (`git checkout -b feature/novo-componente`)
2. Faça commit das mudanças (`git commit -m 'feat: adiciona componente X'`)
3. Faça o push para a branch (`git push origin feature/novo-componente`)
4. Abra um Pull Request.

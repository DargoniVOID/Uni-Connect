# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Projeto de Rede Social em React

Descrição:
Este projeto consiste em uma rede social desenvolvida em React, criada com o objetivo principal de aprimorar conhecimentos na linguagem de programação. A aplicação visa proporcionar uma experiência prática e hands-on na construção de interfaces web interativas utilizando React.

Recursos Principais:

Interface de usuário moderna e responsiva.
Funcionalidades típicas de uma rede social, como postagens, perfis de usuários e interações.
Utilização de conceitos avançados do React para construção eficiente e escalável.
Motivação:
O foco deste projeto é oferecer um ambiente de aprendizado prático, permitindo a exploração e aplicação de conceitos avançados de React, enquanto cria uma aplicação funcional e interativa.

Como Contribuir:

Faça um fork do repositório.
Clone o repositório para a sua máquina local.
Implemente melhorias ou correções.
Envie um pull request com uma descrição detalhada das alterações.
Pré-requisitos:

Conhecimento básico em React.
Node.js e npm instalados.

Instruções de Uso:

Instale as dependências usando npm install.
Execute o aplicativo localmente com npm start.
Acesse a aplicação em http://localhost:3000 no navegador.

Aviso:
Este projeto é principalmente educativo e destinado ao aprimoramento pessoal. Não é recomendado para uso em produção.

Licença:
Este projeto foi produzido Rafael Dargoni sob as intruções da instituição RockeatSeat .

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

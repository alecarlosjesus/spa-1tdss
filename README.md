# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Construção das Rotas com [react-router-dom]

- 1 - Instalção das dependências do react-router-dom.
- 2 - Criar a pasta routes e as páginas ou rotas.[Home, Produtos, EditarProdutos, Erro404]
- 3 - Importar os objetos do router-dom no main.jsx.
- 4 - Criar o objeto router através da função createBrowserRouter([]), onde deve ser construido um array de objetos com duas propriedades cada.
--- Ex: const router = createBrowserRouter([{path: '/' <App/>}...]);
- 5 - Alterar o componente <App/> que está sendo renderizado pelo ReactDOM.render() pelo RouterProvider e criar a props nesse componente com o nome de router passando o objeto das rotas que foi construido.
- 6 - Adicionar o componente <Outlet/> dentro do componente <App/>, para que todas as rotas sejam renderizadas nesse local.
- 7 - Direcionar os links para as rotas criadas com o componente <Link to="Path">Rota</Link>, pois somente assim será gerado controle sobre as rotas, ao contrário do que se utilizando a tag <a>.
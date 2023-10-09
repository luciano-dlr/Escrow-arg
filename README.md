Una app desarrollada con las siguientes Instalaciones
   
---- Utilizando node 20.5.0 ----
   
         npm create vite@latest
   
- Se crea el proyecto con el nombre
   
         escrow-arg
   
- Utilizando typescript 


---- Uso de librerias ----

- Para estilos https://mui.com/material-ui/

         npm install @mui/material @emotion/react @emotion/styled

- Libreria de Iconos 

         npm install @mui/icons-material



 ---- Repositorio Git ----

 https://github.com/luciano-dlr/Escrow-arg









-----------------------------
---- README DEFAULT VITE ---- 
-----------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


-----------------------------

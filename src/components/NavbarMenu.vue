<template>
    <nav>
      <ul>
        <li><router-link to="/cadastro-cliente">Cadastro de Cliente</router-link></li>
        <li><router-link to="/cadastro-produto">Cadastro de Produto</router-link></li>
        <li><router-link to="/associacao-produto-cliente">Associação de Produto ao Cliente</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarMenu'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  
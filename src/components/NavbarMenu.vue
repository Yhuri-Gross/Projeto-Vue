<template>
    <nav class="nav justify-content-center mt-20px">
      <ul  class="nav nav-pills nav-fill">
        <li class="nav-item"><router-link to="/cadastro-cliente" class="nav-link active">Cadastro de Cliente</router-link></li>
        <li class="nav-item"><router-link to="/cadastro-produto" class="nav-link active">Cadastro de Produto</router-link></li>
        <li class="nav-item"><router-link to="/associacao-produto-cliente" class="nav-link active">Associação de Produto ao Cliente</router-link></li>
      </ul>
    </nav>
    <hr>
  </template>
  
  <script>
  export default {
    name: 'NavbarMenu'
  }
  </script>
  
  <style scoped>
  
  li {
    display: inline;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }

  .mt-20px{
    margin-top: 20px;
  }
  </style>
  
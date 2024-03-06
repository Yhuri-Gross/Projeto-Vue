<template>
  <NavbarMenu/>
  <AssociacaoProdutoCliente/>
  <CadastroCliente/>
  <CadastroProduto/>
</template>

<script>
import CadastroCliente from './components/CadastroCliente.vue';
import CadastroProduto from './components/CadastroProduto.vue';
import AssociacaoProdutoCliente from './components/AssociacaoProdutoCliente';
import NavbarMenu from './components/NavbarMenu';



export default {
  name: 'App',
  components: {
    CadastroCliente,
    CadastroProduto,
    AssociacaoProdutoCliente,
    NavbarMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
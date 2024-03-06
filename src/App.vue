<template>
  <CadastroCliente/>
  <CadastroProduto/>
</template>

<script>
import CadastroCliente from './components/CadastroCliente.vue'
import CadastroProduto from './components/CadastroProduto.vue'


export default {
  name: 'App',
  components: {
    CadastroCliente,
    CadastroProduto,
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
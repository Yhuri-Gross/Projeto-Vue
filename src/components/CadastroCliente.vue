<template>
  <div>
    <h2>Cadastro de Cliente</h2>
    <form @submit.prevent="cadastrarCliente">
      <input type="text" v-model="novoCliente.nome" placeholder="Nome">
      <input type="text" v-model="novoCliente.documento" placeholder="Documento">
      <input type="text" v-model="novoCliente.telefone" placeholder="Telefone">
      <input type="email" v-model="novoCliente.email" placeholder="E-mail">
      <button type="submit">Cadastrar</button>
    </form>

    <h3>Clientes Cadastrados</h3>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.documento">
        {{ cliente.nome }} - {{ cliente.documento }}
      </li>
    </ul>
  </div>
</template>

<script>
import { clientes } from '../clientesMockados';

export default {
  data() {
    return {
      clientes,
      novoCliente: { nome: '', documento: '', telefone: '', email: '', ativo: true }
    };
  },
  methods: {
    cadastrarCliente() {
      this.clientes.push({ ...this.novoCliente });
      this.novoCliente = { nome: '', documento: '', telefone: '', email: '', ativo: true };
    }
  }
}
</script>
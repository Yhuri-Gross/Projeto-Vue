<template>
  <div>
    <h2>{{ modoEdicao ? 'Editar Cliente' : 'Cadastro de Cliente' }}</h2>
    <form @submit.prevent="modoEdicao ? atualizarCliente() : cadastrarCliente()">
      <input type="text" v-model="novoCliente.nome" placeholder="Nome" required>
      <input type="text" v-model="novoCliente.documento" placeholder="Documento" required>
      <input type="text" v-model="novoCliente.telefone" placeholder="Telefone" required>
      <input type="email" v-model="novoCliente.email" placeholder="E-mail" required>
      <button type="submit">{{ modoEdicao ? 'Atualizar Cliente' : 'Cadastrar Cliente' }}</button>
    </form>

    <h3>Clientes Cadastrados</h3>
    <ul>
      <li v-for="(cliente, index) in clientes" :key="index">
        {{ cliente.nome }} - {{ cliente.documento }}
        <button @click="editarCliente(index)">Editar</button>
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
      novoCliente: { nome: '', documento: '', telefone: '', email: '' },
      modoEdicao: false,
      clienteSelecionadoIndex: null
    };
  },
  methods: {
    cadastrarCliente() {
      this.clientes.push({ ...this.novoCliente });
      this.novoCliente = { nome: '', documento: '', telefone: '', email: '' };
    },
    editarCliente(index) {
      this.modoEdicao = true;
      this.clienteSelecionadoIndex = index;
      this.novoCliente = { ...this.clientes[index] };
    },
    atualizarCliente() {
      if (this.clienteSelecionadoIndex !== null) {
        this.clientes[this.clienteSelecionadoIndex] = { ...this.novoCliente };
        this.novoCliente = { nome: '', documento: '', telefone: '', email: '' };
        this.modoEdicao = false;
        this.clienteSelecionadoIndex = null;
      }
    }
  }
}
</script>
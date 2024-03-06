<template>
  <div>
    <h2>{{ modoEdicao ? 'Editar Cliente' : 'Cadastro de Cliente' }}</h2>
    <form @submit.prevent="modoEdicao ? atualizarCliente() : cadastrarCliente()" class="form-style">
      <input type="text" v-model="novoCliente.nome" placeholder="Nome" required class="imput-class">
      <input type="text" v-model="novoCliente.documento" placeholder="Documento" required class="imput-class">
      <input type="text" v-model="novoCliente.telefone" placeholder="Telefone" required class="imput-class">
      <input type="email" v-model="novoCliente.email" placeholder="E-mail" required class="imput-class">
      <button type="submit" class="btn btn-success">{{ modoEdicao ? 'Atualizar Cliente' : 'Cadastrar Cliente'
        }}</button>
    </form>


    <div class="container">
      <div class="card">
        <h3 class="card-header">Clientes Cadastrados</h3>
        <ul class="list-group list-group-flush">
          <li v-for="(cliente, index) in clientes" :key="index" class="list-group-item ">
            {{ cliente.nome }} - {{ cliente.documento }}
            <button @click="editarCliente(index)" class="btn btn-secondary">Editar</button>
          </li>
        </ul>
      </div>
    </div>

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

<style>
  .form-style{
    display: flex;
    flex-direction: column;
    margin: 15px;
    align-items: center;
  }

  .imput-class{
    width: 80%;
    margin: 10px;
  }
</style>
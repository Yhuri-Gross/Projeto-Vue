<template>
    <div>
      <h2>{{ modoEdicao ? 'Editar Produto' : 'Cadastro de Produto' }}</h2>
      <form @submit.prevent="modoEdicao ? atualizarProduto() : cadastrarProduto()">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="novoProduto.nome" required>
        <label for="ativo">Ativo:</label>
        <select id="ativo" v-model="novoProduto.ativo" required>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <button type="submit">{{ modoEdicao ? 'Atualizar Produto' : 'Cadastrar Produto' }}</button>
      </form>
  
      <h3>Produtos Cadastrados</h3>
      <ul>
        <li v-for="(produto, index) in produtos" :key="produto.nome">
          {{ produto.nome }} - {{ produto.ativo ? 'Ativo' : 'Inativo' }}
          <button @click="editarProduto(index)">Editar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { produtos } from '../produtosMockados';
  
  export default {
    data() {
      return {
        produtos,
        novoProduto: { nome: '', ativo: true },
        modoEdicao: false,
        produtoSelecionadoIndex: null
      };
    },
    methods: {
      cadastrarProduto() {
        this.produtos.push({ ...this.novoProduto });
        this.novoProduto = { nome: '', ativo: true };
      },

      editarProduto(index) {
      this.modoEdicao = true;
      this.produtoSelecionadoIndex = index;
      this.novoProduto = { ...this.produtos[index] };
    },
    atualizarProduto() {
      if (this.produtoSelecionadoIndex !== null) {
        this.produtos[this.produtoSelecionadoIndex] = { ...this.novoProduto };
        this.novoProduto = { nome: '', ativo: true };
        this.modoEdicao = false;
        this.produtoSelecionadoIndex = null;
      }
    }
    }
  }
  </script>
  
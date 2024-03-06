<template>
    <div>
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="cadastrarProduto">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="novoProduto.nome" required>
        <label for="ativo">Ativo:</label>
        <select id="ativo" v-model="novoProduto.ativo" required>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
  
      <h3>Produtos Cadastrados</h3>
      <ul>
        <li v-for="produto in produtos" :key="produto.nome">
          {{ produto.nome }} - {{ produto.ativo ? 'Ativo' : 'Inativo' }}
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
        novoProduto: { nome: '', ativo: true }
      };
    },
    methods: {
      cadastrarProduto() {
        this.produtos.push({ ...this.novoProduto });
        this.novoProduto = { nome: '', ativo: true };
      }
    }
  }
  </script>
  
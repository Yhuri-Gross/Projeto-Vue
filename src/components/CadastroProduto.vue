<template>
  <div class="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
    <h2>{{ modoEdicao ? 'Editar Produto' : 'Cadastro de Produto' }}</h2>
    <form @submit.prevent="modoEdicao ? atualizarProduto() : cadastrarProduto()" class="form-style">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="novoProduto.nome" required class="imput-class">
      <label for="ativo">Ativo:</label>
      <select id="ativo" v-model="novoProduto.ativo" required class="imput-class">
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
      <button type="submit" class="btn btn-success">{{ modoEdicao ? 'Atualizar Produto' : 'Cadastrar Produto' }}</button>
    </form>

    <div class="container">
      <div class="card" >
        <h3 class="card-header">Produtos Cadastrados</h3>
        <ul class="list-group list-group-flush">
          <li v-for="(produto, index) in produtos" :key="produto.nome" class="list-group-item ">
            {{ produto.nome }} - {{ produto.ativo ? 'Ativo' : 'Inativo' }}
            <button @click="editarProduto(index)" class="btn btn-secondary">Editar</button>
          </li>
        </ul>
      </div>
    </div>


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

<style>
  .container{
    width: 80%;
    margin-top: 30px;
  }

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
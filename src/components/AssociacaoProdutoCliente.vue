<template>
    <div>
        <h2>Associação de Produto ao Cliente</h2>
        <form @submit.prevent="associarProdutoCliente" class="form-style">
            <label for="cliente">Selecione o Cliente:</label>
            <select id="cliente" v-model="clienteSelecionado" required class="imput-class">
                <option v-for="cliente in clientes" :key="cliente.documento" :value="cliente">{{ cliente.nome }}
                </option>
            </select>
            <label for="produto">Selecione o Produto:</label>
            <select id="produto" v-model="produtoSelecionado" required class="imput-class">
                <option v-for="produto in produtos" :key="produto.nome" :value="produto">{{ produto.nome }}</option>
            </select>
            <button type="submit" class="btn btn-success">Associar Produto</button>
        </form>

        <div class="container">
            <div class=" card">
                <h3 class="card-header">Produtos Associados aos Clientes</h3>
                <ul v-if="clienteSelecionado && clienteSelecionado.produtos && clienteSelecionado.produtos.length" class="list-group list-group-flush">
                    <li v-for="produto in clienteSelecionado.produtos" :key="produto.nome" class="list-group-item ">
                        {{ produto.nome }}
                    </li>
                </ul>
                <p v-else class="list-group list-group-flush">Nenhum produto associado a este cliente.</p>
            </div>
        </div>



        <p v-if="erroProdutoSelecionado" class="erro">{{ erroProdutoSelecionado }}</p>
    </div>
</template>

<script>
import { clientes } from '../clientesMockados';
import { produtos } from '../produtosMockados'

export default {
    data() {
        return {
            clientes,
            produtos,
            clienteSelecionado: null,
            produtoSelecionado: null,
            erroProdutoSelecionado: ''
        };
    },
    methods: {
        associarProdutoCliente() {
            if (!this.produtoSelecionado) {
                this.erroProdutoSelecionado = 'Por favor, selecione um produto.';
                return;
            }

            if (!this.clienteSelecionado.produtos) {
                this.clienteSelecionado.produtos = [];
            }
            this.clienteSelecionado.produtos.push(this.produtoSelecionado);
            this.produtoSelecionado = null;
            this.erroProdutoSelecionado = '';
        }
    }
}
</script>

<style scoped>
.erro {
    color: red;
}
.container{
    margin-top: 30px;
  }

  .form-style{
    display: flex;
    flex-direction: column;
    margin: 15px;
    align-items: center;
  }

  .imput-class{
    width: 50%;
    margin: 10px;
    border-radius: 5px;
    height: 35px;
  }
</style>
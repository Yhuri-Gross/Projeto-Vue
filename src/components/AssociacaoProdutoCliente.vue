<template>
    <div>
        <h2>Associação de Produto ao Cliente</h2>
        <form @submit.prevent="associarProdutoCliente">
            <label for="cliente">Selecione o Cliente:</label>
            <select id="cliente" v-model="clienteSelecionado" required>
                <option v-for="cliente in clientes" :key="cliente.documento" :value="cliente">{{ cliente.nome }}
                </option>
            </select>
            <label for="produto">Selecione o Produto:</label>
            <select id="produto" v-model="produtoSelecionado" required>
                <option v-for="produto in produtos" :key="produto.nome" :value="produto">{{ produto.nome }}</option>
            </select>
            <button type="submit">Associar Produto</button>
        </form>

        <h3>Produtos Associados aos Clientes</h3>
        <ul v-if="clienteSelecionado && clienteSelecionado.produtos && clienteSelecionado.produtos.length">
            <li v-for="produto in clienteSelecionado.produtos" :key="produto.nome">
                {{ produto.nome }}
            </li>
        </ul>
        <p v-else>Nenhum produto associado a este cliente.</p>

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
</style>
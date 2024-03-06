import { createRouter, createWebHistory } from 'vue-router';
import CadastroCliente from '../components/CadastroCliente.vue'
import CadastroProduto from '../components/CadastroProduto.vue'
import AssociacaoProdutoCliente from '../components/AssociacaoProdutoCliente.vue'


const routes = [
    {
        path: '/',
        redirect: '/cadastro-cliente'
    },
    {
        path: '/cadastro-cliente',
        name: 'CadastroCliente',
        component: CadastroCliente
    },
    {
        path: '/cadastro-produto',
        name: 'CadastroProduto',
        component: CadastroProduto
    },
    {
        path: '/associacao-produto-cliente',
        name: 'AssociacaoProdutoCliente',
        component: AssociacaoProdutoCliente
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

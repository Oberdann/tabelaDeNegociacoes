import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const form = document.querySelector('.form');
const controller = new NegociacaoController();
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possivel realizar a aplicação. Verifique se o form existe.')
}


import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const form = document.querySelector('.form');
const controller = new NegociacaoController();

form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
})

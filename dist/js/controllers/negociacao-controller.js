import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-views.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    // Constructors
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacosView = new NegociacoesView('#negociacoesViews');
        this.mensagemView = new MensagemView('#mensagemView');
        this.mensagemDeErro = 'Negociações são feitas apenas entre os dias: segunda-feira e sexta-feiras.';
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // Methods
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.verificaDiaDaSemana(negociacao))
            return this.mensagemView.update(this.mensagemDeErro);
        this.negociacoes.adicionaNoArray(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ;
    criaNegociacao() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    ;
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.type = 'text';
        this.inputValor.value = '0,0';
        this.inputData.focus();
    }
    ;
    atualizaView() {
        this.negociacosView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    verificaDiaDaSemana(negociacao) {
        return negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6 ? true : false;
    }
}

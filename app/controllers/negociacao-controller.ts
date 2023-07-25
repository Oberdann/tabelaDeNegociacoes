import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-views.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacosView = new NegociacoesView('#negociacoesViews');
    private mensagemView = new MensagemView('#mensagemView');

    // Constructors
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // Methods
    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionaNoArray(negociacao);
        console.log(this.negociacoes.lista());
        this.negociacosView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso')
        this.limparFormulario();
    };

    criaNegociacao(): Negociacao {
        const data = new Date(this.inputData.value.replace(/-/g, ','))
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    };

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.type = 'text';
        this.inputValor.value = '0,0'
        this.inputData.focus();
    };
}
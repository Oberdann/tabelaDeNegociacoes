import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-views.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacosView = new NegociacoesView('#negociacoesViews', true);
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemDeErro: string = 'Negociações são feitas apenas entre os dias: segunda-feira e sexta-feiras.';

    // Constructors
    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    }

    // Methods
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if (!this.verificaDiaDaSemana(negociacao)) return this.mensagemView.update(this.mensagemDeErro);
        this.negociacoes.adicionaNoArray(negociacao);
        this.atualizaView();
        this.limparFormulario();
    };

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.type = 'text';
        this.inputValor.value = '0,0'
        this.inputData.focus();
    };

    private atualizaView(): void {
        this.negociacosView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private verificaDiaDaSemana(negociacao: Negociacao) {
        return negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6 ? true : false;
    }
}
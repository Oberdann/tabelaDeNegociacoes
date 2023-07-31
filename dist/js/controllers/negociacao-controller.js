var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/logar-tem-de-execucao.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-views.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacosView = new NegociacoesView('#negociacoesViews', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.mensagemDeErro = 'Negociações são feitas apenas entre os dias: segunda-feira e sexta-feiras.';
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.checaErroDiaUtil(negociacao))
            return;
        this.negociacoes.adicionaNoArray(negociacao);
        this.atualizaView();
        this.limparFormulario();
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
    checaErroDiaUtil(negociacao) {
        let validDay = this.verificaDiaDaSemana(negociacao);
        let valid = false;
        if (!(validDay)) {
            this.mensagemView.update(this.mensagemDeErro);
            this.limparFormulario();
            valid = true;
        }
        return valid;
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);

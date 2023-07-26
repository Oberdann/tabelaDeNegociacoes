import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    // Methods
    public adicionaNoArray(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }

}
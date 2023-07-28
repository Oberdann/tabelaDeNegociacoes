export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNoArray(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}

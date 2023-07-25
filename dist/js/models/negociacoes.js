export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Methods
    adicionaNoArray(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}

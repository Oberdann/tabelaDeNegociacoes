export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    get volume() { return this.quantidade * this.valor; }
    ;
    get data() { return this._data; }
    ;
    static criaDe(dateString, quantidaadeString, valorString) {
        const data = new Date(dateString.replace(/-/g, ','));
        const quantidade = Number(quantidaadeString);
        const valor = Number(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}

export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    // Getters
    get volume() { return this.quantidade * this.valor; }
    ;
    get data() { return this._data; }
    ;
}
export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {};

    // Getters
    get volume(): number { return this.quantidade * this.valor };
    get data(): Date { return this._data };

}
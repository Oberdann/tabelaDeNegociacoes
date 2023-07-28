export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { };

    // Getters
    get volume(): number { return this.quantidade * this.valor };
    get data(): Date { return this._data };


    public static criaDe(dateString: string, quantidaadeString: string, valorString: string): Negociacao {
        const data = new Date(dateString.replace(/-/g, ','))
        const quantidade = Number(quantidaadeString);
        const valor = Number(valorString);
        return new Negociacao(data, quantidade, valor);
    }

}
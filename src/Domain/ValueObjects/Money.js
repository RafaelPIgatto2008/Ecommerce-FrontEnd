export class Money {
    constructor(price, currency = "BRL") {
        this.price = Number(price) || 0;
        this.currency = currency;
    }
    
    formattedValue() {
        return this.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: this.currency
        });
    }
}
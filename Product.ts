export class Product {
    private _ID: string
    private _Name: string
    private _Type: string
    private _price: number;
    private _amount: number;
    private _date_creat: string;
    private _description: string;

    constructor(ID: string, Name: string, Type: string, price: number, amount: number, date_creat: string, description: string) {
        this._ID = ID;
        this._Name = Name;
        this._Type = Type;
        this._price = price;
        this._amount = amount;
        this._date_creat = date_creat;
        this._description = description;
    }

    get ID(): string {
        return this._ID;
    }

    set ID(value: string) {
        this._ID = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Type(): string {
        return this._Type;
    }

    set Type(value: string) {
        this._Type = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get date_creat(): string {
        return this._date_creat;
    }

    set date_creat(value: string) {
        this._date_creat = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
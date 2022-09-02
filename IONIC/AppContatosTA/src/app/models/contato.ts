export class Contato {
    private _id: any;
    private _nome: string;
    private _telefone: number;
    private _genero: string;
    private _dataNascimento: string;
    

    constructor(nome: string, telefone: number, genero: string, dataNascimento: string) {
        let chave = new Date;
        this._id = chave.getTime();
        this._nome = nome;
        this._telefone = telefone;
        this._genero = genero;
        this._dataNascimento = dataNascimento;
    }

    public get id(): any {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get telefone(): number {
        return this._telefone;
    }

    public set telefone(telefone: number) {
        this._telefone = telefone;
    }

    public get dataNascimento(): string {
        return this._dataNascimento;
    }
    public set dataNascimento(value: string) {
        this._dataNascimento = value;
    }

    public get genero(): string {
        return this._genero;
    }
    public set genero(value: string) {
        this._genero = value;
    }
}

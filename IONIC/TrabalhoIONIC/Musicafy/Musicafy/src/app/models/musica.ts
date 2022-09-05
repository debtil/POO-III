export class Musica {
    private _id: any;
    private _nome: string;
    private _artista: string;    
    private _album: string;
    private _genero: string;
    private _anoLancamento: string;
    private _plataforma: string;
    private _avaliacao: string;
    
    constructor(nome: string, artista: string, album: string, genero: string, anoLancamento: string, plataforma: string, avaliacao: string){
        let key = new Date()
        this._id = key.getTime();
        this._nome = nome;
        this._artista = artista;
        this._album = album;
        this._genero = genero;
        this._anoLancamento = anoLancamento;
        this._plataforma = plataforma;
        this._avaliacao = avaliacao;
    }

    public get id(): string {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get artista(): string {
        return this._artista;
    }
    
    public set artista(value: string) {
        this._artista = value;
    }

    public get album(): string {
        return this._album;
    }

    public set album(value: string) {
        this._album = value;
    }

    public get genero(): string {
        return this._genero;
    }

    public set genero(value: string) {
        this._genero = value;
    }

    public get anoLancamento(): string {
        return this._anoLancamento;
    }

    public set anoLancamento(value: string) {
        this._anoLancamento = value;
    }

    public get plataforma(): string {
        return this._plataforma;
    }

    public set plataforma(value: string) {
        this._plataforma = value;
    }

    public get avaliacao(): string {
        return this._avaliacao;
    }

    public set avaliacao(value: string) {
        this._avaliacao = value;
    }
}

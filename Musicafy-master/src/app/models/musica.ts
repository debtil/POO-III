export class Musica {
  private _id: string;
  private _nome: string;
  private _cantor: string;
  private _genero: string;
  private _album: string;
  private _plataforma: string;
  private _nota: number;
  private _anoLancamento: string;
  private _downloadURL: any;
  

  constructor(nome: string, cantor: string, album: string, genero: string,
    plataforma: string, nota: number, anoLancamento: string){
    this._nome = nome;
    this._cantor = cantor;
    this._album = album;
    this._genero = genero;
    this._plataforma = plataforma;
    this._nota = nota;
    this._anoLancamento = anoLancamento;
  }

  public get id(): string{
    return this._id;
  }

  public get nome(): string{
    return this._nome;
  }

  public set nome(nome: string){
    this._nome = nome;
  }

  public get cantor(): string{
    return this._cantor;
  }

  public set cantor(cantor: string){
    this._cantor = cantor;
  }

  public get album():string{
    return this._album;
  }

  public set album(album: string){
    this._album = album;
  }

  public get genero(): string{
    return this._genero;
  }

  public set genero(genero: string){
    this._genero = genero;
  }

  public get plataforma(){
    return this._plataforma;
  }

  public set plataforma(plataforma: string){
    this._plataforma = plataforma;
  }

  public get nota():number{
    return this._nota;
  }

  public set nota(nota: number){
    this._nota = nota;
  }

  public get anoLancamento(): string {
    return this._anoLancamento;
  }
  public set anoLancamento(value: string) {
    this._anoLancamento = value;
  }

  public get downloadURL(): any {
    return this._downloadURL;
  }
  public set downloadURL(value: any) {
    this._downloadURL = value;
  }
}

import { Injectable } from '@angular/core';
import { Musica } from '../models/musica';


@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private _musicas : Musica[] = []

  constructor() {
    let musica = new Musica("POWER", "Kanye West",  "Album", "My Beautiful Dark Twisted Fantasy",
    "Rap", "Spotify", 10, "2010" );
    this.inserir(musica);
   }

  public get musicas(): Musica[]{
    return this._musicas;
  }

  public inserir(musica: Musica){
    this._musicas.push(musica);
  }

  public editar(musica: Musica, nome: string,
    cantor: string, nomeAlbum: string, album: string, genero: string,
    plataforma: string, nota: number,
    anoLancamento: string): boolean{
    for(let i=0; i<this._musicas.length; i++){
      if(this._musicas[i].id == musica.id){
        this._musicas[i].nome = nome;
        this._musicas[i].cantor = cantor;
        this._musicas[i].nomeAlbum = nomeAlbum;
        this._musicas[i].album = album;
        this._musicas[i].genero = genero;
        this._musicas[i].plataforma = plataforma;
        this._musicas[i].nota = nota;
        this._musicas[i].anoLancamento = anoLancamento;
        return true;
      }
    }
    return false;
  }

  public excluir(musica: Musica): boolean{
    for(let i=0; i<this._musicas.length; i++){
      if(this._musicas[i].id == musica.id){
        this._musicas.splice(i,1);
        return true;
      }
    }
    return false;
  }

}

import { Injectable } from '@angular/core';
import { Musica } from '../models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private _musicas: Musica[] = [];


  constructor() { 
    let musica = new Musica("Money Trees", "Kendrick Lamar", "M.A.A.D City", "Rap", "2012", "Spotify", "Vevo");
    this.addMusica(musica);
  }

  public get musicas(): Musica[] {
    return this._musicas;
  }

  public addMusica(musica: Musica): void{
    this._musicas.push(musica);
  }

  public editar(musica: Musica, nome: string, artista: string, album: string, genero: string, anoLancamento: string, plataforma: string, gravadora: string): boolean{
    for(let i = 0; i < this._musicas.length; i++) {
      if(this._musicas[i].id == musica.id){
        this._musicas[i].nome = nome;
        this._musicas[i].artista = artista;
        this._musicas[i].album = album;
        this._musicas[i].genero = genero;
        this._musicas[i].anoLancamento = anoLancamento;
        this._musicas[i].plataforma = plataforma;
        this._musicas[i].gravadora = gravadora; 
        return true;
      }
      return false;
    }
  }

  public excluir(musica: Musica): boolean {
    for(let i = 0; i < this._musicas.length; i++){
      if(this._musicas[i].id == musica.id){
        this._musicas.slice(i, 1);
        return true;
      }
    }
    return false;
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Musica } from '../models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaFirebaseService {
  private PATH : string = 'musicas';
  constructor(private angularFirestore : AngularFirestore) { }

  getMusica(id : string){
    return this.angularFirestore.collection(this.PATH).doc(id).valueChanges();
  }

  getMusicas(){
    return this.angularFirestore.collection(this.PATH).snapshotChanges();
  }

  inserirMusica(musica: Musica){
    return this.angularFirestore.collection(this.PATH).add({nome: musica.nome, cantor: musica.cantor, genero: musica.genero, album: musica.album, nomeAlbum: musica.nomeAlbum, plataforma: musica.plataforma, nota: musica.nota, anoLancamento: musica.anoLancamento});
  }

  editarMusica(musica: Musica, id: string){
    return this.angularFirestore.collection(this.PATH).doc(id).update({nome: musica.nome, cantor: musica.cantor, genero: musica.genero, album: musica.album, nomeAlbum: musica.nomeAlbum, plataforma: musica.plataforma, nota: musica.nota, anoLancamento: musica.anoLancamento});
  }
  excluirMusica(musica: Musica){
    return this.angularFirestore.collection(this.PATH).doc(musica.id).delete();
  }
}

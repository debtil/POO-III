import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Musica } from '../models/musica';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicaFirebaseService {
  private PATH : string = 'musicas';
  constructor(private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage) { }

    getMusica(id: string){
      return this.angularFirestore.collection(this.PATH).doc(id).valueChanges();
    }

    getMusicas(){
      return this.angularFirestore.collection(this.PATH).snapshotChanges();
    }

    inserirMusica(musica: Musica){
      return this.angularFirestore.collection(this.PATH).add({nome: musica.nome, cantor: musica.cantor, genero: musica.genero, album: musica.album, 
      plataforma: musica.plataforma, nota: musica.nota, anoLancamento: musica.anoLancamento, downloadURL: musica.downloadURL});
    }

    editarMusica(musica: Musica, id: string){
      return this.angularFirestore.collection(this.PATH).doc(id).update({nome: musica.nome, cantor: musica.cantor, genero: musica.genero, album: musica.album, 
        plataforma: musica.plataforma, nota: musica.nota, anoLancamento: musica.anoLancamento});
    }

    excluirMusica(musica: Musica){
      return this.angularFirestore.collection(this.PATH).doc(musica.id).delete();
    }

    enviarImagem(imagem: any, musica: Musica){
      const file = imagem.item(0);
      if(file.type.split('/')[0] !== 'image'){
        console.error('Tipo Não Suportado');
        return;
      }
      const path = `images/${new Date().getTime()}_${file.name}`;
      const fileRef = this.angularFireStorage.ref(path);
      let task = this.angularFireStorage.upload(path, file);
      task.snapshotChanges().pipe(
        finalize(()=>{
          let uploadedFileURL = fileRef.getDownloadURL();
          uploadedFileURL.subscribe((resp) => {
            musica.downloadURL = resp;
            this.inserirMusica(musica);
          })
        })
      ).subscribe();
      return task;
    }
}



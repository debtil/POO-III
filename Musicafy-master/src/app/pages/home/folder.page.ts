import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaFirebaseService } from 'src/app/services/musica-firebase.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{
  public folder: string;
  @ViewChild(IonModal) modal: IonModal;

  musicas: Musica[];

  constructor(private router: Router, private musicaFS: MusicaFirebaseService) {
    this.carregarMusicas();
  }

  carregarMusicas(){
    this.musicaFS.getMusicas().subscribe(res => {
      this.musicas = res.map(c =>{
        return{
          id: c.payload.doc.id,
          ...c.payload.doc.data() as Musica
        } as Musica;
      })
    })
  }

  cancel() {
    this.router.navigateByUrl("/home")
  }

  irParaDetalhar(musica: Musica){
    this.router.navigateByUrl("/detalhar",
    {state: {objeto:musica}});
  }
}

import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musicaService';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{
  public folder: string;
  @ViewChild(IonModal) modal: IonModal;

  musicas: Musica[];

  constructor(private router: Router,
    private musicaService: MusicaService) {
    this.musicas = this.musicaService.musicas;
  }

  cancel() {
    this.router.navigateByUrl("/home")
  }

  irParaConteudo(musica: Musica){
    this.router.navigateByUrl("/conteudo",
    {state: {objeto:musica}});
  }
}

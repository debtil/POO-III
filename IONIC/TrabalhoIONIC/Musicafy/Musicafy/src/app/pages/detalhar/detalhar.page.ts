import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  musicas: Musica[];
  musica: Musica;
  nome: string; 
  artista: string; 
  album: string; 
  genero: string; 
  anoLancamento: string; 
  plataforma: string; 
  gravadora: string;
  constructor(private musicaService: MusicaService, private router: Router, private alertController: AlertController) {
    this.musicas = this.musicaService.musicas;
   }

  ngOnInit() {
  }



  async presentAlert(header: string, subHeader: string,
    message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertConfirm(header: string, subHeader: string,
    message: string, acao: any) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (acao) => {
           acao
          },
        },
      ],
    });
    await alert.present();
  }

  irParaInfo(musica: Musica){
    this.router.navigateByUrl("/info", {state: {objeto: musica}})
  }
}

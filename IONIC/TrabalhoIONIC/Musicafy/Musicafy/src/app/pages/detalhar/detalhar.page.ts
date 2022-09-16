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
  constructor(private musicaService: MusicaService, private router: Router, private alertController: AlertController) {
    this.musicas = this.musicaService.musicas;
   }

  ngOnInit() {
  }

  irParaInfo(musica: Musica){
    this.router.navigateByUrl("/info", {state: {objeto: musica}})
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musicaService';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {
  musica: Musica;
  nome: string;
  cantor: string;
  genero: string;
  album: string;
  nomeAlbum: string;
  plataforma:string;
  nota: number;
  anoLancamento: string;
  data: string;
  edicao: boolean = true;

  musicas: Musica[];

  constructor(private router: Router,
    private musicaService: MusicaService) {
    this.musicas = this.musicaService.musicas;
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.data = new Date().toISOString();
    this.nome = this.musica.nome;
    this.cantor = this.musica.cantor;
    this.genero = this.musica.genero;
    this.album = this.musica.album;
    this.nomeAlbum = this.musica.nomeAlbum;
    this.plataforma = this.musica.plataforma;
    this.nota = this.musica.nota;
    this.anoLancamento = this.musica.anoLancamento;
  }

  cancel() {
    this.router.navigateByUrl("/inicio");
  }

  irParaDetalhar(musica: Musica){
    this.router.navigateByUrl("/detalhar",
    {state: {objeto:musica}});
  }

}

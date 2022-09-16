import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  musica: Musica;
  nome: string; 
  artista: string; 
  album: string; 
  genero: string; 
  anoLancamento: string; 
  plataforma: string; 
  gravadora: string;
  edicao: boolean = true;
  data: string;
  constructor(private router: Router, private alertController: AlertController, private musicaService: MusicaService) { }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.nome = this.musica.nome;
    this.artista = this.musica.artista;
    this.album = this.musica.album;
    this.genero = this.musica.genero;
    this.anoLancamento = this.musica.anoLancamento;
    this.plataforma = this.musica.plataforma;
    this.gravadora = this.musica.gravadora;
  }
  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  editar(){
    if(this.validar(this.nome) && (this.validar(this.artista)) && (this.validar(this.album)) && (this.validar(this.genero)) && (this.validar(this.anoLancamento)) && (this.validar(this.plataforma)) && (this.validar(this.gravadora))){
      if(this.musicaService.editar(this.musica, this.nome, this.artista, this.album, this.genero, this.anoLancamento, this.plataforma, this.gravadora)){
        this.presentAlert("MusicaFy", "Sucesso", "Música editada");
        this.router.navigate(["folder/folder"]);
      }else{
        this.presentAlert("MusicaFy", "Erro", "Música não encontrada!");
      }
    }else{
      this.presentAlert("MúsicaFy", "Erro", "Todos os campos são obrigatórios!");
    }
  }

  excluir(){
    this.presentAlertConfirm("MusicaFy", "Excluir música", "Você realmente deseja excluir esta música?");
  }

  private excluirMusica(): void{
    if(this.musicaService.excluir(this.musica)){
      this.presentAlert("MusicaFy", "Sucesso", "Exclusão realizada com sucesso!");
      this.router.navigate(["/detalhar"]);
      console.log(this.musica);
    }else{
      this.presentAlert("MusicaFy", "Erro", "Música não encontrada!");
    }
  }

  private validar(campo: any):boolean{
    if(!campo){
      return false;
    }
    return true;
  }

  async presentAlert(cabecalho:string, subcabecalho:string, mensagem:string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertConfirm(cabecalho:string, subcabecalho:string, mensagem:string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: [{
        text: 'Cancelar',
        role: 'cancelar',
        cssClass: 'secondary',
        handler: () => {}
      },
    {
      text: 'Confirmar',
      handler: () => {
         this.excluirMusica();
      }
    }],
    });

    await alert.present();
  }
}

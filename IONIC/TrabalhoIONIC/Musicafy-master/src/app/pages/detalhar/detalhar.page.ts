import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musicaService';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  musica: Musica;
  nome: string;
  cantor: string;
  genero: string;
  nomeAlbum: string;
  album: string;
  plataforma:string;
  nota: number;
  anoLancamento: string;
  data: string;
  edicao: boolean = true;

  musicas: Musica[];

  constructor(private router: Router,
    private musicaService: MusicaService, private alertController:AlertController) {
    this.musicas = this.musicaService.musicas;
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.data = new Date().toISOString();
    this.nome = this.musica.nome;
    this.cantor = this.musica.cantor;
    this.genero = this.musica.genero;
    this.nomeAlbum = this.musica.nomeAlbum;
    this.album = this.musica.album;
    this.plataforma = this.musica.plataforma;
    this.nota = this.musica.nota;
    this.anoLancamento = this.musica.anoLancamento;
  }


  alterarEdicao(){
    if(this.edicao == true){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
   if((this.validar(this.nome)) && this.validar(this.cantor) && this.validar(this.album) &&
   this.validar(this.genero) && this.validar(this.plataforma) &&
    this.nota >= 0 && this.nota <= 10  && this.validar(this.anoLancamento)){
      if(this.musicaService.editar(this.musica, this.nome,
        this.cantor, this.nomeAlbum, this.album, this.genero,
        this.plataforma, this.nota, this.anoLancamento)){
          this.presentAlert("Musicafy", "Sucesso",
           "Dados da Música Editados!");
          this.router.navigate(["/home"]);
      }}else{
        if(this.nota < 0 || this.nota > 10){
          this.presentAlert("Musicafy ", "Erro", "A Nota deve estar no Intervalo entre 0 e 10!");
        }else{
          this.presentAlert("Musicafy ", "Erro", "Todos os campos são Obrigatórios!");
        }
   }
  }

  private validar(campo: any): boolean{
    if(!campo){
      return false;
    }
    return true;
  }

  cancel() {
    this.router.navigateByUrl("/inicio")
  }

  excluir(){
    this.presentAlertConfirm("Você Realmente Deseja Excluir a Musica?");
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

  async presentAlertConfirm(value : string) {
    const alert = await this.alertController.create({
      header: value,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.excluirMusica()
          },
        },
      ],
    });
    await alert.present();
  }

  private excluirMusica(){
    if(this.musicaService.excluir(this.musica)){
      this.presentAlert("Musicafy", "Excluir", "Exclusão Realizada");
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Musicafy", "Excluir", "Musica Não Encontrada!");
    }
  }
}


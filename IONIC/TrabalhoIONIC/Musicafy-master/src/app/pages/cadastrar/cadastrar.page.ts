import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musicaService';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome: string;
  cantor: string;
  nomeAlbum: string;
  album: string=" ";
  genero: string;
  plataforma: string;
  nota: number;
  anoLancamento: string;
  data: string;

  constructor(private alertController: AlertController,
    private router: Router, private musicaService: MusicaService) { }

  ngOnInit() {
    this.data = new Date().toISOString();
  }

  cancel() {
    this.router.navigateByUrl("/inicio");
  }

  cadastrar(){
   if((this.validar(this.nome)) && this.validar(this.cantor) && this.validar(this.album) &&
   this.validar(this.genero) && this.validar(this.plataforma) &&
    this.nota >= 0 && this.nota <= 10  && this.validar(this.anoLancamento)){
    let musica : Musica = new Musica(this.nome, this.cantor,
      this.nomeAlbum, this.album,
      this.genero, this.plataforma,
      this.nota, this.anoLancamento);
    this.musicaService.inserir(musica);
    this.presentAlert("Musicafy ", "Sucesso", "Musica Cadastrada!");
    this.router.navigate(["/home"]);
  }else{
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

}

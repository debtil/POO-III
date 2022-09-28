import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaFirebaseService } from 'src/app/services/musica-firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  musica: Musica;
  data: string;
  edicao: boolean = true;
  isSubmitted: boolean = false;
  formCadastrar: FormGroup;

  constructor(private router: Router,
    private musicaFS: MusicaFirebaseService, private formBuilder: FormBuilder, private alertController: AlertController) {
  }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.formCadastrar = this.formBuilder.group({
      nome: [this.musica.nome, [Validators.required]],
      cantor: [this.musica.cantor, [Validators.required]],
      nomeAlbum: [this.musica.nomeAlbum, [Validators.required]],
      genero: [this.musica.genero, [Validators.required]],
      plataforma: [this.musica.plataforma, [Validators.required]],
      nota: [this.musica.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: [this.musica.anoLancamento, [Validators.required]],
    })
  }

  cancel() {
    this.router.navigateByUrl("/inicio");
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.presentAlert("MusicaFy", "Erro", "Todos os campos são obrigatórios");
      return false;
    }else{
      this.editar();
    }
  }

  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  editar(){
    this.musicaFS.editarMusica(this.formCadastrar.value, this.musica.id)
    .then(() => {
      this.presentAlert("MusicaFy", "Sucesso", "Edição realizada!");
      this.router.navigate(['/inicio']);
    })
    .catch((error) => {
      this.presentAlert("MusicaFy", "Error", "Erro ao realizar a edição");
      console.log(error);
    })
  }

  excluir(): void{
    this.presentAlertConfirm("MusicaFy", "Excluir", "Você realmente deseja excluir essa música?");
  }

  excluirMusica(){
    this.musicaFS.excluirMusica(this.musica)
    .then(() => {
      this.presentAlert("MusicaFy", "Sucesso", "Música excluida com sucesso!");
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      this.presentAlert("MusicaFy", "Error", "Erro ao realizar a exclusão");
      console.log(error);
    })
  }

  irParaDetalhar(musica: Musica){
    this.router.navigateByUrl("/detalhar",
    {state: {objeto:musica}});
  }

  async presentAlert(cabecalho: string, subcabecalho: string,
    mensagem: string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertConfirm(cabecalho: string,
    subcabecalho: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem,
      buttons: [
        {
          text:'Cancelar',
          role:'cancelar',
          cssClass:'secondary',
          handler: ()=>{
            console.log("Cancelou")
          }
        },
        {
          text:'Confirmar',
          role: 'confirm',
          handler: ()=>{
           this.excluirMusica();
          }
        }
      ],
    });
    await alert.present();
  }
}


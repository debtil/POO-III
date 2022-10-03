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
  formCadastro: FormGroup;
  isSubmitted: boolean = false;
  imagem: any;

  musicas: Musica[];

  constructor(private router: Router,
    private musicaFS: MusicaFirebaseService, private alertController:AlertController, private FormBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.data = new Date().toISOString();
    
    this.formCadastro = this.FormBuilder.group({
      nome: [this.musica.nome, [Validators.required]],
      cantor: [this.musica.cantor, [Validators.required]],
      genero: [this.musica.genero, [Validators.required]],
      album: [this.musica.album, [Validators.required]],
      plataforma: [this.musica.plataforma, [Validators.required]],
      nota: [this.musica.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: [this.musica.anoLancamento, [Validators.required]],
      imagem: [""]
    })
  }

  updateFile(imagem: any){
    this.imagem = imagem.files;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastro.valid){
      this.presentAlert("Agenda", "Erro", "Todos os campos são Obrigatórios!");
      return false;
    }else{
      this.editar();
    }
  }

  alterarEdicao(){
    if(this.edicao == true){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
    if(this.formCadastro.value.imagem != ""){
      this.musicaFS.ReenviarImagem(this.imagem,this.formCadastro.value, this.musica.id)
      .then(() => {
        this.presentAlert("MusicaFy", "Sucesso", "Edição Realizada com sucesso");
        this.router.navigate(["/home"]);
      })
      .catch((error)=>{
        this.presentAlert("MusicaFy", "Erro", "Erro ao editar a Música!");
        console.log(error)
      })
    }else{
      this.musicaFS.editarMusicaSimg(this.formCadastro.value, this.musica.id)
      .then(() => {
        this.presentAlert("MusicaFy", "Sucesso", "Edição Realizada com sucesso");
        this.router.navigate(["/home"]);
      })
      .catch((error)=>{
        this.presentAlert("MusicaFy", "Erro", "Erro ao editar a Música!");
        console.log(error)
      })
    }
  }

  cancel() {
    this.router.navigateByUrl("/home")
  }

  excluir(){
    this.presentAlertConfirm("Você Realmente Deseja Excluir a Musica?");
  }

  excluirMusica(){
    this.musicaFS.excluirMusica(this.musica)
    .then(() => {
      this.presentAlert("MusicaFy", "Sucesso", "Música Excluída!");
      this.router.navigate(["/home"]);
    })
    .catch((error) => {
      this.presentAlert("MusicaFy", "Erro", "Música não encontrada!");
      console.log(error);
    })  
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
}


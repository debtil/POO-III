import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatoFirebaseService } from 'src/app/services/contato-firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato: Contato;
  data: string;
  edicao: boolean = true;
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;

  constructor(private router: Router,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private contatoFS: ContatoFirebaseService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    console.log(this.contato.genero)
    this.formCadastrar = this.formBuilder.group({
      nome:[this.contato.nome ,[Validators.required]],
      telefone:[this.contato.telefone,[Validators.required, Validators.minLength(10)]],
      genero:[this.contato.genero,[Validators.required]],
      dataNascimento:[this.contato.dataNascimento ,[Validators.required]]
    });
  }
  async showLoading(mensagem: string, duracao: number) {
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
      cssClass: 'custom-loading',
    });

    loading.present();
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.presentAlert("Agenda", "Erro","Todos os campos são Obrigatórios!");
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
    this.showLoading("Aguarde", 1000)
    this.contatoFS.editarContato(this.formCadastrar.value, this.contato.id)
    .then(() => {
      this.presentAlert("Agenda", "Sucesso", "Edição Realizado");
      this.router.navigate(["/home"]);
    })
    .catch((error) => {
      this.presentAlert("Agenda", "Erro", "Edição não foi Realizada com Sucesso");
      console.log(error);
    })
  }

  excluir(): void{
    this.presentAlertConfirm("Agenda", "Excluir Contato", "Você realmente deseja excluir o contato?");
  }

  excluirContato(){
    this.showLoading("Aguarde", 1000);
    this.contatoFS.excluirContato(this.contato)
    .then(() => {
      this.presentAlert("Agenda", "Sucesso", "Edição Realizado");
      this.router.navigate(["/home"]);
    })
    .catch((error) => {
      console.log(error);
      this.presentAlert("Agenda", "Erro", "Contato Não Encontrado!");
    })
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
           this.excluirContato();
          }
        }
      ],
    });
    await alert.present();
  }
}

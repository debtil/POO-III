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
  nome: string;
  telefone: number;
  genero: string;
  dataNascimento: string;
  data: string;
  edicao: boolean = true;
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private loadingCtrl: LoadingController, private contatoFS: ContatoFirebaseService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    console.log(this.contato);
    this.formCadastrar = this.formBuilder.group({
      nome:[this.contato.nome ,[Validators.required]],
      telefone:[this.contato.telefone,[Validators.required, Validators.minLength(10)]],
      genero:[this.contato.genero,[Validators.required]],
      data_nascimento:[this.contato.dataNascimento ,[Validators.required]]
    });
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.presentAlert("Agenda", "Erro",
      "Todos os campos são Obrigatórios!");
      return false;
    }else{
      this.editar();
    }
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  editar(){
    this.contatoFS.editarContato(this.formCadastrar.value, this.contato.id)
    .then(() => {
      this.presentAlert("Agenda", "Sucesso", "Edição realizada com sucesso!");
        this.router.navigate(["/home"]);
    })
    .catch((error) =>{
      this.presentAlert("Agenda", "Erro", "Contato não encontrado!");
      console.log(error);
    })
  }

  excluir(){
    this.presentAlertConfirm("Agenda", "Excluir contato", "Você realmente deseja excluir este contato?");
  }

  private validar(campo: any):boolean{
    if(!campo){
      return false;
    }

    return true;
  }

  private excluirContato(): void{
    this.showLoading("Aguarde...", 10000);
    this.contatoFS.excluirContato(this.contato)
    .then(() => {
      this.loadingCtrl.dismiss();
      this.presentAlert("Contato", "Sucesso", "Exclusão realizada com sucesso!");
      this.router.navigate(["/home"]);
    })
    .catch((error) => {
      this.loadingCtrl.dismiss();
      this.presentAlert("Contato", "Erro", "Contato não encontrado!");
      console.log(error);
    })
  }

    // no trabalho precisa estar em um service
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
        this.excluirContato();
      }
    }],
    });

    await alert.present();
  }

  async showLoading(mensagem: string, duracao: number) {
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
    });
    loading.present();
  }
}

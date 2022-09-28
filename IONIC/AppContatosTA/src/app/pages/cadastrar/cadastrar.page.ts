import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContatoFirebaseService } from 'src/app/services/contato-firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  data: string;
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;
  event: any;
  imagem: any;

  constructor(private loadingCtrl: LoadingController, private formBuilder: FormBuilder, 
    private contatoFS: ContatoFirebaseService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome: ["",[Validators.required]],
      telefone: ["", [Validators.required, Validators.minLength(10)]],
      genero: ["", [Validators.required]],
      dataNascimento: ["", [Validators.required]],
      imagem: ["", [Validators.required]]
    });
    this.data = new Date().toISOString();
  }

  uploadFIle(imagem: any){
    this.imagem = imagem.files;
  }

  async showLoading(mensagem: string, duracao: number) {
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
    });
    loading.present();
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.presentAlert("Agenda", "Erro", "Todos os campos são obrigatórios!");
      return false;  
    }else{
      this.cadastrar();
    }
  }

  private cadastrar(): void {         
      this.showLoading("Aguarde...", 1000);
      
      this.contatoFS.enviarImagem(this.imagem, this.formCadastrar.value)

      .then(() => {
        this.loadingCtrl.dismiss();
        this.presentAlert("Agenda", "Sucesso", "Cadastro Realizado com êxito!");
      this.router.navigate(["/home"]);
      })
      .catch((error) => {
        this.loadingCtrl.dismiss();
        this.presentAlert("Agenda", "Erro", "Erro ao realizar o Cadastro!");
        console.log(error);
      })
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
}

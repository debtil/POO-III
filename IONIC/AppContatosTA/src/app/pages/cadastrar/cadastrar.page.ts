import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  data: string;
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private router: Router, private contatoService: ContatoService) { }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome: ["",[Validators.required]],
      telefone: ["", [Validators.required, Validators.minLength(10)]],
      genero: ["", [Validators.required]],
      dataNascimento: ["", [Validators.required]]
    });
    this.data = new Date().toISOString();
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
      
      this.contatoService.inserir(this.formCadastrar.value);
      this.presentAlert("Agenda", "Sucesso", "Cadastro Realizado com êxito!");
      this.router.navigate(["/home"]);
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

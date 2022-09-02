import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

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
  constructor(private router: Router, private alertController: AlertController, private contatoService: ContatoService) { }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.dataNascimento = this.contato.dataNascimento;
    //nome: [this.contato.nome, [Validators.required]]
  }

  alterarEdicao(): void{
    if(this.edicao == false){
      this.edicao = true;
    }else{
      this.edicao = false;
    }
  }

  editar(){
    this.dataNascimento = this.dataNascimento.split('T')[0];
    if(this.validar(this.nome) && (this.validar(this.telefone)) && (this.validar(this.genero)) && (this.validar(this.dataNascimento))){ 
      if(this.contatoService.editar(this.contato, this.nome, this.telefone, this.genero, this.dataNascimento)){
        this.presentAlert("Agenda", "Sucesso", "Edição realizada com sucesso!");
        this.router.navigate(["/home"]);
      }else{
        this.presentAlert("Agenda", "Erro", "Contato não encontrado!");
      }
    }else{
      this.presentAlert("Agenda", "Erro", "Todos os campos são obrigatórios!");
    }
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
    if(this.contatoService.excluir(this.contato)){
      this.presentAlert("Contato", "Sucesso", "Exclusão realizada com sucesso!");
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Contato", "Erro", "Contato não encontrado!");
    }
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
}

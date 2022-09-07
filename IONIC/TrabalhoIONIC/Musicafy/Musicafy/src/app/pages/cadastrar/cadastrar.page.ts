import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  formCadastro: FormGroup;
  isSubmitted: boolean = false;
  data: string;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController, private router: Router, private musicaService: MusicaService) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: ["", [Validators.required]],
      artista: ["", [Validators.required]],
      album: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      anoLancamento: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
      gravadora: ["", [Validators.required]]});
      this.data = new Date().toISOString();
  }
  get errorControl(){
    return this.formCadastro.controls;
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastro.valid){
      this.presentAlert("MusicaFy", "Erro", "Todos os campos são necessários!");
      return false;
    }else{
      this.cadastrar();
    }
  }

  private cadastrar(): void{
    this.musicaService.addMusica(this.formCadastro.value);
    this.presentAlert("MusicaFy", "Sucesso", "Música cadastrada com sucesso!");
    this.router.navigate(['/detalhar']);
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

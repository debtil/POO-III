import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaFirebaseService } from 'src/app/services/musica-firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
 
  data: string;
  isSubmitted: boolean = false;
  event: any;
  formCadastrar: FormGroup;
  constructor(private alertController: AlertController,
    private router: Router, private musicaFS: MusicaFirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome: ["", [Validators.required]],
      cantor: ["", [Validators.required]],
      nomeAlbum: ["", [Validators.required]],
      
      genero: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
      nota: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: ["", [Validators.required]],
    });
    this.data = new Date().toISOString();
  }

  cancel() {
    this.router.navigateByUrl("/inicio");
  }

  private cadastrar(): void{
    this.musicaFS.inserirMusica(this.formCadastrar.value)
    .then(() => {
    this.presentAlert("MusicaFy", "Sucesso", "Cadastro realizado com êxito!");
    this.router.navigate(['/home']);
   })
   .catch((error) => {
    this.presentAlert("MusicaFy", "Error", "Erro ao realizar o cadastro");
    console.log(error);
   });
  }

  submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.presentAlert("MusicaFy", "Erro", "Não foi possível realizar o cadastro");
      return false;
    }else{
      this.cadastrar();
    }
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import { MusicaFirebaseService } from 'src/app/services/musica-firebase.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  data: string;
  formCadastro: FormGroup;
  isSubmitted: boolean = false;
  imagem: any;
  event: any;

  constructor(private alertController: AlertController,
    private router: Router, private musicaFS: MusicaFirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: ["", [Validators.required]],
      cantor: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      album: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
      nota: ["", [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: ["", [Validators.required]],
      imagem: ["", [Validators.required]]
    });
    this.data = new Date().toISOString();
  }

  cancel() {
    this.router.navigateByUrl("/home")
  }

  uploadFile(imagem: any){
    this.imagem = imagem.files;
  }

  get errorControl(){
    return this.formCadastro.controls;
  }

  private cadastrar(){
    this.musicaFS.enviarImagem(this.imagem, this.formCadastro.value)
    .then(() => {
      this.presentAlert("MusicaFy", "Sucesso", "Música cadastrada com sucesso");
      this.router.navigate(["/home"]);
    })
    .catch((error) => {
      this.presentAlert("MusicaFy", "Erro", "Erro ao cadastrar a música");
      console.log(error);
    });
   }
   
   submitForm(): boolean{
    this.isSubmitted = true;
    if(!this.formCadastro.valid){
      this.presentAlert("Agenda", "Erro", "Todos os campos são Obrigatórios!");
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

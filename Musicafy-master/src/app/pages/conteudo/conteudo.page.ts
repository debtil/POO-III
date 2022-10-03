import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Musica } from 'src/app/models/musica';
import { MusicaFirebaseService } from 'src/app/services/musica-firebase.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {
  musica: Musica;
  data: string;
  edicao: boolean = true;
  formConteudo: FormGroup;
  imagem: any;
  isSubmitted: boolean = false;

  musicas: Musica[];

  constructor(private router: Router,
    private musicaFS: MusicaFirebaseService, private alertController:AlertController, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.data = new Date().toISOString();

    this.formConteudo = this.FormBuilder.group({
      nome: [this.musica.nome, [Validators.required]],
      cantor: [this.musica.cantor, [Validators.required]],
      genero: [this.musica.genero, [Validators.required]],
      album: [this.musica.album, [Validators.required]],
      plataforma: [this.musica.plataforma, [Validators.required]],
      nota: [this.musica.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: [this.musica.anoLancamento, [Validators.required]],
      imagem: [this.musica.downloadURL, [Validators.required]]
    })
}

cancel() {
  this.router.navigateByUrl("/home")
}

}

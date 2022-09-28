import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
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
  isSubmitted: boolean = false;
  formCadastrar: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.data = new Date().toISOString();
    const nav = this.router.getCurrentNavigation();
    this.musica = nav.extras.state.objeto;
    this.formCadastrar = this.formBuilder.group({
      nome: [this.musica.nome, [Validators.required]],
      cantor: [this.musica.cantor, [Validators.required]],
      nomeAlbum: [this.musica.nomeAlbum, [Validators.required]],
      genero: [this.musica.genero, [Validators.required]],
      plataforma: [this.musica.plataforma, [Validators.required]],
      nota: [this.musica.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      anoLancamento: [this.musica.anoLancamento, [Validators.required]],
    })
  }

  cancel() {
    this.router.navigateByUrl("/inicio");
  }

  irParaDetalhar(musica: Musica){
    this.router.navigateByUrl("/detalhar",
    {state: {objeto:musica}});
  }

}

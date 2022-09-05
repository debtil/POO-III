import { Component, OnInit } from '@angular/core';
import { Musica } from 'src/app/models/musica';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  musicas: Musica[];
  constructor() { }

  ngOnInit() {
  }

}

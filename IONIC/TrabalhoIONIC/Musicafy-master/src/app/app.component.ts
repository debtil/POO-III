import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio', icon: 'home' },
    { title: 'Adicionar Musica', url: '/cadastrar', icon: 'pulse' },
    {title: 'Biblioteca', url: '/home', icon: 'musical-notes'}
  ];
  constructor() {}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Adicionar', url: '/cadastrar', icon: 'mail' },
    { title: 'Biblioteca', url: '/detalhar', icon: 'paper-plane' },
  ];
  constructor(router: Router) {}
}

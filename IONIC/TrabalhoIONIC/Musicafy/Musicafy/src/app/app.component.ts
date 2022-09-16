import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'folder/folder', icon:'home'},
    { title: 'Adicionar', url: '/cadastrar', icon: 'add-circle' },
    { title: 'Biblioteca', url: '/detalhar', icon: 'musical-notes' },
  ];
  constructor(router: Router) {}
}

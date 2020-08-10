import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'construct-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'avatar',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'botones',
      name: 'botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'checkboxs',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'dateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },

    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

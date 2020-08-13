import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  items: any[] = [];
  constructor() { }


  doRefresh(evento){
    console.log(evento);
    setTimeout(() => {
      this.items = Array(20);
      evento.target.complete();
    }, 1500);
  }
  ngOnInit() {
  }

}

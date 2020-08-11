import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;
  constructor( private dtaSvs: DataService ) { }



  ngOnInit() {
    this.usuarios = this.dtaSvs.getUsers();
    }

favorite(user){
  console.log('Option favorite', user);
  this.lista.closeSlidingItems();

}
share(user){
  console.log('Option share', user);
  this.lista.closeSlidingItems();
}
unread(user){
  console.log('Option unread', user);
  this.lista.closeSlidingItems();
}

}

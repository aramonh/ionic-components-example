import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;
  constructor( private dtaSvs: DataService ,
               private toastController: ToastController ) { }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }




ngOnInit() {
    this.usuarios = this.dtaSvs.getUsers();
    }

favorite(user){
  console.log('Option favorite', user);
//  this.presentToast('Guardado favoritos');
  this.presentToastWithOptions();
  this.lista.closeSlidingItems();

}
share(user){
  console.log('Option share', user);
  this.presentToast('Compartido');
  this.lista.closeSlidingItems();
}
unread(user){
  console.log('Option unread', user);
  this.presentToast('UNREAD');
  this.lista.closeSlidingItems();
}

}

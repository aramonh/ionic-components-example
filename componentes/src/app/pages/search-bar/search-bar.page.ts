import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes: any [] = [];
  textoBuscar = '';
  constructor(private dataSvc: DataService) { }


  onSearchChange(evento){
    console.log(evento);
    this.textoBuscar = evento.detail.value ;
  }

  ngOnInit() {
    this.dataSvc.getDataToSearch().subscribe((data) => {
      console.log(data);
      this.albumes = data ;
    });
  }

}

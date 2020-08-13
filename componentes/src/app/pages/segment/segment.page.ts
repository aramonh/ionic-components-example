import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment} from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild('segmento') segment: IonSegment;
  superheroes: Observable<any>;
  publisher = '';

  constructor(private dataSvc: DataService) { }


  segmentChanged(evento){
    const segVal = evento.detail.value;

    if (segVal === 'Todos'){
        this.publisher = '';
        return;
      }

    this.publisher = segVal;
    return;

    console.log(segVal);
    console.log(this.segment.value);
  }
  ngOnInit() {
    // this.segment.value='Todos';

    this.superheroes = this.dataSvc.getDataToSegment();

  }

}

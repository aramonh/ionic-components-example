import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

fechaNaci: Date = new Date();
customPickerOptions;
customDate;

  constructor() { }


  cambioFecha(event){
    console.log(event);
    console.log('Date', new Date ( event.detail.value  ) );
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event.day.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

}

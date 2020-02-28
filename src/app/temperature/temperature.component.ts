import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  getTemperature(){
    return this.houseIoT.database.ref('/home').child('temperatura').on('value',
    function(snapshot){
      console.log(snapshot.val());
    })
  }
}

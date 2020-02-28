import { Component, OnInit } from '@angular/core';
import { IotFirebaseService } from '../service/iot-firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  livingroom: any;
  diningroom: any;
  kitchen: any;
  bathroom: any;
  yard: any;
  array: any = [];
  states: any = [];
  show = false;
  suscription: Subscription;
  
  constructor(private houseIoTService: IotFirebaseService) {
    this.suscription = this.houseIoTService.consultStatus().
      subscribe((res) => {
       this.array = res;
       this.loadStates();
      });

  }
   loadStates() {
      if (this.array[0] === 'off') {
        this.livingroom = false;
      } else {
        this.livingroom = true;
      }
      if (this.array[1] === 'off') {
        this.diningroom = false;
      } else {
        this.diningroom = true;
      }
      if (this.array[2] === 'off') {
        this.kitchen = false;
      } else {
        this.kitchen = true;
      }
      if (this.array[3] === 'off') {
        this.bathroom = false;
      } else {
        this.bathroom = true;
      }
      if (this.array[4] === 'off') {
        this.yard = false;
      } else {
        this.yard = true;
      }
      this.show = true;
  }

  ngOnInit() {}

  updateStatus(foco: any, name: string) {
    const value = foco ? 'on' : 'off';
    this.houseIoTService.updateStatus(name, value).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log('error ' + e);
    });
  }
  getValue(value, foco: string) {
    console.log(value + foco);
  }
  

}

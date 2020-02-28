import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IotFirebaseService {
  array: any;
  values: any;
  constructor(private houseIoT: AngularFireDatabase) { }
  updateStatus( light: any, value: any ) {
    const object = `{"${light}" : "${value}"}`;
    console.log(JSON.parse(object));
    return this.houseIoT.object('/house').update(JSON.parse(object));
  }
  consultStatu() {
    return this.houseIoT.object('/house').valueChanges().subscribe((res) => {
      console.log(res);
    });
  }
  consultStatus() {
   return this.houseIoT.list('house').valueChanges();
  }
}
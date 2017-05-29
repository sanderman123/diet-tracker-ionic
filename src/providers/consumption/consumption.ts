import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ConsumptionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConsumptionProvider {

  // consumptionList = [
  //   { product: { title: 'Pindakaas', salt: 1.2 }, grams: 100 }
  // ];

  oConsumptionList: FirebaseListObservable<any[]>;

  maxConsumption = 100;

  constructor(db: AngularFireDatabase, public auth: AuthProvider) {
    this.oConsumptionList = db.list('/consumption-list');

    console.log('joehoeee', this.oConsumptionList);
  }

  getMaxSaltConsumption() {
    return this.maxConsumption;
  }

  getTotalSaltConsumption(): Observable<number> {
    return this.oConsumptionList
      .map(cList => {
        return cList
          .map(c => this.getGramsOfSaltForConsumption(c))
          .reduce((a, b) => a + b, 0);
      });
  }

  getGramsOfSaltForConsumption(c) {
    return (c.grams / 100) * c.product.salt;
  }

  addConsumption(product, grams) {
    this.oConsumptionList.push({ product, grams });
  }

}

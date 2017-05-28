import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConsumptionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConsumptionProvider {

  consumptionList = [
    { product: { title: 'Pindakaas', salt: 1.2 }, grams: 100 }
  ];

  maxConsumption = 100;

  constructor() {
    console.log('Hello ConsumptionProvider Provider');
  }

  getMaxSaltConsumption() {
    return this.maxConsumption;
  }

  getTotalSaltConsumption() {
    return this.consumptionList
      .map(c => this.getGramsOfSaltForConsumption(c))
      .reduce((a, b) => a + b, 0);
  }

  getGramsOfSaltForConsumption(c) {
    return (c.grams / 100) * c.product.salt;
  }

  addConsumption(product, grams) {
    this.consumptionList.push({ product, grams });
  }

}

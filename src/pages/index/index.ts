import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductListPage } from "../product-list/product-list";
import { ConsumptionProvider } from "../../providers/consumption/consumption";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  totalConsumption: Observable<number>;
  maxConsumption: number;
  totalConsumptionPercentage: Observable<number>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public consumptionProvider: ConsumptionProvider) { 
    console.log('joeheoeh')
    this.totalConsumption = this.consumptionProvider.getTotalSaltConsumption();
    this.maxConsumption = this.consumptionProvider.getMaxSaltConsumption();
    this.totalConsumptionPercentage = this.totalConsumption.map(tc => tc / this.maxConsumption * 100);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  add() {
    this.navCtrl.push(ProductListPage);
  }

}

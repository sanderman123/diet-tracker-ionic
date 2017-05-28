import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsumptionPage } from "../consumption/consumption";

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  products = [
    {title: 'Pindakaas', salt: 1.2, imageUrl: 'https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313935363437_1_LowRes_JPG.JPG'},
    {title: 'Pasta', salt: 0.6},
    {title: 'Jam', salt: 0.4}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  productTapped(event, product) {
    this.navCtrl.push(ConsumptionPage, {
      product: product
    });
  }

}

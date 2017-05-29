import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, NavOptions } from 'ionic-angular';
import { ConsumptionProvider } from "../../providers/consumption/consumption";

/**
 * Generated class for the ConsumptionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-consumption',
  templateUrl: 'consumption.html',
})
export class ConsumptionPage {
  product: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public consumptionProvider: ConsumptionProvider) {
    this.product = navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumptionPage');
    this.showPrompt();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: this.product.title,
      message: `Total grams of ${this.product.title} consumed`,
      inputs: [
        {
          name: 'grams',
          placeholder: 'Grams',
          type: 'number',
          min: 0,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'Add',
          handler: data => {
            this.consumptionProvider.addConsumption(this.product, data.grams);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    prompt.present();
  }

}

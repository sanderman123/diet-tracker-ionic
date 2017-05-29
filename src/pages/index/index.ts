import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductListPage } from "../product-list/product-list";
import { ConsumptionProvider } from "../../providers/consumption/consumption";
import { Observable } from "rxjs/Observable";
import { AuthProvider } from "../../providers/auth/auth";

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
  user: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public consumptionProvider: ConsumptionProvider, public authProvider: AuthProvider,
      public alertCtrl: AlertController) { 
    console.log('joeheoeh')
    this.user = this.authProvider.getUser();
    this.totalConsumption = this.consumptionProvider.getTotalSaltConsumption();
    this.maxConsumption = this.consumptionProvider.getMaxSaltConsumption();
    this.totalConsumptionPercentage = this.totalConsumption.map(tc => tc / this.maxConsumption * 100);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.user.subscribe(u => u == null ? this.showPrompt() : console.log('already logged in as:', u.displayName))
  }

  add() {
    this.navCtrl.push(ProductListPage);
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: `Please login first`,
      buttons: [
        {
          text: 'Login with google',
          handler: () => {
            this.authProvider.loginWithGoogle().catch(() => this.showPrompt());
          }
        }
      ]
    });
    prompt.present();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { IndexPageModule } from "../pages/index/index.module";
import { IndexPage } from '../pages/index/index';
import { ProductListPageModule } from "../pages/product-list/product-list.module";
import { ProductListPage } from '../pages/product-list/product-list';
import { ConsumptionPageModule } from "../pages/consumption/consumption.module";
import { ConsumptionPage } from '../pages/consumption/consumption';
import { ConsumptionProvider } from '../providers/consumption/consumption';
import { AuthProvider } from '../providers/auth/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBog7oMzq7e4zQMKjkTOygeIPufsvXfqsA',
  authDomain: 'diet-tracker-24cca.firebaseapp.com',
  databaseURL: 'https://diet-tracker-24cca.firebaseio.com',
  projectId: 'diet-tracker-24cca',
  storageBucket: 'diet-tracker-24cca.appspot.com',
  messagingSenderId: '107361449335'
}

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IndexPageModule,
    ProductListPageModule,
    ConsumptionPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    IndexPage,
    ProductListPage,
    ConsumptionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConsumptionProvider,
    AuthProvider
  ]
})
export class AppModule { }

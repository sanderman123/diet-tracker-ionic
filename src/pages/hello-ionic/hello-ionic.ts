import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public authProvider: AuthProvider) {

  }

  logout() {
    console.log('logging out');
    this.authProvider.logout();
  }
}

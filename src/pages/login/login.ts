import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading:any;
  registerCredentials = { email: '', password: '' };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl : LoadingController
  ) {
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  public login(){
    this.showLoading();
    this.navCtrl.setRoot('EventPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

import { Component } from '@angular/core';
import { LoadingController,MenuController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  eventDetail: any;
  loading:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingCtrl : LoadingController
  ) {
    this.eventDetail = this.navParams.get('eventData');
    // this.eventDetail = {
    //   title : 'Wedding',
    //   image: 'https://images.pexels.com/photos/265893/pexels-photo-265893.jpeg?cs=srgb&dl=beads-beautiful-bloom-265893.jpg&fm=jpg',
    //   firstColor: '#cf74ec',
    //   secondColor : '#b275ea'
    // };
    console.log(this.eventDetail);
  }

  setMyStyles(first, second) {
    let styles = {
      'background': 'linear-gradient(to right, ' + first + ', ' + second + ')'
    };
    return styles;
  }

  setFontColor(first) {
    let styles = {
      'color': first
    };
    return styles;
  }

  toggleLeftMenu() {
    this.menuCtrl.toggle();
  }

  toggleRightMenu() {
    this.menuCtrl.toggle('right');
  }

  goToVendor(vendor){
    this.showLoading();
    this.navCtrl.push('VendorListPage', { vendor:vendor, data:this.eventDetail } );
  }

  goBack(){
    console.log("click");
    this.navCtrl.pop();
  }

  showLoading() {
   
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

}

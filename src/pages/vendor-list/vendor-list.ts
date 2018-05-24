import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the VendorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-list',
  templateUrl: 'vendor-list.html',
})
export class VendorListPage {
  vendorType: any;
  vendor: any;
  users: any = [];
  rate: any;
  color: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataServiceProvider
  ) {
    this.vendor = this.navParams.get('vendor');
    this.color = this.navParams.get('data');
    this.rate = 4;

    this.getVendor();
    this.getVendorType(this.vendor);


    //for debug & dev
    // this.getVendorType('Photographer');
    // this.color = {
    //   title: 'Wedding',
    //   image: 'https://images.pexels.com/photos/265893/pexels-photo-265893.jpeg?cs=srgb&dl=beads-beautiful-bloom-265893.jpg&fm=jpg',
    //   firstColor: '#cf74ec',
    //   secondColor: '#b275ea'
    // };
  }

  getVendor() {

    this.data.getVendorList()
      .subscribe((res) => {
        console.log(res);
        this.users = res.results;
      })

  }

  getVendorType(vendor) {
    let type = this.data.getVendorType();
    for (let i in type) {
      if (vendor == type[i]["name"]) {
        this.vendorType = type[i];
      }
    }
    console.log(this.vendorType);
  }

  setMyStyles(first,second) {
    let styles = {
      'background': 'linear-gradient(to right, '+first+', '+second+')'
    };
    return styles;
  }
  setFontColor(first) {
    let styles = {
      'color': first
    };
    return styles;
  }

  goBack(){
    console.log("click");
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorListPage');
  }

}

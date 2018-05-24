import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
    this.data = null;
  }

  getVendorList() {
    let env = this;
    return env.http.get('https://randomuser.me/api/?results=10')
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      })
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getVendorType(){
    let vendor=[];

    vendor=[{
      name:"Photographer",
      icon:"appname-photo-camera"
    },{
      name:"Videographer",
      icon:"appname-video-camera"
    },{
      name:"Ice Cream",
      icon:"appname-ice-cream-truck"
    },{
      name:"Catering",
      icon:"appname-catering"
    },{
      name:"Sketch",
      icon:"appname-sketch"
    },{
      name:"Dress",
      icon:"appname-dress"
    },{
      name:"Sound System",
      icon:"appname-musicplayer"
    }]

    return vendor;
  }

}

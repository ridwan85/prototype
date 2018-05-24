import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  eventList:any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.eventList = [{
      title : 'Wedding',
      image: 'https://images.pexels.com/photos/265893/pexels-photo-265893.jpeg?cs=srgb&dl=beads-beautiful-bloom-265893.jpg&fm=jpg',
      firstColor: '#cf74ec',
      secondColor : '#b275ea'
    },
    {
      title : 'Festival',
      image: 'https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?cs=srgb&dl=action-adult-battle-974320.jpg&fm=jpg',
      firstColor: '#74eca6',
      secondColor : '#75eadd'
    },
    {
      title : 'Baby Shower',
      image: 'https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?cs=srgb&dl=accessories-adorable-baby-325867.jpg&fm=jpg',
      firstColor: '#ecb574',
      secondColor : '#eac275'
    },
    {
      title : 'Band Gig',
      image: 'https://images.pexels.com/photos/2143/lights-party-dancing-music.jpg?cs=srgb&dl=cheerful-club-concert-2143.jpg&fm=jpg',
      firstColor: '#ec7482',
      secondColor : '#ea7580'
    }]
    console.log(this.eventList);
  }

  setMyStyles(first,second) {
    let styles = {
      'background': 'linear-gradient(to right, '+first+', '+second+')'
    };
    return styles;
  }

  goToDetails(data){
    this.navCtrl.push('EventDetailPage',{eventData:data})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}

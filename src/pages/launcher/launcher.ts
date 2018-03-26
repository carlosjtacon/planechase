import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GamePage } from '../game/game';


@Component({
  selector: 'page-launcher',
  templateUrl: 'launcher.html',
})
export class LauncherPage {

  planes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LauncherPage');
  }

  play() {
    this.navCtrl.push(GamePage, { planes: this.planes });
  }
}

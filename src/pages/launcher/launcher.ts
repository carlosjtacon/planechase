import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GamePage } from '../game/game';


@Component({
  selector: 'page-launcher',
  templateUrl: 'launcher.html',
})
export class LauncherPage {

  selectAll:boolean;

  planes:any;

  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getPlanes().subscribe((data) => { this.planes = data; });
  }

  updateAll() {
    this.planes.forEach(plane => {
      plane.ionicCheckbox = this.selectAll;
    });
  }

  play() {
    var selectedPlanes = [];
    this.planes.forEach(plane => {
      if (plane.ionicCheckbox) {
        selectedPlanes.push(plane);
      }
    });

    this.navCtrl.push(GamePage, { planes: selectedPlanes });
  }

  getPlanes() {
    return this.http.get("assets/planes.json").map((res:Response) => res.json().cards);
  }
}

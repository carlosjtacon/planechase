import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  i: number;
  selectedPlanes: any;

  dice: any;
  diceFace: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.i = 0;
    this.selectedPlanes = this.shuffle(this.navParams.get("planes"));

    this.dice = ["plane", "chaos", "none", "none", "none", "none"];
    this.diceFace = 0;
  }

  increase() {
    if (this.i < this.selectedPlanes.length - 1) this.i += 1;
    else this.i = 0;
  }

  decrease() {
    if (this.i > 0) this.i -= 1;
    else this.i = this.selectedPlanes.length - 1;
  }

  rollDice() {
    this.diceFace = Math.round(Math.random() * 5);
  }

  // @ https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}

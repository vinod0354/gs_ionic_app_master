import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-pulse',
  templateUrl: './pulse.page.html',
  styleUrls: ['./pulse.page.scss'],
})
export class PulsePage implements OnInit {

  segment: string;

  constructor(public navCtrl: NavController) { }

  value: number = 3;
  options: Options = {
    showTicksValues: true,
     floor: 0,
    ceil: 5,
    stepsArray: [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ]
  };

  value2: number = 2;
  options2: Options = {
    showTicksValues: true,
     floor: 0,
    ceil: 5,
    stepsArray: [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ]
  };

  value3: number = 4;
  options3: Options = {
    showTicksValues: true,
     floor: 0,
    ceil: 5,
    stepsArray: [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ]
  };

  ngOnInit() {
    this.segment = 'profession';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}

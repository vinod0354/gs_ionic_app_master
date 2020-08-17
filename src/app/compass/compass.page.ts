import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.page.html',
  styleUrls: ['./compass.page.scss'],
})
export class CompassPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
        // labels: ["Miscellaneous", "Family", "Personal", "Health", "Friends", "Finance"],
        datasets: [{
              label: "This is chart",
              backgroundColor: [

              "#102a9e",
              "#7f0587",
              "#a80ceb",
              "#42055c",
              "#3abdb6",
              "#7cf578",
              "#164d14",
              "#d6d024"
              
              ],
              data: [20, 15, 10, 35, 50, 40, 35, 50],
              borderWidth: 2
        }]
       }
    });
  }
}

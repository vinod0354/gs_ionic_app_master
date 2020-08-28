import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { NavController, ModalController } from '@ionic/angular';
import { SharePage } from './share/share.page';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.page.html',
  styleUrls: ['./progress-tracker.page.scss'],
})
export class ProgressTrackerPage implements OnInit {

  segment: string;

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [
    {
      borderColor: 'white',
    
    },
  ];
  doughnutChartLabels2: Label[] = ['Green', 'Orange', 'yellow'];
  doughnutChartData2: MultiDataSet = [
    [50, 15, 35]
  ];
  doughnutChartType2: ChartType = 'doughnut';
  doughnutChartColors2: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: ['#57c7d4','#3bd949','#ffc107'],
    },
  ];



  doughnutChartLabels3: Label[] = ['Green', 'Orange', 'yellow'];
  doughnutChartData3: MultiDataSet = [
    [50, 15, 35]
  ];
  doughnutChartType3: ChartType = 'doughnut';


  doughnutChartColors3: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: ['#57c7d4','#3bd949','#ffc107'],
    },
  ];

  doughnutChartOptions :ChartOptions = {
    cutoutPercentage: 85
  };

  doughnutChartLegend =false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.segment = 'new';
    this.segment = 'week';
    this.segment = 'all'
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  } 

  async openModal() {
    const modal = await this.modalController.create({
         component: SharePage,cssClass: 'share-modal'
        });
    modal.present();
    console.log('clicked');
  }

}

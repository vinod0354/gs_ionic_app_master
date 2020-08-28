import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  @Input() modalType;
  @Input() modalData;
  @Input() modalActions;
  @Input() modalCatogeries;
  @Input() modalGoals;
  @Input() modalObjectives;
  @Input() miscellaneousCatogeryID;

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  async closemodal(data){

    console.log();
    await this.modal.dismiss({data});


  }

}

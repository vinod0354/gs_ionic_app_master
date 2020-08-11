import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  inputData = '';
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  handleinput(event){
    console.log('******');
    console.log(event.target.value);
    this.inputData = event.target.value;
  }


  async closemodal(){

    
    await this.modal.dismiss({
      data:this.inputData
     });


  }

}

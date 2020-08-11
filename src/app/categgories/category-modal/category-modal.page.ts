import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { getElement } from '@ionic/core/dist/types/stencil-public-runtime';
import { GlobalsService } from 'src/app/services/globals.service';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  circleArray:any = [
    {
      'name': 'Miscellaneous', 
      'color': 'color1',
      'checked':'false',
      'passcolor': '#7b7b7b'
    },{
      'name': 'Family', 
      'color': 'color2',
      'checked':'false',
      'passcolor':'#722fa0'
    },{
      'name': 'Health', 
      'color': 'color3',
      'checked':'false',
      'passcolor':'#ffc100'
    },{
      'name': 'Friends', 
      'color': 'color4',
      'checked':'false',
      'passcolor':'#0671d1'
    },{
      'name': 'Personal Developement', 
      'color': 'color5',
      'checked':'false',
      'passcolor':'#00b4ef'
    },{
      'name': 'Division Manager', 
      'color': 'color6',
      'checked':'false',
      'passcolor':'#ed0c00'
    },{
      'name': 'Digital Program Lead', 
      'color': 'color7',
      'checked':'false',
      'passcolor':'#fffe00'
    },{
      'name': 'Miscellaneous', 
      'color': 'color8',
      'checked':'false',
      'passcolor':'#00b350'
    },{
      'name': 'Family', 
      'color': 'color9',
      'checked':'false',
      'passcolor':'#a19e9b'
    },{
      'name': 'Health', 
      'color': 'color10',
      'checked':'false',
      'passcolor':'#f38a0d'
    }
     
  ];

  category:any;
  passColor = '';
  categoryId='';
  txtCatagoryName='';
  txtCategoryDescription='';
  filterList = [];
  
  constructor(private navParams: NavParams, private modal:ModalController, private global:GlobalsService, private apiService:ApiServicesService) { }

  ngOnInit( ) {
    this.category = this.navParams.get('passCatagory');
    this.filterList = this.navParams.get('filterList');

    this.txtCatagoryName = this.category.name;
    this.txtCategoryDescription =  this.category.description;
    this.passColor = this.category.color;
    this.categoryId = this.category.category_id;

    console.log(this.txtCatagoryName);
    // console.log(this.txtCategoryDescription);
    // console.log(this.passColor);
    // console.log(this.categoryId);
    console.log(this.filterList);

    for(var i =0; i<this.filterList.length; i++){
      if(this.filterList[i].toLowerCase() == this.category.name.toLowerCase()){
        this.filterList.splice(i, 1);
      }
    }

    for(var i = 0; i < this.circleArray.length; i++) {
      if(this.circleArray[i].passcolor == this.passColor){
        this.circleArray[i].checked = true;
        console.log(this.circleArray);
      }
    }
  }

  updateCategoryMethod(){
    console.log(this.filterList);
    if(this.filterList.includes(this.txtCatagoryName)){
      this.global.presentAlert('','Duplicate names are not allowed.','')
    } else{
      var updateJson ={};
      updateJson["name"]=this.txtCatagoryName;
      updateJson["description"]=this.txtCategoryDescription;
      updateJson["color"]=this.passColor;
      updateJson["enterprise_id"]=this.global.enterprisedId;
      updateJson["user_id"]=this.global.userId;
  
      console.log(updateJson);
  
      this.global.showLoading();
      
      this.apiService.updateCategory(this.categoryId,updateJson).subscribe((result)=>{
        this.global.hideLoading();
        console.log(result.body);
        this.modal.dismiss();
       },
       (error) =>{
        this.global.hideLoading();
        console.log(error);
       });

    }
  }

  clickMethod(item){
    console.log(item);
    console.log(item.name);
    this.passColor = item.passcolor;
    // console.log(item.currentTarget.checked);

    for(var i = 0; i < this.circleArray.length; i++) {
      if(this.circleArray[i].name == item.name){
        console.log(this.circleArray[i].name);
        console.log(this.circleArray[i].color);
        console.log(this.circleArray[i].passcolor);
        // this.passColor=this.circleArray[i].passcolor;
        // console.log(this.passColor);
        // this.circleArray[i].checked = true;
      }else{
        this.circleArray[i].checked = false;
      }

    }

  }

  closemodal(value){
    console.log(value);

    if(value == "SAVE"){
      console.log("clicked save method");
      this.updateCategoryMethod();
    }else{
      console.log("close modal");
      this.modal.dismiss();
    }
  }

}

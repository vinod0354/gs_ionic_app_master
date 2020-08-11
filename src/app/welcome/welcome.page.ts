import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GlobalsService } from '../services/globals.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private globals:GlobalsService, private storage:NativeStorage, private route:Router,private apiService:ApiServicesService) {
    this.storage.getItem('enterprisedId').then((result)=>{
      console.log(result);
      if(result){
        this.globals.enterprisedId = result;
      }
    });
    this.storage.getItem('userId').then((result)=>{
      console.log(result);
      if(result){
        this.globals.userId = result;
      }
    });
   }

  ngOnInit() {
    
  }

  goto_goals(){
    console.log("Go to goals hot clicked...");
    let navigationExtras = {
      queryParams: {
        special: 'goals'
      }
    };
    this.route.navigate(['/goalsobjective'], navigationExtras);
  }

  goto_objectives(){
    console.log("Go to Objectives hot clicked...");
    let navigationExtras = {
      queryParams: {
        special: 'objectives'
      }
    };
    this.route.navigate(['/goalsobjective'], navigationExtras);
  }


  goto_actions(){
    this.route.navigate(['/actions']);
  }

}

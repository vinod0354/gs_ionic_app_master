import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { GlobalsService } from './globals.service';
import { EventsService } from '../events.service';





@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private globals:GlobalsService, private events:EventsService, private platform: Platform, private global:GlobalsService, private storage: NativeStorage, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    await this.platform.ready().then(() => {
    });
    
    await this.storage.getItem('login').then(
      async (result) =>{
        if(result){
          // this.router.navigateByUrl('/welcome');
          await this.storage.getItem('getFullList').then(
            (result) =>{
              if(result.goalInfo.length != 0 || result.objInfo.length !=0){

                this.storage.getItem('userdeatils').then(data =>{
                  console.log('enterpriseid:',+data);
                  this.global.enterprisedId = data.user.enterprise_id;
                  this.global.userId = data.user.user_id;

                  this.events.publish('user:created', {
                    user: data
                  });

                },error=>{
                  console.log(error);
                });
                
            
                this.router.navigateByUrl('/goalsobjective');
              }else{
                this.router.navigateByUrl('/welcome');
              }
      
            },(error)=>{
              this.router.navigateByUrl('/welcome');
            }
          );
          // End
        }else{
          return true;
        }

      },(error)=>{
        return true;
      }
    );
    return true;
    console.log("Before Getting storage");
    
    
  }
}
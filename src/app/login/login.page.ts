import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { alertController } from '@ionic/core';
import { GlobalsService } from '../services/globals.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username ='';
  password ='';
  checkLengthGoal = [];
  checkLengthObjective = [];

  constructor(private storage:NativeStorage, private events:EventsService, private route:Router, private apiServcie:ApiServicesService, private global:GlobalsService, private globals:GlobalsService) { }

  ngOnInit() {

    this.storage.getItem('getFullList')
    .then(
      data => {
        console.log(data);
        this.checkLengthGoal = data.goalInfo;
        this.checkLengthObjective = data.objInfo;
      },
      error => {
        console.error(error)
      }
    );
  }

  login(){
    console.log(this.username)
    console.log(this.password)
    // this.global.enterprisedId = "1";
    // this.global.userId = "2";
    // this.route.navigate(['/welcome']);
      if (this.username != '' && this.password != '') {
        let userObj = {
          username: window.btoa(this.username),
          password: window.btoa(this.password)
        };
        console.log(userObj);
        this.global.showLoading();
        this.apiServcie.login(userObj).subscribe(
          (result) => {
            this.global.hideLoading();
            console.log(result);
            if(result.status == 200){
              let currentUser = result.body;
              console.log(currentUser.user);

              this.events.publish('user:created', {
                user: currentUser
              });

              this.global.enterprisedId = currentUser.user.enterprise_id;
              this.global.userId = currentUser.user.user_id;
              this.storage.setItem('enterprisedId', currentUser.user.enterprise_id);
              this.storage.setItem('userId', currentUser.user.user_id);
              this.storage.setItem('username', currentUser.user.user_name);
              this.storage.setItem('userdeatils', currentUser);
              localStorage.setItem('username', currentUser.user.user_name);
              this.storage.setItem('login', true);

              if(this.checkLengthGoal.length != 0 || this.checkLengthObjective.length != 0){
                this.route.navigate(['/goalsobjective']);
              }else if(currentUser.user.is_firsttime=='Y'){
                this.route.navigate(['/forgot-password']);
              }else{
                this.route.navigate(['/welcome']);
              }

            }else{
              this.global.presentAlert('Failed to Sign In','',' Please check your credentials and try again!');
              /* Need to do something else */
            }
          },
          (error) => {
            this.global.hideLoading();
            console.log('Error Block');
            console.log(error);
            this.global.presentAlert('Failed to Sign In','',' Please check your credentials and try again!');
          }
        );
  
      } else {
      }
  }

}

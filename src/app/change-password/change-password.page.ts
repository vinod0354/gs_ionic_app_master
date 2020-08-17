import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { EventsService } from '../events.service';
import { GlobalsService } from '../services/globals.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  current_password: string = null;
	new_password: string = null;
	confirm_password: string = null;
  username: any;

  constructor(private modal:ModalController, private route:Router, private apiServcie:ApiServicesService, private global:GlobalsService, private storage:NativeStorage, private alertController:AlertController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.username = localStorage.getItem('username');

    let cpwdObj = {
			"username": this.username,
			"oldPassword": this.current_password,
			"newPassword": this.new_password
    }
    
    this.apiServcie.changePassword(cpwdObj).subscribe((result) => {
      console.log(result.body);
      this.global.hideLoading();
      if(result.status == 200) {
        this.presentAlertConfirm();
      }
    })
    console.log(cpwdObj)
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Password Changed Successfully.',
      message: 'You will be redirected to login page.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'yes',
          handler: () => {
            console.log('Confirm Okay');
            this.storage.remove('login');
            this.storage.remove('userId');
            this.storage.remove('enterprisedId');
            this.route.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  closemodal(){
    this.route.navigate(['/welcome'])
  }

}

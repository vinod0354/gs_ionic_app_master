import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  resetpassword= {'username': ''};

  constructor(private route:Router, public alertcontroller:AlertController, private apiServcie:ApiServicesService) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertcontroller.create({
      header: 'Confirmation!',
      message: 'Password has been sent to registered E-mail address',
      buttons: ['Done'],
      cssClass: 'custom-modal',
      
    });
    await alert.present();
    let result=await alert.onDidDismiss();
    console.log(result);
    this.route.navigate(['/login']);
  }

  password(){
    this.apiServcie.forgotpassword(this.resetpassword.username)
    .subscribe((resData) => {
      console.log(resData);
      if(resData.status == 200){
        console.log(resData)
        this.presentAlert();
          // this.route.navigate(['/login']);
        
       }
    });
  }

}

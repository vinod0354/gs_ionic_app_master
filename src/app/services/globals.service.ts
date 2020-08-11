import { Injectable } from '@angular/core';
import { ApiServicesService } from './api-services.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  loader:HTMLIonLoadingElement;

  enterprisedId = '';
  userId = '';
  goal_type_id_profsnal = '';
  goal_type_id_persnal = '';

constructor(private loadingController:LoadingController, private alert:AlertController, private toast:ToastController) { 

}

async showLoading(options: any = {}) {
   this.loader = await this.loadingController.create(
    {
        message: 'Please wait...',
        // duration: 2000
        spinner:"lines",
        translucent: true,
        cssClass:'custom-loader-class',
        backdropDismiss: true
    });
  await this.loader.present();
}

async hideLoading() {
  const element = await this.loadingController.getTop();
    if(element){
      await this.loadingController.dismiss();
    }
}

async presentAlert(title,subtitle,message) {
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: title,
    subHeader: subtitle,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

async presentAlertConfirm() {
  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}


// async showLoading() {
//   const loading = await this.loading.create({
//     // message: 'Please wait...',
//     // duration: 2000
//     spinner:"lines",
//     translucent: true,
//     cssClass:'custom-loader-class',
//     // backdropDismiss: true
//   });
//   await loading.present();
// }


// async hideLoading(){
//   await this.loading.dismiss();
// }


async presentToast(msg) {
const toast = await this.toast.create({
  message: msg,
  duration: 2000
});
toast.present();
}



}




  

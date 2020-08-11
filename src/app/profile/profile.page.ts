import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GlobalsService } from '../services/globals.service';
import { ApiServicesService } from '../services/api-services.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EventsService } from '../events.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUserInfo:any;
  saveData:any;

  username='';   lastname='';
  firstname='';   email='';
  rolename='';    designation='';
  employeeid='';  phonenumber='';

  profilephoto:any;


  constructor( private storage:NativeStorage, private actionSheetController:ActionSheetController, private events:EventsService, private camera: Camera, private global:GlobalsService, private apiService:ApiServicesService) { 

    this.storage.getItem('userdeatils').then(data =>{

      this.saveData = data;
      this.currentUserInfo = data.user;
      this.username = this.currentUserInfo.user_name;
      this.firstname = this.currentUserInfo.firstname;
      this.lastname = this.currentUserInfo.lastname;
      this.email = this.currentUserInfo.email;

      this.rolename = this.currentUserInfo.role_name;
      this.designation = this.currentUserInfo.designation;
      this.employeeid = this.currentUserInfo.employee_id;
      this.phonenumber = this.currentUserInfo.phone_number;

      // Display profile photo
      if(this.currentUserInfo.profile_photo != null && this.currentUserInfo.profile_photo != '' && this.currentUserInfo.profile_photo != undefined){
        console.log("Profile data is there:");
        this.profilephoto = this.currentUserInfo.profile_photo;
      }else{
        console.log("No Image data:");
        this.profilephoto = "assets/icon/account.jpeg";
      }
    
    },error=>{
      console.log(error);
    });

  }

  ngOnInit() {
  }

  openCamera(){
    const options: CameraOptions = {
      // quality: 70,
      // destinationType: this.camera.DestinationType.DATA_URL,
      // sourceType : this.camera.PictureSourceType.CAMERA,
      // saveToPhotoAlbum: false
      quality: 100,
      targetWidth: 150,
			targetHeight: 150,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      sourceType : this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.profilephoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });

  }

  
  openGallery(){
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 150,
			targetHeight: 150,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camera.getPicture(options).then((imageData) => {
      
      this.profilephoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
    
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [ {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Camera clicked');
          this.openCamera();
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          console.log('Gallery clicked');
          this.openGallery();
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  saveProfileData(){
    var dict = {};

    dict["username"]  = this.username;
    dict["firstname"] = this.firstname;
    dict["lastname"]  = this.lastname;
    dict["email"] = this.email;
    dict["role_id"] = this.currentUserInfo.role_id;

    dict["enterprise_id"] = this.global.enterprisedId;
    dict["designation"] =  this.designation;
    dict["employee_id"] = this.employeeid;
    dict["phone_number"] =  this.phonenumber;
    dict["profile_photo"] =  this.profilephoto;


    console.log(dict);


    this.global.showLoading();
     this.apiService.updateUserProfile(this.global.userId,dict).subscribe((result)=>{
      this.global.hideLoading();

      console.log(this.saveData.user);
      if(result.status == 200){
        this.global.presentAlert("","Profile Updated Successfully","")
        // this.saveData.user.user_name = this.username;
        this.saveData.user.firstname = this.firstname;
        this.saveData.user.lastname = this.lastname;
        this.saveData.user.email = this.email;
        this.saveData.user.designation = this.designation;
        this.saveData.user.employee_id = this.employeeid;
        this.saveData.user.phone_number = this.phonenumber;
        this.saveData.user.profile_photo = this.profilephoto;

        console.log(this.saveData.user);
        console.log(this.saveData.user.phone_number);

        this.storage.setItem('userdeatils', this.saveData);

        this.events.publish('user:created', {
          user: this.saveData
        });

      }else{
        
      }
     },
     (error) =>{
      this.global.hideLoading();
      console.log(error);
     });
  

  }

}

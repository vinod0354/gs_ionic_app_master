import { Component, OnInit } from '@angular/core';

import { Platform, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { GlobalsService } from './services/globals.service';

import { EventsService } from './events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Actions',
      url: '/actions',
      icon: 'mail',
      subtitle: 'Create and complete towards yours Goals'
    },
    // {
    //   title: 'Goals',
    //   url: '/goals',
    //   icon: 'paper-plane'
    // },
    {
      title: 'Goals & Objectives',
      url: '/goalsobjective',
      icon: 'mail',
      subtitle: 'Set your targets'
    },
    {
      title: 'Categories',
      url: '/categgories',
      icon: 'paper-plane',
      subtitle: 'Define your focus areas'
    },
    {
      title: 'Guiding Principles',
      url: '/guiding-principles',
      icon: 'paper-plane',
      subtitle: 'Spot your North star'
    },
    {
      title: 'Compass',
      url: '/compass',
      icon: 'paper-plane',
      subtitle: 'See where you are heading and course correct'
    },
    {
      title: 'Pulse',
      url: '/pulse',
      icon: 'paper-plane',
      subtitle: 'Quick goal health check'
    },
    {
      title: 'Progress Tracker',
      url: '/progress-tracker',
      icon: 'paper-plane',
      subtitle: 'See where you are heading and course correct'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'paper-plane'
    },
    // {
    //   title: 'Progress Monitoring',
    //   // url: '/progressmonitoring',
    //   icon: 'paper-plane'
    // },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'paper-plane'
    },
    {
      title: 'Logout',
      // url: '/logout',
      icon: 'paper-plane'
    }
  ];

  public displayName = '';
  public username = '';
  public profilephoto = '';
  
  constructor(
    private platform: Platform,
    private alertController:AlertController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl:MenuController,
    private storage:NativeStorage, private route :Router, private globals:GlobalsService, private events:EventsService
  ) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();

			// let status bar overlay webview
			//this.statusBar.overlaysWebView(true);

			if (this.platform.is('android')) {
				this.statusBar.backgroundColorByHexString('#000000');
				this.statusBar.styleLightContent();
      }
      
      this.splashScreen.hide();

      this.events.subscribe('user:created', (data: any) => {
        console.log(data.user.user.user_name);
        console.log(data.user.user.profile_photo);

        console.log('Welcome: Mr.', data.user.user.user_name);

        console.log('User Daetails');
        console.log(data.user);

        this.username = data.user.user.user_name;

        this.displayName = data.user.user.firstname + ' ' + data.user.user.lastname;

            if(data.user.user.profile_photo != null && data.user.user.profile_photo != '' && data.user.user.profile_photo != undefined){
              console.log('Came here for profile 1');

              this.profilephoto = data.user.user.profile_photo;
              console.log(this.profilephoto);
            }else{
              console.log('Came here for profile 2');
              this.profilephoto = "assets/icon/account.jpeg";
              console.log(this.profilephoto);
            }
    });

    });
  }

  closeMenu(){
    this.menuCtrl.close();
    // this.menuCtrl.enable(false);
  }

  async clickedItem(p){
  console.log('Cliked item');
  console.log(p);
    if(p.title == 'Logout'){
      this.presentAlertConfirm();
    }

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Logout!',
      message: 'Do you want to logout?',
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

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
  ionViewDidLeave(){
    this.menuCtrl.open();

    // this.menuCtrl.enable(true);
  }

}

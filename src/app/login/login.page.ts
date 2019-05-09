import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../entities/user';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel:User=new User();
  constructor(public alertCtrl:AlertController,public navCtrl: NavController) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginThisUser(){
    console.log(this.loginModel);
    if(this.loginModel.username=='ahmet' && this.loginModel.password=='1'){
      
      const animationsOptions = {
        animation: 'android-transition',
        duration: 2000,
        direction: 'next'
  
      }
  
      this.navCtrl.navigateForward('home');

    }
    else{
      
    }
  
  }

  goToRegister(){
    this.navCtrl.navigateForward('register');
  }

  ngOnInit() {
  }

}

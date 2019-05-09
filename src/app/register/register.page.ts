import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerModel:User=new User();
  constructor(public navCtrl: NavController) {
 
  }

  createUser(){
    if(this.registerModel.username!='' && this.registerModel.password!=''  && this.registerModel.email!=''){
      
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

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateForward('login')
  }

}

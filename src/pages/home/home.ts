import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AgeValidator } from  '../../validators/age';
//import { UsernameValidator } from  '../../validators/username';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
   
  }

  login(){
      this.navCtrl.push("LoginPage");

}

register(){
  this.navCtrl.push("RegisterPage");
}
  }

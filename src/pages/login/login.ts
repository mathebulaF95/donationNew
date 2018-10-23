import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formgroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
  
  this.formgroup = formbuilder.group({
     email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
     password: ['', Validators.compose([Validators.minLength(6)])]
  });

  this.email = this.formgroup.controls['email'];
  this.password = this.formgroup.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
  }

  
  logIn({value, valid}:{value:any,valid}){
    firebase.auth().signInWithEmailAndPassword(value.email,value.password).then(User =>{
      this.navCtrl.push("DonationPage")
      console.log("You are in...")
       
     })
     console.log(value.email)
   }
 
   forget(){
    this.navCtrl.push("ForgetPasswordPage");
   }
}

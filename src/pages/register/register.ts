import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare var firebase;

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  formgroup:FormGroup;
  name:AbstractControl;
  email:AbstractControl;  
  password:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
    this.formgroup = formbuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([Validators.minLength(6)])]
   });
 
   this.name = this.formgroup.controls['name'];
   this.email = this.formgroup.controls['email'];
   this.password = this.formgroup.controls['password'];
   }
 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  submit({value, valid}:{value:any,valid}){
    firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(User =>{
      this.navCtrl.push("DonationPage");
       
   })
console.log(value.email)
  }
}

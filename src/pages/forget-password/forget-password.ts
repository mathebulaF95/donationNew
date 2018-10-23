import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  formgroup:FormGroup;
  resetPassword:AbstractControl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
    this.formgroup = formbuilder.group({
      resetPassword: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
  }

  Reset({value, valid}:{value:any,valid}){
    var auth = firebase.auth();
    var emailAddress = value.resetPassword;
     auth.sendPasswordResetEmail(emailAddress).then(function() {
     }).catch(function(error) {
     });
 this.navCtrl.push("LoginPage");
 console.log(value.resetPassword)
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  userDataSignUp:any = ""
  userDataSignIn:any = ""
  constructor(
    private auth: AngularFireAuth,
  ) { }
 
  async authManager(item:string,params:any){
    switch (item) {
      case "SignUp":
        return await this.SignUp(params);
      case "SignIn":
        return await this.SignIn(params)
      default:
        return null;
    }
  }

  // Sign up with email/password
  async SignUp(params:any) {
    let email:string = params.account.email
    let password:string = params.account.password
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        // console.log(result.user);
        this.userDataSignUp = result
      })
      .catch((error) => {
        window.alert(error.message);
      });
    return this.userDataSignUp
  }
  // Sign in with email/password
  async SignIn(params:any) {
    let email:string = params.account.email
    let password:string = params.account.password
    await this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result);
        this.userDataSignIn = result

      })
      .catch((error) => {
        window.alert(error.message);
      });
    return this.userDataSignIn
  }
} 

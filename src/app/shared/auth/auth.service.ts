import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router:Router, public afAuth:AngularFireAuth) { }

  register(user:any){

      console.log(user.value.nombre);
      firebase.auth().createUserWithEmailAndPassword(user.value.email, user.value.password)
      .then(res => {
        this.router.navigate(['/login']);
      }, err => console.log(err))
  }

  login( email:string, password:string ){

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then((res) => {

      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((res) =>{
        
        this.router.navigate(['/dashboard']);
      
      }, (err) => console.log(err));

    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['login']);
  }
  
  get authenticated(): boolean {
    return firebase.auth().currentUser !== null;
  }

  get currentUserObservable(): any {
    return firebase.auth().currentUser;
  }


}

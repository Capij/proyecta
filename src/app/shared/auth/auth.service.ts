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


      console.log(user);
      console.log(user.email);
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        this.router.navigate(['/login']);
      }, err => console.log(err))
  

  
  }

  login( email:string, password:string ){


      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        this.router.navigate(['/dashboard']);
      }, err=> console.log(err))




  }

  logout(){
    this.afAuth.auth.signOut();
  }
}

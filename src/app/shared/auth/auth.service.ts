import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router ) { }

  register(user:any){
  
    console.log(user);
  
  }

  login( email:string, password:string ){
    
    this.router.navigate(['/dashboard']);

  }

  signIn(){
    
    console.log(" salida ");
    this.router.navigate(['login']);
  }
}

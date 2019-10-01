import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private router:Router , private afs: AngularFirestore) { }

  
}

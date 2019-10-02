import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectModel } from '../../../models/proyecto.model'
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private router:Router , private afs: AngularFirestore) { }

  saveProject(project: ProjectModel ){
    this.afs.collection('projects').add(project);
  }

  

}

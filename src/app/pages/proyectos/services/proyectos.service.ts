import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { ProjectModel } from '../../../models/proyecto.model'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //items: Observable<ProjectModel[]>
  private ProjectConllection: AngularFirestoreCollection<ProjectModel>;

  constructor(private router:Router , private afs: AngularFirestore) { }

  getProjects(uid:string): Observable<ProjectModel[]>{
    return this.afs.collection('projects', ref => ref.where('uid','==', uid) ).snapshotChanges()
    .pipe(
      map((doc)=>{
        return doc.map((ele) =>{
          return {
            id: ele.payload.doc.id,
            ...ele.payload.doc.data()
          }
        }) as ProjectModel[];
      })
    )
  }
  saveProject(project: ProjectModel ){
    return this.afs.collection('projects').add(project);
  }

  updateProject(project:ProjectModel){
    if(project.id){
      return this.afs.doc<ProjectModel>(`projects/${project.id}`).update(project);
    }else{
      throw Error('No cuenta con id')
    }

  }

  deletedProject(project: ProjectModel){
    return this.afs.doc(`projects/${project.id}`).delete();
  }

  /////////////////////Proyecto tablero//////////////////////////////////

  getProject(id:string): Observable<ProjectModel>{
    return this.afs.collection('projects').doc(id).snapshotChanges()
  }

}

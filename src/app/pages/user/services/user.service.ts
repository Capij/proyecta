import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getMembersUsers(uid:string): Observable<UserModel[]>{

    return this.afs.collection('users', ref => ref.where('uid','>', uid).where('uid','<', uid) ).snapshotChanges()
    .pipe(
      map((doc)=>{
        return doc.map((ele) =>{
          return {
            id: ele.payload.doc.id,
            ...ele.payload.doc.data()
          }
        }) as UserModel[];
      })
    )



  }

}

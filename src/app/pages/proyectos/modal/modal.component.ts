import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl ,Validators } from '@angular/forms'
import { ProjectModel, MemberModel } from '../../../models/proyecto.model'
import { AuthService } from '../../../shared/auth/auth.service'

export interface typeTime {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  project: ProjectModel;
  member: MemberModel[] = [];

  typeTimes: typeTime[] = [
    {value: 1, viewValue: 'Horas'},
    {value: 2, viewValue: 'Semanas'},
    {value: 3, viewValue: 'Meses'}

  ];

  createFromGroup(){

    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      typeTime: new FormControl('', [Validators.required]),
      projectTime: new FormControl('',[Validators.required])
    });

  }

  fromNewProyects: FormGroup;

  uid :string;

  constructor(public auth: AuthService) {
    
    this.auth.currentUserObservable.subscribe((user) => {
      //console.log('Active User: ', user);
      this.uid = user.uid;
      //console.log(this.uid);
    });

    this.fromNewProyects = this.createFromGroup();
    this.project = new ProjectModel();


  }

  ngOnInit() {  }

  onSave(){
    if(this.fromNewProyects.valid){

      //console.log(this.fromNewProyects.value.typeTime);
      let myTimestamp = Date.now();
      this.project.timestamp = new Date(myTimestamp);
      this.project.uid = this.uid;
  
      let member = new MemberModel();
      member.id = this.uid;
      member.name= "Emmanuel";
      console.log(member);
      //this.project.members.push(this.member);
      this.project.members.push(member);
      console.log(this.project);
      console.log("nueco");
      console.log(this.fromNewProyects);
    }else{
      console.log("no entro");
    }

  }

}

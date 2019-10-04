import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms'
import { ProjectModel, MemberModel } from '../../../models/proyecto.model'
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../shared/auth/auth.service'
import { UserService } from '../../user/services/user.service'
import { ProyectosService } from '../../proyectos/services/proyectos.service'
import { Observable } from 'rxjs';

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

  @Input() project: ProjectModel; 
  @Input() newProject =  true;
  @Output() save =  new EventEmitter();
  stop = false;


  members : Observable<UserModel[]>;
  member: MemberModel[] = [];


  typeTimes: typeTime[] = [
    {value: 1, viewValue: 'Horas'},
    {value: 2, viewValue: 'Semanas'},
    {value: 3, viewValue: 'Meses'}

  ];

  fromNewProyects =  new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    typeTime: new FormControl('', [Validators.required]),
    projectTime: new FormControl('',[Validators.required]),
    desc: new FormControl(''),
    members: new FormControl([''])
  });


  uid :string;

  constructor(public auth: AuthService, public us: UserService, public ps: ProyectosService) {
    
    this.auth.currentUserObservable.subscribe((res) => {
      this.uid = res.uid;
      this.members = this.us.getMembersUsers(res.uid);
    });



  }

  ngOnInit() {
    if(this.project){
      this.fromNewProyects.patchValue(this.project);
    }
  }

  onSave(){  
    this.stop = true;
    if(this.fromNewProyects.valid){
      if(!this.newProject && this.project){
        const projectUpdated ={
          id: this.project.id,
          ...this.fromNewProyects.value
        };
        this.ps.updateProject(projectUpdated)
        .then(() => this.save.emit(projectUpdated))
        .catch((err) => console.log(err));

      }else{
        //console.log(this.fromNewProyects.value.typeTime)
        this.fromNewProyects.value.timestamp = Date.now();
        this.fromNewProyects.value.uid = this.uid;

        this.ps.saveProject(this.fromNewProyects.value)
        .then((res)=>{this.save.emit(res)})
        .catch((err)=> console.log(err));
      
      }

    }else{
      console.log("no entro");
    }

  }

}

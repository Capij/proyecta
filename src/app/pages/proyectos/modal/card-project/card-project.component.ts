import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { ProjectModel } from '../../../../models/proyecto.model';
import { ModalComponent } from '../modal.component';
import { take } from 'rxjs/operators';
import { ProyectosService } from '../../services/proyectos.service';
import { DeletedComponent } from '../../modal/deleted/deleted.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() projectInfo: ProjectModel;
  dialogRef: MatDialogRef<ModalComponent>;
  dialogDRef: MatDialogRef<DeletedComponent>;

  constructor(private dialog: MatDialog, private ps: ProyectosService, private router: Router) { }

  ngOnInit() {
  }

  editProject(){
    if(this.projectInfo){
      this.dialogRef =  this.dialog.open(ModalComponent,{
        width: '500px'
      });
      this.dialogRef.componentInstance.project = this.projectInfo;
      this.dialogRef.componentInstance.newProject =  false;
      this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) =>{
        if(projectDocRef){
          this.dialogRef.close();
        }
      })
    }
  }


  onDeleted(){
    if(this.projectInfo){
      this.dialogDRef =  this.dialog.open(DeletedComponent,{
        width: '500px'
      });
      this.dialogDRef.componentInstance.project = this.projectInfo;
      this.dialogDRef.componentInstance.delete.pipe(take(1)).subscribe((projectDocRef)=>{
        if(projectDocRef){
          this.dialogDRef.close();
        }
      });
    }

  }

  viewProject(){
    if(this.projectInfo){
        this.router.navigate(['/projects/'+this.projectInfo.id]);
    }
  }

}

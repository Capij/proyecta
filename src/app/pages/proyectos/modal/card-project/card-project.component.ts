import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material';
import { ProjectModel } from '../../../../models/proyecto.model'
import { ModalComponent } from '../modal.component'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  @Input() projectInfo: ProjectModel;
  dialogRef: MatDialogRef<ModalComponent>;

  constructor(private dialog: MatDialog) { }

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


}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../proyectos/modal/modal.component'
import { ProjectModel } from '../../models/proyecto.model'
import { ProyectosService } from './services/proyectos.service'
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  items: Observable<ProjectModel[]>;
  dialogRef: MatDialogRef<ModalComponent>;

  constructor(private dialog:MatDialog, private ps: ProyectosService) { }

  ngOnInit() {
    
    this.items = this.ps.getProjects();

  }
  addProyect(): void{
    this.dialogRef =  this.dialog.open(ModalComponent,{
      width: '500px'
    });

    this.dialogRef.componentInstance.save.pipe(take(1)).subscribe((projectDocRef) => {
      if(projectDocRef){
        this.dialogRef.close();
      }

    });

  }


}

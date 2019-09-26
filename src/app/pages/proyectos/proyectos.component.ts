import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../proyectos/modal/modal.component'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  addProyect(): void{
    const dialogRef =  this.dialog.open(ModalComponent,{
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('cerrado');

    });

  }

}

import { Component, OnInit, Input,Output , EventEmitter } from '@angular/core';
import { ProjectModel } from '../../../../models/proyecto.model';
import { ProyectosService } from '../../services/proyectos.service';
@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  @Input() project: ProjectModel; 
  @Output() delete = new EventEmitter();

  constructor(private ps: ProyectosService) { }

  ngOnInit() {
  }

  onDeleted(){
    
    this.ps.deletedProject(this.project)
           .then(()=> { this.delete.emit(this.project)})
           .catch((res)=>{
             console.log(res);
           });

  }

}

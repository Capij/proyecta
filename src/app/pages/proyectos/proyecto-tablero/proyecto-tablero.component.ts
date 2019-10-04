import { Component, OnInit, Input} from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectModel } from '../../../models/proyecto.model';

@Component({
  selector: 'app-proyecto-tablero',
  templateUrl: './proyecto-tablero.component.html',
  styleUrls: ['./proyecto-tablero.component.css']
})
export class ProyectoTableroComponent implements OnInit {

  projectId:string;

  project: ProjectModel;

  constructor(private ps: ProyectosService ,private aRouter: ActivatedRoute) {

      this.projectId = this.aRouter.snapshot.paramMap.get('id');
      this.ps.getProject(this.aRouter.snapshot.paramMap.get('id'));



  }

  ngOnInit() {
  }

}

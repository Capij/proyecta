import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  createFromGroup(){

    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      timeProject: new FormControl('', [Validators.required ])
    });

  }

  fromNewProyects: FormGroup;

  constructor() {
    
    this.fromNewProyects = this.createFromGroup();

  }

  ngOnInit() {
  }

}

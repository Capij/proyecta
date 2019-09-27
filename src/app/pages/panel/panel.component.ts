import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public auth: AuthService) {
    
    console.log(this.auth.currentUserObservable);
    
  }

  ngOnInit() {
  }

}

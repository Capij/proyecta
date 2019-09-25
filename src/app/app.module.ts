import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MatMenuModule, MatDialogModule,MatInputModule,MatFormFieldModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/auth/login/login.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { ResetComponent } from './shared/auth/reset/reset.component';
import { PanelComponent } from './pages/panel/panel.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    ResetComponent,
    PanelComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES ),

    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

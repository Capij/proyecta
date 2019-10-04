import { Routes } from '@angular/router';
import { RegisterComponent } from './shared/auth/register/register.component'
import { LoginComponent } from './shared/auth/login/login.component'
import { ResetComponent } from './shared/auth/reset/reset.component';
import { PanelComponent } from './pages/panel/panel.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AuthGuard } from './shared/guard/auth.guard'
import { ProyectoTableroComponent } from './pages/proyectos/proyecto-tablero/proyecto-tablero.component';
export const ROUTES: Routes = 
[

    { path: 'dashboard', component: PanelComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProyectosComponent, canActivate: [AuthGuard] },
    { path: 'projects/:id', component: ProyectoTableroComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'password_reset', component: ResetComponent},
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }

]
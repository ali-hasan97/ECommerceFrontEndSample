import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', component: HomeComponent, canActivate: [AuthGuardService]},
{path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
{path: 'register', component: RegisterComponent},
{path: 'about', component: AboutComponent, canActivate: [AuthGuardService]},
{path: 'detailed-view', component: DetailedViewComponent, canActivate: [AuthGuardService]},
{path: 'contact', component: ContactComponent, canActivate: [AuthGuardService]},
{path: 'logout', component: LogoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

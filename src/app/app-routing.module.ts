import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserServiceService } from './user-service.service';

const routes: Routes = [
  {path:'loginpage', component:LoginPageComponent},
  {path:'registerpage', component:RegisterPageComponent},
  {path:'userpage', component:UserPageComponent, canActivate:[UserServiceService]},
  {path:'', component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

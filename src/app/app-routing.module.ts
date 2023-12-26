import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

const routes: Routes = [
  {path:'employeelist', component:EmployeeListComponent},
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'updateemployee/:id', component:UpdateEmployeeComponent},
  {path:'login-signup', component:LoginSignupComponent},
  {path:'', redirectTo:'login-signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

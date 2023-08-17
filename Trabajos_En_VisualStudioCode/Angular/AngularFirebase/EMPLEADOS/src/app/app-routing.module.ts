import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

const routes: Routes = [
{path: '', component:ListEmployeeComponent,pathMatch:'full'},
{path:'list-employee', component:ListEmployeeComponent},
{path:'list-employee', component:CreateEmployeeComponent},
{path:'**',component:ListEmployeeComponent,pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

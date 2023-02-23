import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireStudentComponent } from './formulaire-student/formulaire-student.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';


import { StudentsComponent } from './students.component';

const routes: Routes = [{ path: '', component: StudentsComponent,children:[
{path:'register',component:FormulaireStudentComponent},
{path:'listStudent',component:ShowstudentsComponent}
] }];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

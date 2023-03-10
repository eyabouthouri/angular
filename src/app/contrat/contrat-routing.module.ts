import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [{ path: '', component: ContratComponent , children:[
  {path:'listcontrat', component:ListContratComponent },
  {path:'addcontrat', component:AddContratComponent},
  {path:'updatecontrat/:id', component: AddContratComponent}
  
] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }

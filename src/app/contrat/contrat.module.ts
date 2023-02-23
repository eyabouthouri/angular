import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    ContratComponent,
    AddContratComponent,
    ListContratComponent,
    PdfComponent

  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
     
  ]
})
export class ContratModule { }

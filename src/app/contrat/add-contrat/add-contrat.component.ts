import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { Router ,ActivatedRoute} from '@angular/router';
import { ContratService } from 'src/app/core/services/contrat.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Specialite } from 'src/app/core/model/specialite';
import {Student} from'src/app/core/model/students';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {


  enum: typeof Specialite = Specialite;
  val:String = this.enum.IA;
  public listOfStudents : Student;
  public contrat: Contrat;
  public action:string;
  public listOfSpecialities: Specialite;
  public x =null;
  constructor( private contratservice:ContratService ,
   private route: Router, private currentRoute:ActivatedRoute) { }
   keys = Object.keys;
   Specialite =Specialite ;
   ;
  ngOnInit():  void { 



     let id=this.currentRoute.snapshot.params['id'];
     
  if(id!=null){
    this.action='Update'
    this.contratservice.getContratById(id).subscribe(
      (data: Contrat)=>{this.contrat=data}
    )
  }else{
    this.action='Add new'

    this.contrat=new Contrat();

  }

  //console.log(this.foods.map((x)=>x.viewValue))
//console.log(this.listOfSpecialities.valueOf)

//console.log(this.enum.IA);
//console.log(this.enum);
console.log("student:",this.listOfStudents.nom);
}



onClickEnum() {
  this.val =
    this.val === this.enum.IA ?this.enum.RESEAUX : this.enum.IA;
}

  saveContrat(){  
     if(this.action="Update"){
    this.contratservice.updateContrat(this.contrat).subscribe(
      ()=>this.route.navigate(['contrat/listcontrat']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}

    )
  }
    
    this.contratservice.addContrat(this.contrat).subscribe(()=>this.route.navigate(['contrat/listcontrat']),()=>{console.log('error'),
    ()=>{console.log('complete')}}
)
  }
  
  change(value: string) {
    this.x = this[value];
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Contrat } from '../model/contrat';


@Injectable({
  providedIn: 'root'
})
export class ContratService {
  readonly API_URL = 'http://localhost:8081/contrat'

    data:any
  constructor(private HttpClient:HttpClient) { }
  getcontrat(){
  return this.HttpClient.get("http://localhost:8081/getcontrat");
}
getStudent(){
 return this.HttpClient.get("http://localhost:8081/getetudiant") 
}
 addContrat(c :Contrat){
  return this.HttpClient.post("http://localhost:8081/addcontrat",c);
} 


deleteContrat(id:number){
  return this.HttpClient.delete("http://localhost:8081/deletecontrat/"+id)
}
updateContrat(c:Contrat){
  return this.HttpClient.put("http://localhost:8081/updatecontrat/"+c.idContrat,c)
}
getContratById(id:number){
  return this.HttpClient.get("http://localhost:8081/getonecontrat/"+id)
}

}

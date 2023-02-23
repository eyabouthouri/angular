import { Component, OnInit } from '@angular/core';
import { ContratService } from '../core/services/contrat.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}

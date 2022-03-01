import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import {Router} from '@angular/router'
import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { 
      
    }

  ngOnInit(): void {
   
   
  }
 
}

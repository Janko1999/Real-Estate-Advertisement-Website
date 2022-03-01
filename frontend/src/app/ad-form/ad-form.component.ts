import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../models/Ad';
import { City } from '../models/City';
import { Microlocation } from '../models/Microlocation';
import { Street } from '../models/Street';
import { User } from '../models/User';
import { RegistrationService } from '../services/registration.service';
import { SalesmanServiceService } from '../services/salesman-service.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  constructor(private salesmanService:SalesmanServiceService, private resgisterService:RegistrationService) {  this.ad=this.salesmanService.selectedAd; }

  ngOnInit(): void {
    
    this.naziv=this.ad.naziv;
    this.salesmanService.getStreets().subscribe((streets:Street[])=>{
      this.streets=streets;
    
        this.salesmanService.getMicrolocations().subscribe((microlocations:Microlocation[])=>{
          this.microlocations=microlocations;
        
          this.salesmanService.getCities().subscribe((cities:City[])=>{
            this.cities=cities;
            this.cities.forEach(city => {
              if(city.name==this.ad.city){
                this.states=city.states;
              }
            });
            
          })
        })
       
      })
  }
streets=[];
cities=[];
microlocations=[];
states=[];
 ad:Ad;
naziv:string;
error:string="";
getStates(){
  this.cities.forEach(city => {
    if(city.name==this.ad.city){
      this.states=city.states;
    }
  });
}
 change(){
   let currentTime=new Date();
   currentTime.setTime(new Date().getTime());
   let currentMinutes=currentTime.getTime()/(1000*60);
    this.error="";
   this.resgisterService.findUser(sessionStorage.getItem("user")).subscribe((user:User)=>{
     let diff=+currentMinutes-(+user.time);
      if(user.time=="0" || diff>=60){
        if(this.ad.city==null)
          this.ad.city=this.salesmanService.selectedAd.city;
          if(this.ad.state==null)
          this.ad.state=this.salesmanService.selectedAd.state;
          if(this.ad.microlocation==null)
          this.ad.microlocation=this.salesmanService.selectedAd.microlocation;
          if(this.ad.street==null)
          this.ad.street=this.salesmanService.selectedAd.street;
        this.salesmanService.changeAd(this.ad, this.naziv).subscribe((ad:Ad)=>{
          this.resgisterService.changeTime(currentMinutes+"").subscribe((user:User)=>{

          })
        })
      }else{
        this.error="Vec ste vrsili promenu u prethodnih sat vremena";
      }
   })
   
 }

}

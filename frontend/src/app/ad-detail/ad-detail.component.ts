import { Component, Input, OnInit } from '@angular/core';
import { Ad } from '../models/Ad';
import { Agency } from '../models/Agency';
import { User } from '../models/User';
import { AdDetailService } from '../services/ad-detail.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.css']
})
export class AdDetailComponent implements OnInit {

  constructor(private adDetailSerive:AdDetailService,private registerService:RegistrationService) { }
   ad:Ad;
   agency:Agency=null;
   user:User;
   agencyFlag:boolean=false;
   oglasivac:string="";
   flag:boolean=false;
   parking:string="";
  ngOnInit(): void {

    this.ad=this.adDetailSerive.ad;
    if(this.ad.agency)
    this.oglasivac="Agencija";
    else
    this.oglasivac="Vlasnik"; 
    if(this.ad.parking)
    this.parking="DA"
    else this.parking="NE";
    this.registerService.findUser(this.ad.username).subscribe((user:User)=>{
      this.user=user;
      if(this.user.agency!=""){
        
        this.agencyFlag=true;
        this.adDetailSerive.getAgency(this.user.agency).subscribe((agency:Agency)=>{
          this.agency=agency;
          
        })
      }
    })
    
    
  }

  addToFavourites(){
    let username=sessionStorage.getItem("user");
    this.registerService.findUser(username).subscribe((user:User)=>{
      if(user.favCount<=5){
        this.adDetailSerive.incrementFavourites().subscribe((user:User)=>{
          this.adDetailSerive.addToFavourites(username, this.ad).subscribe((favourite)=>{

          })
        })
      }else{
        alert("Vec imate 5 omiljenih Oglasa");
      }
    })
    
  }


  phoneNumber(){
    if(this.flag)
    this.flag=false;
    else
    this.flag=true;
  }

}

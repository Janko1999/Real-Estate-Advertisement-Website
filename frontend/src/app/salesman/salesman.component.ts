import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GraficoModel} from "../models/graficco.model";


import { Ad } from '../models/Ad';
import { Agency } from '../models/Agency';
import { User } from '../models/User';
import { AdminService } from '../services/admin.service';
import { RegistrationService } from '../services/registration.service';
import { SalesmanServiceService } from '../services/salesman-service.service';
import { Street } from '../models/Street';
import {Microlocation} from '../models/Microlocation'
import {City} from '../models/City'

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  constructor(private salesmanService:SalesmanServiceService, private router:Router, 
    private adminService:AdminService, private registrationService:RegistrationService) { }
    public primaryXAxis: Object;
    public chartData: Object[];
    public Ads: Array<GraficoModel>;
    flag:boolean;
    streets=[];
    cities=[];
    states=[];
    microlocations=[];
    user:User;
    oldEmail:string;
    getStates(){
      this.cities.forEach(city => {
        if(city.name==this.city){
          this.states=city.states;
        }
      });
    }
    ngOnInit(): void {
      if(sessionStorage.getItem("user")==null){
        this.router.navigate(['/']);

      }
      else{
     
      this.salesmanService.getStreets().subscribe((streets:Street[])=>{
        this.streets=streets;
      })
      this.salesmanService.getMicrolocations().subscribe((microlocations:Microlocation[])=>{
        this.microlocations=microlocations;
      })
      this.salesmanService.getCities().subscribe((cities:City[])=>{
        this.cities=cities;
      })
      this.registrationService.findUser(sessionStorage.getItem("user")).subscribe((user:User)=>{
        this.user=user;
        this.oldEmail=this.user.email;
        if(user.agency!=""){
          this.flag=true;
        this.salesmanService.getAdsByAgency(user.agency).subscribe((ads:Ad[])=>{
          let jan=ads.filter(ad=>ad.soldMonth=="1").length;
          let feb=ads.filter(ad=>ad.soldMonth=="2").length;
          let mar=ads.filter(ad=>ad.soldMonth=="3").length;
          let apr=ads.filter(ad=>ad.soldMonth=="4").length;
          let may=ads.filter(ad=>ad.soldMonth=="5").length;
          let jun=ads.filter(ad=>ad.soldMonth=="6").length;
          let jul=ads.filter(ad=>ad.soldMonth=="7").length;
          let aug=ads.filter(ad=>ad.soldMonth=="8").length;
          let sept=ads.filter(ad=>ad.soldMonth=="9").length;
          let oct=ads.filter(ad=>ad.soldMonth=="10").length;
          let nov=ads.filter(ad=>ad.soldMonth=="11").length;
          let dec=ads.filter(ad=>ad.soldMonth=="12").length;
          this.Ads = [
            { Legend: 'Jan', Value: jan, Size:'' }, { Legend: 'Feb', Value: feb, Size:'' },
            { Legend: 'Mar', Value: mar, Size:'' }, { Legend: 'Apr', Value: apr, Size:'' },
            { Legend: 'May', Value: may , Size:''}, { Legend: 'Jun', Value: jun , Size:''},
            { Legend: 'Jul', Value: jul , Size:''}, { Legend: 'Aug', Value: aug , Size:''},
            { Legend: 'Sep', Value: sept, Size:'' }, { Legend: 'Oct', Value: oct, Size:''},
            { Legend: 'Nov', Value: nov, Size:'' }, { Legend: 'Dec', Value: dec, Size:'' }
          ];
         
        })
      }else{
        this.flag=false;
        this.salesmanService.getSoldAds().subscribe((ads:Ad[])=>{
          let jan=ads.filter(ad=>ad.soldMonth=="1").length;
          let feb=ads.filter(ad=>ad.soldMonth=="2").length;
          let mar=ads.filter(ad=>ad.soldMonth=="3").length;
          let apr=ads.filter(ad=>ad.soldMonth=="4").length;
          let may=ads.filter(ad=>ad.soldMonth=="5").length;
          let jun=ads.filter(ad=>ad.soldMonth=="6").length;
          let jul=ads.filter(ad=>ad.soldMonth=="7").length;
          let aug=ads.filter(ad=>ad.soldMonth=="8").length;
          let sept=ads.filter(ad=>ad.soldMonth=="9").length;
          let oct=ads.filter(ad=>ad.soldMonth=="10").length;
          let nov=ads.filter(ad=>ad.soldMonth=="11").length;
          let dec=ads.filter(ad=>ad.soldMonth=="12").length;
          this.Ads = [
            { Legend: 'Jan', Value: jan, Size:'' }, { Legend: 'Feb', Value: feb, Size:'' },
            { Legend: 'Mar', Value: mar, Size:'' }, { Legend: 'Apr', Value: apr, Size:'' },
            { Legend: 'May', Value: may , Size:''}, { Legend: 'Jun', Value: jun , Size:''},
            { Legend: 'Jul', Value: jul , Size:''}, { Legend: 'Aug', Value: aug , Size:''},
            { Legend: 'Sep', Value: sept, Size:'' }, { Legend: 'Oct', Value: oct, Size:''},
            { Legend: 'Nov', Value: nov, Size:'' }, { Legend: 'Dec', Value: dec, Size:'' }
          ];
         
        })

      }
      })
    
      this.primaryXAxis = {
        valueType: 'Category'
      };
      this.username=sessionStorage.getItem("user");
      this.salesmanService.getMyAds(this.username).subscribe((ads:Ad[])=>{
        this.myAds=ads;
      });
      this.adminService.getAgencies().subscribe((agencies:Agency[])=>{
        if(agencies)
        this.agencies=agencies;
        
      })
      this.myAdsF=true;
      this.adminService.getLocations().subscribe((locations:Location[])=>{
        this.locations=locations;
      })
    }
  }
  
      title = 'Bar chart with Angular';
    
    
    
  
  locations=[];
  images = [];
  length:number=0;
  rezije:string="";
  agencies:Agency[]
  fileToUpload: File | null = null;
  username:string;
  newAdF:boolean=false;
 
  tip:string="";
  sprat:string="";
  ukupnoSpratova:string="";
  opis:string="";
  cena:string="";
  grejanje:string="";
  balkon:boolean=false;
  terasa:boolean=false;
  lodja:boolean=false;
  klima:boolean=false;
  parking:boolean=false;
  lift:boolean=false;
  sobe:string="";
  povrsina:string="";
  stanje:string="";
  podrum:boolean=false;
  garaza:boolean=false;
  internet:boolean=false;
  interfon:boolean=false;
  telefon:boolean=false;
  basta:boolean=false;
  allFields:string="";
  myAds:Ad[];
  godina:string="";
  newPhoneNumber:string="";
  newEmail:string="";
  newAgency:string="";
  emailError:string="";
  nalogF:boolean=false;
  busLines=[];
  city:string="";
  state:string="";
  microlocation="";
  street:string="";
  displayedColumns: string[] = [ "Naziv","Cena", "Izmeni","Prodaj"];


  newPassword:string="";
  newPasswordAgain:string="";
  oldPassword:string="";
  newPasswordError:string="";
  oldPasswordError:string="";
  againPasswordError:string="";

  newPass(){
    this.newPasswordError="";
    this.oldPasswordError="";
    this.againPasswordError="";
    this.registrationService.findUser(sessionStorage.getItem("user")).subscribe((user:User)=>{
      if(user.password!=this.oldPassword){
        this.oldPasswordError="Wrong old Password";
      }
      else{
        if(this.newPassword.length<8){
          this.newPasswordError="New Password is not in the right format";
          
        }
        else{
          if(this.newPasswordAgain!=this.newPassword){
            this.againPasswordError="New Passwords do not match"
          }
          else{
            this.registrationService.changePassword(this.newPassword).subscribe((user:User)=>{
              this.logOut();
            })
          }
        }
      }
    })

  }
  changeAdF:boolean=false;
  naziv:string;
  myAdsF:boolean;
  newAdFlag(){
    this.newAdF=true;
    this.myAdsF=false;
    this.nalogF=false;
    this.changeAdF=false;
  }
  myAdsFlag(){
    this.newAdF=false;
    this.myAdsF=true;
    this.salesmanService.getMyAds(this.username).subscribe((ads:Ad[])=>{
      this.myAds=ads;
    });
    this.nalogF=false;
    this.changeAdF=false;
  }
  nalogFlag(){
    this.nalogF=true;
    this.newAdF=false;
    this.myAdsF=false;
    this.changeAdF=false;
    
  }
  changeAd(ad:Ad){
    this.salesmanService.selectedAd=ad;
    this.changeAdF=true;
    this.nalogF=false;
    this.newAdF=false;
    this.myAdsF=false;
  }

  newAdd(){
    this.allFields="";
    if(this.tip=="" || this.sprat=="" || this.ukupnoSpratova=="" || this.opis=="" || this.cena=="" 
    || this.grejanje=="" || this.sobe=="" || this.povrsina=="" || this.stanje=="" || this.naziv=="" || this.godina=="" || this.rezije==""
    || this.city=="" || this.state=="" || this.microlocation=="" || this.street==""){
      this.allFields="All fields are required!";
    }else{
      let user=sessionStorage.getItem("user");
      this.registrationService.findUser(user).subscribe((user:User)=>{
        if(user.agency!=""){
        if(this.length>=3 && this.length<=6)
      this.salesmanService.newAdd( this.tip, this.sprat, this.ukupnoSpratova, this.opis, this.cena,this.rezije,
        this.grejanje, this.sobe, this.povrsina, this.stanje, this.balkon, this.terasa, this.lodja, this.klima, this.parking, this.lift,
        this.podrum, this.garaza, this.interfon, this.internet, this.telefon, this.basta, this.username, this.naziv, this.godina, 
        this.images, this.busLines, true, user.agency, this.city, this.state, this.microlocation, this.street).subscribe((ad:Ad)=>{
          this.salesmanService.getAdsByLocation(ad[0].microlocation, ad[0].tip).subscribe((ads:Ad[])=>{
            let totalPrice=0;
            for(let i=0;i<ads.length;i++)
              totalPrice+=+ads[i].cena/+ads[i].povrsina;
            let avgPrice=totalPrice/ads.length;
            let roundedPrice=Math.round(avgPrice);
            this.salesmanService.updateAverage(roundedPrice, ad[0].microlocation,ad[0].tip).subscribe((ads:Ad[])=>{
              this.myAdsFlag();
            });
          })
        });
        else
        this.allFields="Select between 3 and 6 Pictures!"
      }else{
        if(this.length>=3 && this.length<=6)
        this.salesmanService.newAdd( this.tip, this.sprat, this.ukupnoSpratova, this.opis, this.cena,this.rezije,
          this.grejanje, this.sobe, this.povrsina, this.stanje, this.balkon, this.terasa, this.lodja, this.klima, this.parking, this.lift,
          this.podrum, this.garaza, this.interfon, this.internet, this.telefon, this.basta, this.username, this.naziv, this.godina, 
          this.images, this.busLines, false,user.agency, this.city, this.state, this.microlocation, this.street).subscribe((ad:Ad)=>{
            this.salesmanService.getAdsByLocation(ad[0].microlocation, ad[0].tip).subscribe((ads:Ad[])=>{
              let totalPrice:number=0;
              for(let i=0;i<ads.length;i++)
                totalPrice+=+ads[i].cena/+ads[i].povrsina;
              let avgPrice:number=totalPrice/ads.length;
              let roundedPrice=Math.round(avgPrice);
              this.salesmanService.updateAverage(roundedPrice, ad[0].microlocation, ad[0].tip).subscribe((ads:Ad[])=>{
                this.myAdsFlag();
              });
            })
          });
          else
          this.allFields="Select between 3 and 6 Pictures!"

      }
      })
      
    }

  }
  sellAd(ad:Ad){
    this.salesmanService.sellAd(ad, this.username).subscribe((ad1:Ad)=>{
      this.salesmanService.getMyAds(this.username).subscribe((ads:Ad[])=>{
        this.myAds=ads;
        let date=new Date();
        this.salesmanService.setDate(ad.username, ad.naziv, date).subscribe((ad:Ad)=>{
          this.registrationService.findUser(sessionStorage.getItem("user")).subscribe((user:User)=>{
            this.user=user;
            this.oldEmail=this.user.email;
            if(user.agency!=""){
              this.flag=true;
            this.salesmanService.getAdsByAgency(user.agency).subscribe((ads:Ad[])=>{
              let jan=ads.filter(ad=>ad.soldMonth=="1").length;
              let feb=ads.filter(ad=>ad.soldMonth=="2").length;
              let mar=ads.filter(ad=>ad.soldMonth=="3").length;
              let apr=ads.filter(ad=>ad.soldMonth=="4").length;
              let may=ads.filter(ad=>ad.soldMonth=="5").length;
              let jun=ads.filter(ad=>ad.soldMonth=="6").length;
              let jul=ads.filter(ad=>ad.soldMonth=="7").length;
              let aug=ads.filter(ad=>ad.soldMonth=="8").length;
              let sept=ads.filter(ad=>ad.soldMonth=="9").length;
              let oct=ads.filter(ad=>ad.soldMonth=="10").length;
              let nov=ads.filter(ad=>ad.soldMonth=="11").length;
              let dec=ads.filter(ad=>ad.soldMonth=="12").length;
              this.Ads = [
                { Legend: 'Jan', Value: jan, Size:'' }, { Legend: 'Feb', Value: feb, Size:'' },
                { Legend: 'Mar', Value: mar, Size:'' }, { Legend: 'Apr', Value: apr, Size:'' },
                { Legend: 'May', Value: may , Size:''}, { Legend: 'Jun', Value: jun , Size:''},
                { Legend: 'Jul', Value: jul , Size:''}, { Legend: 'Aug', Value: aug , Size:''},
                { Legend: 'Sep', Value: sept, Size:'' }, { Legend: 'Oct', Value: oct, Size:''},
                { Legend: 'Nov', Value: nov, Size:'' }, { Legend: 'Dec', Value: dec, Size:'' }
              ];
             
            })
          }else{
            this.flag=false;
            this.salesmanService.getSoldAds().subscribe((ads:Ad[])=>{
              let jan=ads.filter(ad=>ad.soldMonth=="1").length;
              let feb=ads.filter(ad=>ad.soldMonth=="2").length;
              let mar=ads.filter(ad=>ad.soldMonth=="3").length;
              let apr=ads.filter(ad=>ad.soldMonth=="4").length;
              let may=ads.filter(ad=>ad.soldMonth=="5").length;
              let jun=ads.filter(ad=>ad.soldMonth=="6").length;
              let jul=ads.filter(ad=>ad.soldMonth=="7").length;
              let aug=ads.filter(ad=>ad.soldMonth=="8").length;
              let sept=ads.filter(ad=>ad.soldMonth=="9").length;
              let oct=ads.filter(ad=>ad.soldMonth=="10").length;
              let nov=ads.filter(ad=>ad.soldMonth=="11").length;
              let dec=ads.filter(ad=>ad.soldMonth=="12").length;
              this.Ads = [
                { Legend: 'Jan', Value: jan, Size:'' }, { Legend: 'Feb', Value: feb, Size:'' },
                { Legend: 'Mar', Value: mar, Size:'' }, { Legend: 'Apr', Value: apr, Size:'' },
                { Legend: 'May', Value: may , Size:''}, { Legend: 'Jun', Value: jun , Size:''},
                { Legend: 'Jul', Value: jul , Size:''}, { Legend: 'Aug', Value: aug , Size:''},
                { Legend: 'Sep', Value: sept, Size:'' }, { Legend: 'Oct', Value: oct, Size:''},
                { Legend: 'Nov', Value: nov, Size:'' }, { Legend: 'Dec', Value: dec, Size:'' }
              ];
             
            })
    
          }
          })
        })
      });
    })
    
  }
  fileName = '';

    

    onFileSelected(event) {

        // const file:File = event.target.files[0];

        // if (file) {

        //     this.fileName = file.name;

        //     const formData = new FormData();

        //     formData.append("thumbnail", file);

        //     const upload$ = this.httpClient.post("http:localhost:4000/ads/thumbnail-upload", formData);

        //     upload$.subscribe();
        // }
    }
    logOut(){
      sessionStorage.removeItem("user");
      this.router.navigate(['/']);
    }
    update(){
      this.emailError="";
      
        this.registrationService.findByEmail(this.user.email).subscribe((userEmail:User)=>{
          if(userEmail && userEmail.email!=this.oldEmail)
            this.emailError="Email je vec zauzet!";
          else
            this.salesmanService.changeEmail(this.user.email).subscribe((user:User)=>{
          
            });
        });
      
      
          this.salesmanService.changePhoneNumber(this.user.phoneNumber).subscribe((user:User)=>{
          
          });
      
      if(this.newAgency!=""){
        this.salesmanService.changeAgency(this.user.agency).subscribe((user:User)=>{

        });
      }

    }
    
    onFileChange(event) {
      if (event.target.files && event.target.files[0]) {
        this.length+= event.target.files.length;
          for (let i = 0; i <  this.length; i++) {
                  var reader = new FileReader();
     
                  reader.onload = (event:any) => {
                    console.log(event.target.result);
                     this.images.push(event.target.result); 
                  }
    
                  reader.readAsDataURL(event.target.files[i]);
          }
      }
    }
}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../models/Ad';
import { User } from '../models/User';

import { AdDetailService } from '../services/ad-detail.service';
import { BuyerService } from '../services/buyer.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private buyerService:BuyerService, private router:Router, private adDetailsService:AdDetailService,
    private registrationService:RegistrationService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user")==null){
      this.router.navigate(['/']);

    }
    else{
   
    this.buyerService.getAds().subscribe((ads:Ad[])=>{
      this.ads=ads;
      this.paginationLength=this.ads.length/10+1;
    });
    this.buyerService.getFavourites().subscribe((favs:Ad[])=>{
      this.favouriteAds=favs;
      this.favouriteAds=this.favouriteAds.filter(ad=>(ad.status=="Dostupno"))
    })
  }
    
  }
  detailsF:boolean=false;
  advancedSearchF:boolean=false;
  ads:Ad[];
  lokacijaPretraga:string="";
  cenaDoPretraga:string="";
  kvadraturaOdPretraga:string="";
  tipPretraga:string="";
  brojSobaPretraga:string="";
  cenaOdNapredna:string="";
  cenaDoNapredna:string="";
  kvadraturaOdNapredna:string="";
  kvadraturaDoNapredna:string="";
  brojSobaOdNapredna:string="";
  brojSobaDoNapredna:string="";
  godinaIzgradnjeOdNapredna:string="";
  godinaIzgradnjeDoNapredna:string="";
  agencijaNapredna:boolean=false;
  vlasnikNapredna:boolean=false;
  izvornoStanje:boolean=false;
  renoviranoStanje:boolean=false;
  luxStanje:boolean=false;
  toplotnePumpe:boolean=false;
  Gas:boolean=false; 
  Podno:boolean=false;
  TA:boolean=false;
  EG:boolean=false;
  CG:boolean=false;
  rezijeOdNapredna:string="";
  rezijeDoNapredna:string="";
  spratOdNapredna:string="";
  spratDoNapredna:string="";
  basicSearchF:boolean=true;
  dataF:boolean=true;
  terasa:boolean=false;
  lodja:boolean=false;
  lift:boolean=false;
  balkon:boolean=false;
  basta:boolean=false;
  klima:boolean=false;
  internet:boolean=false;
  interfon:boolean=false;
  telefon:boolean=false;
  podrum:boolean=false;
  favouriteAdsF:boolean=false;
  garaza:boolean=false;
  lokacijaNapredna:string="";
  tipNapredna:string="";
  favouriteAds:Ad[];
  paginationLength:number;


  newPassword:string="";
  newPasswordAgain:string="";
  oldPassword:string="";
  newPasswordError:string="";
  oldPasswordError:string="";
  againPasswordError:string="";
 
  dataFlag(){
    this.advancedSearchF=false;
    this.dataF=true;
    this.basicSearchF=true;
    this.detailsF=false;
    this.favouriteAdsF=false;

  }
  advancedSearchFlag(){
    this.advancedSearchF=true;
    this.dataF=false;
    this.basicSearchF=false;
    this.detailsF=false;
    this.favouriteAdsF=false;
  }
  search(){
    this.tipError="";
    if(this.tipPretraga!=""){
      this.buyerService.getAds().subscribe((ads:Ad[])=>{

        this.ads=ads;
        if(this.lokacijaPretraga!="")
        this.ads=this.ads.filter(ad=> (ad.microlocation.includes(this.lokacijaPretraga)||
                                        ad.city.includes(this.lokacijaPretraga) ||
                                        ad.state.includes(this.lokacijaPretraga)||
                                        ad.street.includes(this.lokacijaPretraga)));
        this.ads=this.ads.filter(ad=>ad.tip.includes(this.tipPretraga));
        if(this.cenaDoPretraga!="")
          this.ads=this.ads.filter(ad=>(+ad.cena<+this.cenaDoPretraga));
        if(this.kvadraturaOdPretraga!="")
          this.ads=this.ads.filter(ad=>(+ad.povrsina>+this.kvadraturaOdPretraga));
        if(this.brojSobaPretraga!="")
          this.ads=this.ads.filter(ad=>ad.sobe>this.brojSobaPretraga);
          return this.ads;
      });
    }
    else{
      this.tipError="Tip nekretnine je obavezno polje!";
    }
  }
  tipError:string="";
  advancedSearch(){
   
   

    // agencijaNapredna:boolean=false;
    // vlasnikNapredna:boolean=false;
   
  
    let grejanje=[];
    if(this.toplotnePumpe) grejanje.push("Toplotne Pumpe");
    if(this.Gas) grejanje.push("Gas");
    if(this.Podno) grejanje.push("Podno grejanje");
    if(this.TA) grejanje.push("TA");
    if(this.EG) grejanje.push("EG");
    if(this.CG) grejanje.push("CG");

   
   this.buyerService.getAds().subscribe((ads:Ad[])=>{

      this.ads=ads;
      this.paginationLength=this.ads.length/10+1;
      if(grejanje.length>0)
      this.ads=this.ads.filter(ad=>grejanje.includes(ad.grejanje));
      if(this.tipNapredna!="")
        this.ads=this.ads.filter(ad=>ad.tip.includes(this.tipNapredna));
        if(this.lokacijaNapredna!="")
        this.ads=this.ads.filter(ad=> (ad.microlocation.includes(this.lokacijaNapredna)||
                                        ad.city.includes(this.lokacijaNapredna) ||
                                        ad.state.includes(this.lokacijaNapredna)||
                                        ad.street.includes(this.lokacijaNapredna)));
        
        if(this.garaza){
          this.ads=this.ads.filter(ad=>ad.garaza==this.garaza);
        }
        if(this.agencijaNapredna && !this.vlasnikNapredna)
          this.ads=this.ads.filter(ad=>ad.agency==true);
          if(!this.agencijaNapredna && this.vlasnikNapredna)
          this.ads=this.ads.filter(ad=>ad.agency==false);

        if(this.podrum){
          this.ads=this.ads.filter(ad=>ad.podrum==this.podrum);
        }
        if(this.telefon){
          this.ads=this.ads.filter(ad=>ad.telefon==this.telefon);
        }
        if(this.interfon){
          this.ads=this.ads.filter(ad=>ad.interfon==this.interfon);
        }
        if(this.internet){
          this.ads=this.ads.filter(ad=>ad.internet==this.internet);
        }
        if(this.klima){
          this.ads=this.ads.filter(ad=>ad.klima==this.klima);
        }
        if(this.basta){
          this.ads=this.ads.filter(ad=>ad.basta==this.basta);
        }
        if(this.balkon){
          this.ads=this.ads.filter(ad=>ad.balkon==this.balkon);
        }
        if(this.terasa){
          this.ads=this.ads.filter(ad=>ad.terasa==this.terasa);
        }
        if(this.lodja){
          this.ads=this.ads.filter(ad=>ad.lodja==this.lodja);
        }
        if(this.lift){
          this.ads=this.ads.filter(ad=>ad.lift==this.lift);
        }
      
        if(this.izvornoStanje && this.renoviranoStanje) this.ads=this.ads.filter(ad=>ad.stanje.includes("izvorno")|| ad.stanje.includes("renovirano"));
        else
          if(this.izvornoStanje && this.luxStanje) this.ads=this.ads.filter(ad=>ad.stanje.includes("izvorno")|| ad.stanje.includes("lux"));
          else
            if(this.luxStanje && this.renoviranoStanje) this.ads=this.ads.filter(ad=>ad.stanje.includes("lux")|| ad.stanje.includes("renovirano"));
            else{
              if(this.luxStanje) this.ads=this.ads.filter(ad=>ad.stanje=="lux");
              if(this.izvornoStanje) this.ads=this.ads.filter(ad=>ad.stanje=="izvorno");
              if(this.renoviranoStanje) this.ads=this.ads.filter(ad=>ad.stanje=="renovirano");
            }
        if(this.spratOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.sprat>+this.spratOdNapredna);
        if(this.spratDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.sprat<+this.spratDoNapredna);
        if(this.brojSobaOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.sobe>+this.brojSobaOdNapredna);
        if(this.brojSobaDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.sobe<+this.brojSobaDoNapredna);
        if(this.kvadraturaOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.povrsina>+this.kvadraturaOdNapredna);
        if(this.kvadraturaDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.povrsina<+this.kvadraturaDoNapredna);
        if(this.cenaOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.cena>+this.cenaOdNapredna);
        if(this.cenaDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.cena<+this.cenaDoNapredna);
        if(this.godinaIzgradnjeOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.godina>+this.godinaIzgradnjeOdNapredna);
        if(this.godinaIzgradnjeDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.godina<+this.godinaIzgradnjeDoNapredna);
          if(this.rezijeOdNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.rezije>+this.rezijeOdNapredna);
        if(this.rezijeDoNapredna!="")
          this.ads=this.ads.filter(ad=>+ad.rezije<+this.rezijeDoNapredna);
        this.advancedSearchF=false;
        this.basicSearchF=true;
        this.dataF=true;
    });


  }

  adDetails(ad:Ad){
    
    this.adDetailsService.ad=ad;
    this.detailsF=true;
    this.advancedSearchF=false;
    this.dataF=false;
    this.basicSearchF=false;
    this.favouriteAdsF=false;
   
  }
  logOut(){
    sessionStorage.removeItem("user");
    this.router.navigate(['/']);
  }
  favouriteAdsFlag(){
    this.favouriteAdsF=true;
    this.detailsF=false;
    this.advancedSearchF=false;
    this.dataF=false;
    this.basicSearchF=false;
    this.buyerService.getFavourites().subscribe((favs:Ad[])=>{
      this.favouriteAds=favs;
      this.favouriteAds=this.favouriteAds.filter(ad=>(ad.status=="Dostupno"))
    })
  }
  removeFromFavourites(fav:Ad){
    this.registrationService.findUser(sessionStorage.getItem("user")).subscribe((user:User)=>{
      
        this.adDetailsService.decrementFavourites().subscribe((user:User)=>{
          this.buyerService.removeFavourite(fav).subscribe((err)=>{
            this.buyerService.getFavourites().subscribe((favs:Ad[])=>{
              this.favouriteAds=favs;
              
            })
          })
        })
      
    })
    
  }

  // Get the modal


flag:boolean=false;
flag2:boolean=true;
// When the user clicks on the button, open the modal
click() {
  this.flag=true;
  this.flag2=false;
}

// When the user clicks on <span> (x), close the modal
spanClick() {
  this.flag=false;
  this.flag2=true;
}

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



  
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../models/City';
import { User } from '../models/User';
import { RegistrationService } from '../services/registration.service';
import { SalesmanServiceService } from '../services/salesman-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router, private salesmanService:SalesmanServiceService) { }
  @Input() user:User;
  passwordError:string="";
  emailError:string="";
  oldUsername:string;
  takenUsername:string="";
  cities=[];
  ngOnInit(): void {
    this.oldUsername=this.user.username;
    this.salesmanService.getCities().subscribe((cities:City[])=>{
      this.cities=cities;
    })
  }
  
  save(){
    this.passwordError="";
    this.emailError="";
    this.takenUsername="";
    this.registrationService.findUser(this.user.username).subscribe((userN:User)=>{
      if(userN)
        this.takenUsername="Korisnicko ime je zauzeto!";
        else{
          
            this.registrationService.findByEmail(this.user.email).subscribe((userEmail:User)=>{
              if(userEmail && userEmail.username!=this.oldUsername){
              this.emailError="Email je vec zauzet!";
              }
              else{
                let isBuyer=this.user.typeString=="Kupac"?true:false;
                this.registrationService.update(this.user.username, this.user.password, this.user.firstname, this.user.lastname,
                  this.user.email, this.user.city, this.user.agency, this.user.phoneNumber, this.user.licenseNumber, this.user.birthday, false, isBuyer, this.user.imageData, this.oldUsername).subscribe((user:User)=>{
                    if(user) 
                      this.router.navigate(['/admin']);
                });
              }
        
              
            });
          }
          
    })
 }
}


import { Component, Input, OnInit } from '@angular/core';
import { VERSION ,ViewChild,ElementRef} from '@angular/core';
  import { RegistrationService } from '../services/registration.service';
  import {Router} from '@angular/router'
  import { User } from '../models/User';
import { Agency } from '../models/Agency';
import { AdminService } from '../services/admin.service';
import { FormGroup } from '@angular/forms';
import { SalesmanServiceService } from '../services/salesman-service.service';
import { City } from '../models/City';
import { isWhileStatement } from 'typescript';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router,private adminService:AdminService
    , private salesmanService:SalesmanServiceService) { 
      this.siteKey='6Lcers0dAAAAAN0kKEPAPQU52Qc_9mhLjFVBT0R_';
      this.isBuyer=true;
      this.isSalesman=false;
      this.isEnabled=true;
      this.agency="";
      this.username="";
      this.password="";
      this.confirmPassword="";
      this.firstname="";
      this.lastname="";
      this.email="";
      this.city="";
      this.birthday="";
      this.phoneNumber="";
      this.licenseNumber="";
      
    }
    cities=[];

  ngOnInit(): void {
    this.adminService.getAgencies().subscribe((agencies:Agency[])=>{
      if(agencies)
      this.agencies=agencies;
      
    })
    this.salesmanService.getCities().subscribe((cities:City[])=>{
      this.cities=cities;
    })
    this.captchaClicked=false;
  }
  captchaClicked:boolean=false;
  imageData: string;
    username:string;
    password:string;
    confirmPassword:string;
    firstname:string;
    lastname:string;
    email:string;
    agency:string;
    city:string;
    birthday:string;
    phoneNumber:string;
    licenseNumber:string;
    siteKey:string;
    isEnabled:boolean;
    isBuyer:boolean;
    isSalesman:boolean;
    allFields:string;
    takenUsername:string;
    passwordError:string;
    diffPassword:string;
    agencies:Agency[];
    emailError:string;
    width:number;
    height:number;
    imageError:string;
    @Input() flag:boolean; 
   
    register(){
      this.allFields="";
      this.takenUsername="";
      this.passwordError="";
      this.diffPassword="";
      this.emailError="";
      this.imageError="";
  
      if(this.username=="" || this.password=="" || this.firstname=="" || this.lastname=="" ||
        this.email==""  || this.city=="" || this.phoneNumber==""  || this.birthday=="" || this.captchaClicked==false|| (this.isSalesman && (this.agency!=""&& this.licenseNumber==""))){
         
          this.allFields="Sva polja su obavezna!";
         
        }
        else{
          this.registrationService.findUser(this.username).subscribe((userN:User)=>{
            if(userN){
              this.takenUsername="Korisnicko ime je zauzeto!";
             
            }
              else{
              if(this.password.length<8 || this.password.match('([a-z]|[A-Z]).*')==null
              || this.password.match('^.*[A-Z].*')==null
              || this.password.match('^.*[0-9].*')==null
              || this.password.match('^.*[!,@,#,$,%].*')==null){
                this.passwordError="Sifra je u pogresnom formatu!"
              
              }
              else{
                if(this.password!=this.confirmPassword){
                    this.diffPassword="Sifre se ne poklapaju";
                   
                }
                else{
                  this.registrationService.findByEmail(this.email).subscribe((userEmail:User)=>{
                    if(userEmail){
                    this.emailError="Email je vec zauzet!";
                   
                    }
                    else{
                      if(this.height<100 || this.width<100 || this.height>300 || this.width>300){
                        this.imageError="Dimenzije slike nisu odgovarajuce!";
                      }
                      else
                      this.registrationService.register(this.username, this.password, this.firstname, this.lastname,
                        this.email, this.city, this.agency, this.phoneNumber, this.licenseNumber, this.birthday, this.flag, this.isBuyer, this.imageData).subscribe((user:User)=>{
                          if(user) 
                          if(this.flag)
                           this.router.navigate(['']);
                           else
                           this.router.navigate(['/admin']);
                    });
                  }
              
                    
                 });
              }
            }
            }
            });
          }
      }
    buyer(){
      this.isEnabled=true;
      this.isBuyer=true;
      this.isSalesman=false;
    }
    
    salesman(){
      this.isEnabled=false;
      this.isBuyer=false;
      this.isSalesman=true;
    }
    
    onFileSelect(event: Event) {
      const file = (event.target as HTMLInputElement).files[0];
      
      // this.form.patchValue({ image: file });
      const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const URL = window.URL || window.webkitURL;
        const Img = new Image();
    
      
        Img.src = URL.createObjectURL(file);
    
        Img.onload = (e: any) => {
          this.height = e.path[0].height;
          this.width = e.path[0].width;
    
          
      }
        const reader = new FileReader();
        
        reader.onload = () => {
          
          this.imageData = reader.result as string;
         
          
        };
        reader.readAsDataURL(file);
      }
    }
   
   
    handleSuccess(event: String){
      this.captchaClicked=true;
    }
  }
  

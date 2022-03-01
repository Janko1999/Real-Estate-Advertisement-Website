import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { User } from '../models/User';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService, private router:Router, private registrationService:RegistrationService ) { 
    this.userRequestsF=true;
    this.allUsersF=false;
    this.newUserF=false;
    this.newAgencyF=false;
    this.name="";
    this.address="";
    this.city="";
    this.phoneNumberA="";
    this.PIB="";
  }
  
  allFields:string;
  takenUsername:string;
  passwordError:string;
  diffPassword:string;
  userRequestsF:boolean;
  newAgencyF:boolean;
  userDetails:boolean;
  selectedUser:User;
  allUsersF:boolean;
  newUserF:boolean;
  name:string;
  address:string;
  city:string;
  phoneNumberA:string;
  PIB:string;
  userRequests:User[];
  allUsers:User[];
  ngOnInit(): void {
    if(sessionStorage.getItem("user")==null || sessionStorage.getItem('user')!="admin"){
      this.router.navigate(['/']);

    }
    else{
   
    this.adminService.findUsers().subscribe((users:User[])=>{
      if(users){
      this.userRequests=users;
      
    }
      
    })
    this.adminService.findAllUsers().subscribe((users:User[])=>{
      if(users)
      this.allUsers=users;
      
    })
  }
  }

  accept(user:User){
    this.adminService.accept(user).subscribe((users:User)=>{
      if(users)
      this.adminService.findUsers().subscribe((users:User[])=>{
        if(users)
        this.userRequests=users;
      });
    })
  }
  reject(user:User){
    this.adminService.reject(user).subscribe((users:User)=>{
      if(users)
      this.adminService.findUsers().subscribe((users:User[])=>{
        if(users)
        this.userRequests=users;
      });
    })
  }
  userRequestsFlag(){
    this.userRequestsF=true;
    this.newUserF=false;
    this.allUsersF=false;
    this.userDetails=false;
    this.newAgencyF=false;
    this.newLocationF=false;
  }
  allUsersFlag(){
    this.userRequestsF=false;
    this.newUserF=false;
    this.allUsersF=true;
    this.userDetails=false;
    this.newAgencyF=false;
    this.newLocationF=false;
    this.adminService.findAllUsers().subscribe((users:User[])=>{
      if(users)
      this.allUsers=users;
      
    })
  }
  newUserFlag(){
    this.userRequestsF=false;
    this.newUserF=true;
    this.allUsersF=false;
    this.userDetails=false;
    this.newAgencyF=false;
    this.newLocationF=false;
  }
  newAgencyFlag(){
    this.userRequestsF=false;
    this.newUserF=false;
    this.allUsersF=false;
    this.userDetails=false;
    this.newAgencyF=true;
    this.newLocationF=false;
  }
  logOut(){
    this.router.navigate(['/']);
    sessionStorage.removeItem("user");
  }
  update(user:User){
    this.selectedUser=user;
    this.userDetails=true;
    this.userRequestsF=false;
    this.newUserF=false;
    this.allUsersF=false;
    this.newAgencyF=false;
    this.newLocationF=false;
  }
  delete(user:User){
    this.adminService.delete(user).subscribe((user:User[])=>{
      if(user){
      this.adminService.findAllUsers().subscribe((users:User[])=>{
        if(users)
        this.allUsers=users;
      
    })
  }
      });
      
  }
  newAgency(){
    this.allFields="";
      
  
      if(this.name=="" || this.address=="" || this.city=="" || this.phoneNumberA=="" || this.PIB=="" ){
         
          this.allFields="All fields are required";
        }
       
              this.adminService.newAgency(this.name, this.address, this.phoneNumberA, this.PIB,
                  this.city).subscribe((user:User)=>{
                   if(user) 
                    this.router.navigate(['/admin']);
                    
                 });
             
            
  }
  flag:boolean=false;
  flag2:boolean=true;
  newPassword:string="";
  newPasswordAgain:string="";
  oldPassword:string="";
  newPasswordError:string="";
  oldPasswordError:string="";
  againPasswordError:string="";


  grad:string="";
  opstina:string="";
  mikrolokacija:string="";
  ulica:string="";
  displayedColumns: string[] = [ "Ime i prezime","Korisnicko ime", "Sifra","Email","Tip","Rodjendan","Grad", "Prihvati", "Odbij"];
  displayedColumnsAllUsers: string[] = [ "Ime i prezime","Korisnicko ime", "Sifra","Email","Tip","Rodjendan","Grad", "Izmeni", "Obrisi"];
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
  newLocationF:boolean=false;
  newLocationFlag(){
    this.newLocationF=true;
    this.userRequestsF=false;
    this.newUserF=false;
    this.allUsersF=false;
    this.userDetails=false;
    this.newAgencyF=false;
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
  
  newLocation(){
    this.adminService.insertLocation(this.grad, this.opstina, this.mikrolokacija, this.ulica).subscribe((location:Location)=>{

    })
  }
  newMicrolocation(){
    this.adminService.insertMicrolocation(this.mikrolokacija).subscribe((location:Location)=>{

    })
  }
  newStreet(){
    this.adminService.insertStreet( this.ulica).subscribe((location:Location)=>{

    })

  }
  
}

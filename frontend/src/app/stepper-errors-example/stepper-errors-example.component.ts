// declare var require: any
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {SalesmanServiceService} from '../services/salesman-service.service'
import {Ad} from '../models/Ad'
/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'stepper-errors-example',
  templateUrl: './stepper-errors-example.component.html',
  styleUrls: ['./stepper-errors-example.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class StepperErrorsExample implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  file=[];
  length:number=0;
  images=[];
  selectedFile:Blob;
  fileString:string;
  
  

  constructor(private _formBuilder: FormBuilder, private salesmanService:SalesmanServiceService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
       const text = reader.result.toString().trim();
       this.fileString=text;
       console.log(text);
    }
    reader.readAsText(this.selectedFile);
  }
  onImageChange(event) {
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
  submit(){
   
    const obj =JSON.parse(this.fileString);
    let location=obj.Realestate.Street+", "+obj.Realestate.Municipality+", "+obj.Realestate.City;
    let garaza=obj.Realestate.Characteristics.indexOf("Garaza")>-1;
    let lodja=obj.Realestate.Characteristics.indexOf("Lodja")>-1;
    let terasa=obj.Realestate.Characteristics.indexOf("Terasa")>-1;
    let lift=obj.Realestate.Characteristics.indexOf("Lift")>-1;
    let klima=obj.Realestate.Characteristics.indexOf("Klima")>-1;
    let basta=obj.Realestate.Characteristics.indexOf("Basta")>-1;
    let telefon=obj.Realestate.Characteristics.indexOf("Telefon")>-1;
    let internet=obj.Realestate.Characteristics.indexOf("Internet")>-1;
    let interfon=obj.Realestate.Characteristics.indexOf("Interfon")>-1;
    let podrum=obj.Realestate.Characteristics.indexOf("Podrum")>-1;
    let balkon=obj.Realestate.Characteristics.indexOf("Balkon")>-1;

    let parking=obj.Realestate.Parking=="DA"
    let agency=obj.Advertiser[0].Type=="Agencija"?true:false;
    if(this.length>=3 && this.length<=6)
      this.salesmanService.newAdd(  obj.Realestate.Type, obj.Realestate.Floor, obj.Realestate.TotalFloors, obj.Realestate.About, obj.Realestate.Price,obj.Realestate.MonthlyUtilities,
        obj.Realestate.Heating, obj.Realestate.Rooms, obj.Realestate.Area, obj.Realestate.State, balkon, terasa, lodja, klima, parking, lift,
        podrum, garaza, interfon, internet, telefon, basta, sessionStorage.getItem("user"), obj.Realestate.Name, obj.Realestate.ConstructionYear, this.images, obj.Realestate.BusLines,agency,
         obj.Advertiser[0].Name, obj.Realestate.City, obj.Realestate.Municipality, obj.Realestate.Microlocation, obj.Realestate.Street).subscribe((ad:Ad)=>{
          this.salesmanService.getAdsByLocation(ad[0].microlocation, ad[0].tip).subscribe((ads:Ad[])=>{
            let totalPrice=0;
            for(let i=0;i<ads.length;i++)
              totalPrice+=+ads[i].cena/+ads[i].povrsina;
            let avgPrice=totalPrice/ads.length;
            let roundedPrice=Math.round(avgPrice);
            this.salesmanService.updateAverage(roundedPrice, ad[0].microlocation,ad[0].tip).subscribe((ads:Ad[])=>{
           
            });
          })
        });
        
    }

 
   
  
}
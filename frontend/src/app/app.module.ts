import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BuyerComponent } from './buyer/buyer.component';
import { SalesmanComponent } from './salesman/salesman.component';
import { AdminComponent } from './admin/admin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'
import { MatStepperModule} from '@angular/material/stepper'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperErrorsExample } from './stepper-errors-example/stepper-errors-example.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { AdFormComponent } from './ad-form/ad-form.component';
import { ChartComponent } from './chart/chart.component'
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import {MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import{MatTableModule} from '@angular/material/table';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    BuyerComponent,
    SalesmanComponent,
    AdminComponent,
    UserDetailsComponent,
    RegistrationFormComponent,
    AdDetailComponent,
    StepperErrorsExample,
    AdFormComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ChartModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

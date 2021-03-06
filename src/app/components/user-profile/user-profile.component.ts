import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/bill';
import { General } from 'src/app/general';
import { NavbarService } from 'src/app/services/navbar.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { Vaccine } from 'src/vaccine';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentId:number;
  currentName:any;
  currentEmail:any;
  secondDate = new Date();

  general : General[];
  vaccine :  Vaccine[];
  bill : Bill[];

  constructor(private _service: RegistrationService,private http: HttpClient,public nav: NavbarService) { }

  ngOnInit(): void {

    this.currentId = +sessionStorage.getItem('id');
 
    this.nav.showPatient();
    
    this.currentId = +sessionStorage.getItem('id');

    this.currentName = sessionStorage.getItem('name');
   
    this.currentEmail = sessionStorage.getItem('email');

    this.getTestAppointmentInfo();
    this.getVaccineAppointmentInfo();
    this.getInvoiceInfo();

  }

  getTestAppointmentInfo(){

    this._service.getTestAppointmentInfo(this.currentId).subscribe((data: General[])=>{
      console.log(data);
      this.general = data;
    })
  }

  getVaccineAppointmentInfo(){

    this._service.getVaccineAppointmentInfo(this.currentId).subscribe((data: Vaccine[])=>{
      console.log(data);
      this.vaccine = data;
    })
    
  }

  getInvoiceInfo(){

    this._service.getInvoiceInfo(this.currentId).subscribe((data: Bill[])=>{
      console.log(data);
      this.bill = data;
    })
  }

  getSecondDate(date: Date): Date {
    this.secondDate = new Date(date);
    this.secondDate.setDate(this.secondDate.getDate() + 45);
    return this.secondDate;
 }

 deleteGeneralAppointment(id){
    
  this.http.delete('http://localhost:8080/deleteappointment/'+id)
          .subscribe(() =>  {
            this.getTestAppointmentInfo();
            alert('Your Covid-19 Test Appointment Canceled Successfully! ');

          })

  }

  deleteVaccineAppointment(id){
    
    this.http.delete('http://localhost:8080/deletevaccineappointment/'+id)
            .subscribe(() =>  {
              this.getVaccineAppointmentInfo();
              alert('Your Vaccine Appointment Canceled Successfully!');
            })
    }
}

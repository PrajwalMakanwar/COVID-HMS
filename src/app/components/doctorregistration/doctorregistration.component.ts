import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Doctor } from 'src/doctor';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';



@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {

  doctor = new Doctor();
  msg=" ";
  minDate:Date;
  constructor(private _service: RegistrationService, private _router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.showAdmin();
  }


  registerDoctor(){
    this._service.registerDoctorFromRemote(this.doctor).subscribe(
      data=>{
        console.log('Doctors response received');
        this._router.navigate(['/invoice']);
      },
      error=>{
        console.log('exception occurred');
        this.msg= error.error;
        
      }
    )
  }


}

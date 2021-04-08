import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Bill } from 'src/app/bill';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  bill = new Bill();
  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
    
    this.bill.patientId = +sessionStorage.getItem('id');
  }
  
  printInfo(){
    console.log("In printinfo");
    window.print();
  }

  saveBill(){
    this._service.saveBillFromRemote(this.bill).subscribe(
      data=>{
        console.log('bill response received');
      },
      error=>{
        console.log('exception occurred');
        
      }
    )
  }

}

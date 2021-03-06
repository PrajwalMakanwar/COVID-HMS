import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { User } from 'src/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentId:any;
  currentName:any;
  currentEmail:any;
  id:number;
  
  constructor(private _router: Router, public nav: NavbarService) {}

  
  
  ngOnInit(): void {

    
    
    this.currentId = sessionStorage.getItem('id');

    this.currentName = sessionStorage.getItem('name');
   
    this.currentEmail = sessionStorage.getItem('email');
    this.id = +this.currentId;
    
    //console.log('hello '+this.currentEmail);

    
    //this.currentName = localStorage.getItem('name');
    //console.log('hello '+this.currentName);



    //window.location.reload();
    //sessionStorage.removeItem('email');
  }
  

  logOut(){
    sessionStorage.clear();
    this._router.navigate(['/']);
    this.nav.hide();
    this.nav.hideAdmin();
    this.nav.hideDoctor();
    this.nav.hidePatient();
  }

 
  




 

}

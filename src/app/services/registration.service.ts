import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/user';
import { Doctor } from 'src/doctor';
import { Vaccine } from 'src/vaccine';
import { General } from 'src/app/general';
import { Bill } from 'src/app/bill';
import { Room } from '../components/room';
import { RoomManagement } from '../components/roomManagement';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  constructor(private _http: HttpClient) {}

  
  //post methods
  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }

  public loginDoctorFromRemote(doctor:Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/logindoctor",doctor);
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user);
  }

  public registerDoctorFromRemote(doctor:Doctor):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerdoctor",doctor);
  }

  public registerVaccineAppointment(v:Vaccine):Observable<any>{
    return this._http.post<any>("http://localhost:8080/vaccinationRegister",v);
  }

  public generalAppointmentFromRemote(general:General):Observable<any>{
    return this._http.post<any>("http://localhost:8080/generalappointment",general);
  }

  public confirmAppointment(v:Vaccine):Observable<any>{
    return this._http.post<String>("http://localhost:8080/vaccination",v);
  }

  public saveBillFromRemote(b: Bill):Observable<any>{
    return this._http.post<any>("http://localhost:8080/bill",b);
  }

  public confirmAddRoom(r: Room):Observable<any>{
    return this._http.post<any>("http://localhost:8080/confirmAddRoom",r);
  }
  
  public confirmBedAlloted(rm: RoomManagement):Observable<any>{
    return this._http.post<any>("http://localhost:8080/confirmBed",rm);
  }




  //get methods
 
  public getRoomNumbers(type: String):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getRoomNumbers/'+type);
  }

  public getRoomInfo():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getRoomInfo');
  } 

  public getRoomStatusInfo():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getRoomStatusInfo');
  }

  public GetRoomInfoByPid(patientId: Number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getRoomInfoByPid/'+patientId);
  }

  public vaccinePendingAppointments():Observable<any>{
    return this._http.get<any>("http://localhost:8080/vaccinependingappointments");
  }

  public approveAppointment(patientId:number):Observable<any>{
    console.log("In get approve appointment pid = "+patientId)
    return this._http.get<any>('http://localhost:8080/approveAppointment/'+patientId);
  }

  public patientBillHistory():Observable<any>{
    return this._http.get<any>("http://localhost:8080/billhistory");
  }

  public pendingAppointment():Observable<any>{
    return this._http.get<any>("http://localhost:8080/pendingappointment");
  }

  public getTestAppointmentInfo(patientId:number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getTestAppointmentInfo/'+patientId);
  }

  public getVaccineAppointmentInfo(patientId:number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getVaccineAppointmentInfo/'+patientId);
  }

  public getInvoiceInfo(patientId:number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getInvoiceInfo/'+patientId);
  }

  public allPatient():Observable<any>{
    return this._http.get<any>("http://localhost:8080/allpatient");
  }

  public patientAvailable(patientId:number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/patientAvailable/'+patientId);
  }

  public allDoctor():Observable<any>{
    return this._http.get<any>("http://localhost:8080/alldoctor");
  }
}

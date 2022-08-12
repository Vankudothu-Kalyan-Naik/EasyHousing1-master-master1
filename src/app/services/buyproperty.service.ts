import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams}from '@angular/common/http';
import { Property } from '../models/property.model';
@Injectable({
  providedIn: 'root'
})
export class BuyPropertyService {
  propertyData:Property=new Property();


  constructor(private http:HttpClient) { }

getPropertyDetails(){
  const headers=new HttpHeaders()
  .set('control-type','application/json')
  .set('access-control-allow-origin','*');

  const param=new HttpParams()
  .set('name','pen')
  .set('pageNo',5);
  return this.http.get("https://localhost:44359/api/Property/GetAll",{headers:headers});
  //return this.http.get<DoctorDetails>(this.baseURL + "GetDoctors");
}
getDoctorByState(state:string){


    const headers=new HttpHeaders()
    .set('control-type','application/json')
    .set('access-control-allow-origin','*');

    return this.http.get(`https://localhost:44359/api/Property/GetByState/${state}`,{headers:headers});
   //return this.http.get<DoctorDetails>(this.baseURL + `GetBySpecialization/${specialization}`);

   }
   createProperty(){
    //const headers=new HttpHeaders()
    //.set('control-type','application/json')
    //.set('access-control-allow-origin','*');


     return this.http.post("https://localhost:44359/api/Property/Create",this.propertyData);
   }


}

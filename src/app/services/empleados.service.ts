import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EmpleadosService{
    constructor(private _http: HttpClient){

    }

    sendUser(user:User): Observable<any>{
        let json = JSON.stringify(user);
        let header = new HttpHeaders().set("Content-type","application/json");
        let request = "auth/login";
        let url= environment.urlApiAuth+request
        return this._http.post(url,json,{headers:header})
    
    }

    getUserProfile():Observable<any>{
        let request = "api/empleados/perfilempleado"
        let url = environment.urlApiAuth +request
        let token = localStorage.getItem("authToken")
        let header = new HttpHeaders().set('Authorization','Bearer '+token)
        return this._http.get(url,{headers:header})
        

    }
    getUserSubs():Observable<any>{
        let request = "api/empleados/subordinados"
        let url = environment.urlApiAuth +request
        let token = localStorage.getItem("authToken")
        let header = new HttpHeaders().set('Authorization','Bearer '+token)
        return this._http.get(url,{headers:header})
    }

}
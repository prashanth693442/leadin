import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) {
  }

  getUser(){
    let url="https://reqres.in/api/users?page=2";
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
    return this.http.get<any[]>(url,httpOptions).pipe(map(data=>data));
  }
// get call
getUserSavedCards(baseSite,token,email){
  let url=""
    if(baseSite.csAgent){
        url=url+ "?access_token=" + baseSite.agentToken
    }
        
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'bearer '+token
      })
  };
  return this.http.get<any[]>(url,httpOptions).pipe(map(data => data));
}

//POST CALL
 postCardDetails(baseSite,token,email,body){
  let url = ""
    if(baseSite.csAgent){
        url=url+ "?access_token=" + baseSite.agentToken
    }
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer'+token
      })
  };
  return this.http.post(url, JSON.stringify(body), httpOptions)
      .pipe(map(data => data,
          catchError(err => of(err.message))
      ));
 } 
 // PUT CALL
 setDefaultCard(baseSite,token,email,id,body){
  let url =""
    if(baseSite.csAgent){
        url=url+ "&access_token=" + baseSite.agentToken
    }
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer '+token
           })
  };
  return this.http
  .put<any[]>(url,JSON.stringify(body),httpOptions)
  .pipe(map(data => data));
 }

 //Delete Call
 removeCard(baseSite,token,email,id){
    let url =""
        if(baseSite.csAgent){
            url=url+ "&access_token=" + baseSite.agentToken
        }
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+token
             })
    };
    return this.http
    .delete<any[]>(url,httpOptions)
    .pipe(map(data => data)); 
 }


 
   }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private username:string;
  private clientid ='Iv1.1c133b5f1a26642d';
  private clientsecret ='9322dc3059f21161604ccfc827cb65280e0d40f6';


  constructor(private httpClient:HttpClient) { 
    console.log("service ready")
    this.username = 'wanjiru393';
  }

  getProfileInfo(){
    return this.httpClient.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid 
    + "&client_secret=" + this.clientsecret)
    // .map(res => res.json());
  }

  getProfileRepos(){
    return this.httpClient.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid 
    + "&client_secret=" + this.clientsecret)
  }
}

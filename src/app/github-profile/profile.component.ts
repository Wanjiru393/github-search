import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class SearchFormComponent implements OnInit {
  profile: any;



  constructor(private httpService: HttpService) {
    this.httpService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    })
  }

  // public searchUser(){

  // }

  ngOnInit(): void {
  }

}

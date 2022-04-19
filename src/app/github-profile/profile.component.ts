import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username!: string;

  constructor(private httpService: HttpService) {
    
  }

  findProfile(){
    this.httpService.updateProfile(this.username);
    this.httpService.getProfileInfo().subscribe((profile: any) => {
      // console.log(profile);
      this.profile = profile;
    });

    this.httpService.getProfileRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

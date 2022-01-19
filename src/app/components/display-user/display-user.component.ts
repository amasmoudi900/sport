import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  id:any;
  user:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getProfile(this.id).subscribe(
      (data)=> {
        this.user = data.result;
      }
    );
  }

}

import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: any = {};
  userId: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService:UserService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getProfile(this.userId).subscribe(
      (data)=> {
        console.log('Here data object', data.result);
        
        this.user = data.result;
      }
    )
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['']
    })
  }

  edit() {
    alert('BTN clicked')
  }

}

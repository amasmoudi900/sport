import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any = {};
  errMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }

  login() {
    // console.log('Here user', this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        if (data.message != '2') {
          this.errMsg = 'Please check Email/PWD';
        } else {
          if (data.user.role =='admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate([`profile/${data.user.id}`]);
          }
        }
      }
    );
  }
}

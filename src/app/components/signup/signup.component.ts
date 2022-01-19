import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatchFn } from 'src/app/validators/mustMatch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  x: boolean = false;
  signupForm: FormGroup;
  path:string;
  errMsg:string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log('Path', this.path);
    
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6),
      Validators.maxLength(12)]],
      confirmPwd: ['']
    },
      {
        validator: MustMatchFn('pwd', 'confirmPwd')
      })
  }
  signup() {
    let role = (this.path == "/signup") ? 'user' : 'admin';
    this.signupForm.value.role = role;
    console.log('Signup btn is clicked', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data)=> {
        console.log('Here data after signup', data.message);
        if (data.message == '0') {
          this.errMsg = "Email Exists";
        } else{
          this.router.navigate(['']);
        }
      }
    );
  }

}

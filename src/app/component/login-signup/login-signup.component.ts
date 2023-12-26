import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Signup, login} from "../employeemodel"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) {}
  signupform!: FormGroup;
  loginform!: FormGroup;

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Login Form
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  isShow = false;

  signUp() {
    this.isShow = true;
  }

  login() {
    this.isShow = false;
  }

  submitSignup(){
    this.http.post<Signup>("http://localhost:3000/signup", this.signupform.value).subscribe((res) =>{
    alert(`user signup successfully ${res}`)
    this.signupform.reset();
    })
  }

  loginUser(){
    this.http.get<login[]>("http://localhost:3000/signup").subscribe((res) =>{
      // matching email and password
      const user = res.find((data:any)=>{
        return data.email == this.loginform.value.email && data.password == this.loginform.value.password
      })

      //login condition

      if(user){
        alert("Successfully login");
        this.loginform.reset();
        this.router.navigate(['/employeelist'])
      }else{
        alert("user not found with this credential");
        this.loginform.reset();
      }
    },err =>{
      alert("Server error");
      this.loginform.reset();
    })
  }
}

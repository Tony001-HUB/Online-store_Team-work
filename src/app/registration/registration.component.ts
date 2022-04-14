import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  myForm : FormGroup;
  type = 'text';
  errorMessage: string ='';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({

      "userName": ["", [Validators.required]],
      "email": ["", [ Validators.required, Validators.email]],
      "phoneNumber": ["", [Validators.required]],
      "password": ["", [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/)]],
    });
  }

  public submit(): void {
    console.log(this.myForm.value);
    this.authService.registration(this.myForm.value).subscribe({
      next: (data) => {
        console.log("data", data)
      },
      error: (error) => {
        console.log("error", error);
        this.errorMessage = error.error;
      },
      complete: () => {this.errorMessage = ''}
    });
  }

  changeType() {
    if (this.type == 'text') {
      this.type = 'password';
    }
    else
      this.type = 'text';
  }



}

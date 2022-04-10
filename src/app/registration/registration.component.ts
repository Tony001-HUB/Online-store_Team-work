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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({

      "userName": ["", [Validators.required]],
      "email": ["", [ Validators.required, Validators.email]],
      "phoneNumber": ["", [Validators.required]],
      "password": ["", [Validators.required]],
    });
  }

  public submit(): void {
    console.log('this.myForm.value', this.myForm.value);
    this.authService.registration(this.myForm.value).subscribe(data => {
      console.log('data', data);
/*      alert('Пользователь успешно зарегистрирован!');
      this.myForm.reset();
      this.router.navigate(['/login']);*/
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

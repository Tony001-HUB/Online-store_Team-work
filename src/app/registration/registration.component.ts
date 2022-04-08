import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  myForm : FormGroup;
  type = 'text';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){

    this.myForm = formBuilder.group({

      "userName": ["", [Validators.required]],
      "email": ["", [ Validators.required, Validators.email]],
      "phoneNumber": ["", [Validators.required]],
      "password": ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.authService.registration(this.myForm.value).subscribe(data => {
      alert('Пользователь успешно зарегистрирован!');
      this.myForm.reset();
      this.router.navigate(['/login']);
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

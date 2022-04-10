import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup;
  private user: User;
  type = 'text';
  dddd :boolean;

  constructor(private formLoginBuilder: FormBuilder, private enterService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

    this.user = User.getInstance();
    this.myLoginForm = this.formLoginBuilder.group({

      "email": ["", [ Validators.required, Validators.email]],
      "password": ["", [Validators.required]],
    })
  }

  public enter(): void {
    this.enterService.login(this.myLoginForm.value).subscribe(data => {
      this.user.token = data.token;
      this.user.email = this.myLoginForm.value.email;
      if (this.user.token && this.user.email) {
        console.log('Вы зашли Ура Ваш токен', this.user.token );
      }
      else console.log('No');
    })
  }

  changeType() {
    if (this.type == 'text') {
      this.type = 'password';
    }
    else
      this.type = 'text';

    if (this.myLoginForm.value.email.invalid)
      this.dddd = true;
    else
      this.dddd = false;
  }


}

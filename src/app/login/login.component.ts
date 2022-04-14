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
  errorMessage: string ='';
  public valueUserLogin: string | null;

  constructor(private formLoginBuilder: FormBuilder, private enterService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

    if (localStorage.getItem('user-login') != null)
      this.valueUserLogin = localStorage.getItem('user-login')
    else
      this.valueUserLogin = '';

    this.myLoginForm = this.formLoginBuilder.group({

      "email": [`${this.valueUserLogin}`, [ Validators.required, Validators.email]],
      "password": ["", [Validators.required]],
      "checkbox": ["checked"],
    })


  }

  public enter(): void {
    console.log('Состояние',this.myLoginForm.get('checkbox')?.value);
    this.enterService.login(this.myLoginForm.value).subscribe({
      next: (data) => {
        console.log("data", data);
      },
        error: (error) => {
        console.log("error", error);
        this.errorMessage = error.error;
      },
        complete: () => {
          if (this.myLoginForm.get('checkbox')?.value != false)
            this.enterService.setLogin(this.myLoginForm.get('email')?.value)
      }





/*      this.user.token = data.token;
      this.user.email = this.myLoginForm.value.email;
      if (this.user.token && this.user.email) {
        console.log('Вы зашли Ура Ваш токен', this.user.token );
      }
      else console.log('No');*/
/*      console.log(data);
      this.router.navigate(['/registration']);*/

    })
  }



  changeType() {
    if (this.type == 'text') {
      this.type = 'password';
    }
    else
      this.type = 'text';
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../models/user";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  myLoginForm: FormGroup;
  private user: User;
  public type: string = 'text';
  public errorMessage: string = '';
  public valueUserLogin: string | null;
  private subscription: Subscription;

  constructor(private formLoginBuilder: FormBuilder, private enterService: AuthService, private router: Router) {
    this.subscription = new Subscription();
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
   this.subscription = this.enterService.login(this.myLoginForm.value).subscribe({
      next: (data) => {
      },
      error: (error) => {
        this.errorMessage = error.error;
      },
      complete: () => {
        if (this.myLoginForm.get('checkbox')?.value != false)
          this.enterService.setLogin(this.myLoginForm.get('email')?.value);
        this.router.navigate(['/home'])
      }
    })
  }

  changeType() {
    if (this.type == 'text') {
      this.type = 'password';
    }
    else
      this.type = 'text';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

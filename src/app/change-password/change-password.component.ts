import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators} from "@angular/forms";
import {elementAt, Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";
import jwt_decode from "jwt-decode";
import {valHooks} from "jquery";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  jwtToken: string | null;
  errorMessage: string = '';
/*  goodMessage: string = '';*/
  private subscription: Subscription;
  public inputType: string = 'text';

  constructor(private formChangePasswordBuilder: FormBuilder, private authService: AuthService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formChangePasswordBuilder.group({
      "currentPassword": ["", [Validators.required]],
      "password": ["", [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/)]],
      "newPassword": ["", [Validators.required]]
    },
      {validator: this.mustMatch('password', 'newPassword')
      })
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['mustMatch']) {
        return;
      }
      if (control.value !== '' && control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public changePassword(): void {
    this.subscription = this.authService.changePassword(this.changePasswordForm.value).subscribe({
      next: (data) => {
      },
      error: (error) => {
        this.errorMessage = error.error;
        this.clearMessage();
      },
      complete: () => {
        this.errorMessage = 'Пароль успешно заменен!';
        this.clearMessage();
      }
    })
  }

  public changeType(clas): void {
    let divInput: any | null = document.querySelector(`.${clas}`);
    if (divInput.type == 'text') {
      divInput.type = 'password';
    } else {
      divInput.type = 'text';
    }
  }

  public clearMessage():void {
    let divInput: any = document.querySelectorAll(".form-change-password__input");
    divInput.forEach(element => {
      element.addEventListener('click', ()=> {
        this.errorMessage = '';
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

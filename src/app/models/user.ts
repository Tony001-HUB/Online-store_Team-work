export interface IUser {
  userName?: string;
  email: string;
  phoneNumber?: string;
  password: string;
}

export class User {
  private static userInstance: User;
  private _token: string;
  private _email: string ;

  private constructor() {}

  public static getInstance(): User {
    if (!User.userInstance) {
      User.userInstance = new User();
    }
    return User.userInstance;
  }

  set token(token: string) {
    this._token = token;
    localStorage.setItem('token', this._token);
  }

  set email(email: string) {
    this._email = email;
    localStorage.setItem('email', this.email);
  }

  get token(): string  {
    if (localStorage.getItem('token')) {
      this._token = localStorage.getItem('token') as any;
    }
    return this._token;
  }

  get email(): string  {
    if (localStorage.getItem('email')) {
      this._email = localStorage.getItem('email') as any;
    }
    return this._email;
  }
}

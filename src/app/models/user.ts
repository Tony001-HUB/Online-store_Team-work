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

}

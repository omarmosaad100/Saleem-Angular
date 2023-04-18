import { GenderEnum } from "../Enums/GenderEnum.enum";
import { IRegisterPatient } from "./IRegisterPatient";

export class RegisterPatient implements IRegisterPatient {

  nationalID: string  = "";
  name: string = "";
  mobile: string = "";
  email: string = "";
  age: number = 0;
  gender: GenderEnum = GenderEnum.Male;
  password: string = "";

  constructor(){}

  // constructor(name: string, nationalID: string, mobile:string, email: string , age:number , gender:GenderEnum , password:string ) {
  //   this.name       = name;
  //   this.nationalID = nationalID;
  //   this.email      = email;
  //   this.age        = age;
  //   this.gender     = gender;
  //   this.mobile     = mobile;
  //   this.password   = password;
  // }

}

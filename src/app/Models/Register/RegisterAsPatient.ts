import { GenderEnum } from "../../Enums/GenderEnum.enum";
import { IRegisterAsPatient } from "./IRegisterAsPatient";

export class RegisterAsPatient implements IRegisterAsPatient {

  nationalID: string  = "";
  name: string = "";
  mobile: string = "";
  email: string = "";
  age: number = 0;
  gender: GenderEnum = GenderEnum.Male;
  password: string = "";

  constructor(){}

}

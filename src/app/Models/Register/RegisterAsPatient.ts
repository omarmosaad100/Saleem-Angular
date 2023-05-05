import { GenderEnum } from "../../Enums/GenderEnum.enum";
import { IRegister } from "./IRegister";

export class RegisterAsPatient implements IRegister {

  nationalID: string  = "";
  name: string = "";
  mobile: string = "";
  email: string = "";
  age: number = 0;
  gender: GenderEnum = GenderEnum.Male;
  password: string = "";

  constructor(){}

}

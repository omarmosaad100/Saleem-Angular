import { GenderEnum } from "src/app/Enums/GenderEnum.enum";
import { Specialization } from "src/app/Enums/Specialization.enum";
import { IRegister } from "./IRegister";

export class RegisterAsDoctor implements IRegister {

  nationalID: string  = "";
  name: string = "";
  mobile: string = "";
  email: string = "";
  age: number = 0;
  gender: GenderEnum = GenderEnum.Male;
  password: string = "";

  // doctor
  license:string = ""
  specialization:Specialization = Specialization.Cardiologist;


}

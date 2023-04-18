import { GenderEnum } from "../Enums/GenderEnum.enum";

export interface IRegisterPatient {
  nationalID: string;
  name: string;
  mobile: string;
  email: string;
  age: number;
  gender: GenderEnum;
  password: string;
}
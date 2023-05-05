import { GenderEnum } from "../../Enums/GenderEnum.enum";

export interface IRegister {
  nationalID: string;
  name: string;
  mobile: string;
  email: string;
  gender: GenderEnum;
  password: string;
}

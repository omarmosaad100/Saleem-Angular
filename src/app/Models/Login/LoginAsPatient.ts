import { ILoginAsPatient } from "./ILoginAsPatient";

export class LoginAsPatient implements ILoginAsPatient {
  userNationalId: string = "";
  password: string = "";

  constructor(){}

}

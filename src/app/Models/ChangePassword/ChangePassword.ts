import { IChangePassword } from "./IChangePassword";

export class ChangePassword implements IChangePassword {
  oldPassword: string = "";
  newPassword: string = "";
}

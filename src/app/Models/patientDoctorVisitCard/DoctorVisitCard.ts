import { IDoctorVisitCard } from './IDoctorVisitCard';
import { Specialization } from '../../Enums/SpecializationEnum.enum';
import { GenderEnum } from '../../Enums/GenderEnum.enum';

export class DoctorVisitCard implements IDoctorVisitCard {
  id:string=""
  name: string = '';
  specialization :number=0;
  gender: GenderEnum = GenderEnum.Male;
  appointmentDate :Date = new Date();
}

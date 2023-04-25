import {
  Specialization,
  SpecializationMap,
} from '../../Enums/SpecializationEnum.enum';
import { GenderEnum } from '../../Enums/GenderEnum.enum';

export interface IDoctorVisitCard {
  id: string;
  name: string;
  specialization: number;
  gender: GenderEnum;
  appointmentDate: Date;
}

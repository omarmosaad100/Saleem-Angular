import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';
import { GenderEnum } from '../../Enums/GenderEnum.enum';

export interface IDoctorVisitCard {
    name: string;
    specialization	:number;
    gender:GenderEnum;
    appointmentDate :Date;

}

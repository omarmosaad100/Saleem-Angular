import { iPatientDrugs } from "./ipatientDurgs";

export class PatientDurgs implements iPatientDrugs{
    name: string ='';
    drugId: string='';
    startDate?: Date ;
    endDate?: Date ;
    dosage?: string ;
    timesPerDay?: number;
}

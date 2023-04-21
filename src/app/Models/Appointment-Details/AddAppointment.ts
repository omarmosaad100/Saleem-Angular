import { IAddAppointment } from "./IAddAppointment";

export class AddAppointment implements IAddAppointment{
    Date: Date =new Date();
    Comment: string="";
    PatientName: string="";
    DoctorName: string="";
    DiagnosedIssues: string[]=[];
    DescribedDrugs: string[]=[];
    
}
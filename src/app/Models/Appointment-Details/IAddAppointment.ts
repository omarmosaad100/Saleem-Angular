export interface IAddAppointment{
    Date : Date;
    Comment:string;
    PatientName:string;
    DoctorName :string;
    DiagnosedIssues:string[];
    DescribedDrugs:string[]
}
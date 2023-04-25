interface Diagnose {
    id: string;
    name: string;
    treatmentDrugs: string[];
    conflictingDrugs: string[];
    appointments: Appointment[];
  }
  
  interface Appointment {
    id: string;
    rating: number;
    date: string;
    comment: string;
    pId: string;
    dId: string;
    doctor: Doctor;
    describedDrugs: string[];
    diagnosedIssues: Diagnose[];
    specialization: number;
  }
  
  interface Doctor {
    id: string;
    name: string;
    specialization: number;
    gender: number;
    licenseId: string;
    appointments: Appointment[];
  }
  

export class PatientAppointment {
    name: string | null ='';
    specialization: number =0;
    comment: string ='';
    describedDrugs: string[] =[];
    diagnosedIssues: Diagnose[]=[];
}

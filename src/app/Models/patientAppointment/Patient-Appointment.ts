interface Diagnose {
    id: string;
    name: string;
    treatmentDrugs: string[];
    conflictingDrugs: string[];
  }
interface Drugs {
    id: string;
    name: string;
  }

  
  interface Doctor {
    id: string;
    name: string;
    specialization: number;
    gender: number;
    licenseId: string;
  }
  

export class PatientAppointment {
    name: string | null ='';
    doctor? :Doctor ;
    specialization: number =0;
    date:Date=new Date;
    comment: string ='';
    describedDrugs: Drugs[] =[];
    diagnosedIssues: Diagnose[]=[];
}

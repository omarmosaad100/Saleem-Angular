export interface IAppointment {
    id: string;
    rating: number;
    date: string;
    comment: string;
    pId: string;
    patient: any;
    dId: string;
    doctor: any;
    describedDrugs: any[];
    specialization: number;
  }
  
  export class Appointment implements IAppointment {
    constructor(
      public id: string,
      public rating: number,
      public date: string,
      public comment: string,
      public pId: string,
      public patient: any,
      public dId: string,
      public doctor: any,
      public describedDrugs: any[],
      public specialization: number
    ) {}
  }
  
  export interface IDiagnosedIssue {
    id: string;
    name: string;
    treatmentDrugs: any[];
    conflictingDrugs: any[];
    appointments: IAppointment[];
    patients: any[];
  }
  
  export class DiagnosedIssue implements IDiagnosedIssue {
    constructor(
      public id: string,
      public name: string,
      public treatmentDrugs: any[],
      public conflictingDrugs: any[],
      public appointments: Appointment[],
      public patients: any[]
    ) {}
  }
  
  export interface ISpecialization {
    specialization: number;
    diagnosedIssues: IDiagnosedIssue[];
  }
  

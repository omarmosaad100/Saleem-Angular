import { DiagnosedIssue, ISpecialization } from "./iPatientIllnesses";

export class patientIllnesses implements ISpecialization {
    constructor(
      public specialization: number,
      public diagnosedIssues: DiagnosedIssue[]
    ){}

}

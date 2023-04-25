export interface iPatientDrugs {
    name: string;
    drugId: string;
    startDate?: Date;
    endDate?: Date;
    dosage?: string;
    timesPerDay?: number;
}

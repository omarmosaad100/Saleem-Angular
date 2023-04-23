import {DrugTakingMethod} from '../update-drug/drugTakingMethod.enum';

export class DrugDto {
  id: any;
  name: string;
  method: DrugTakingMethod;
  treatedIssuesIds?: any;
  conflictedIssuesIds?: any;

  constructor(name: string,
              method: DrugTakingMethod,
              treatedIssuesIds?: any,
              conflictedIssuesIds?: any) {
    this.name = name;
    this.method = method;
    this.treatedIssuesIds = treatedIssuesIds;
    this.conflictedIssuesIds = conflictedIssuesIds;
  }
}

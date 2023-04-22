import { DrugTakingMethod } from './drugTakingMethod.enum';

export class NewDrugDto {
  name: string;
  method: DrugTakingMethod;
  // treatedIssuesIds?: string[];
  // conflictedIssuesIds?: string[];

  constructor(name: string, method: DrugTakingMethod) { //, treatedIssuesIds?: string[], conflictedIssuesIds?: string[]
    this.name = name;
    this.method = method;
    // this.treatedIssuesIds = treatedIssuesIds;
    // this.conflictedIssuesIds = conflictedIssuesIds;
  }
}

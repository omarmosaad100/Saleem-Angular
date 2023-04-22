import { DrugTakingMethod } from '../update-drug/drugTakingMethod.enum';

export class DrugDto {
  id:any;
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

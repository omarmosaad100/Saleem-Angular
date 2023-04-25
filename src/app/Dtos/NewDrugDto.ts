import {DrugTakingMethod} from '../Enums/drugTakingMethod.enum';
import {v4 as uuidv4} from 'uuid';

export class NewDrugDto {
  name: string;
  method: DrugTakingMethod;
  treatedIssuesIds?: typeof uuidv4[];
  conflictedIssuesIds?: typeof uuidv4[];

  constructor(name: string,
              method: DrugTakingMethod,
              treatedIssuesIds?: typeof uuidv4[],
              conflictedIssuesIds?: typeof uuidv4[]) {
    this.name = name;
    this.method = method;
    this.treatedIssuesIds = treatedIssuesIds;
    this.conflictedIssuesIds = conflictedIssuesIds;
  }
}

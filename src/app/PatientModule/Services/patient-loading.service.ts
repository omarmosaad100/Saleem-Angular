import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeLoadingService {

  loadingStatus:any;
  loading:Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loading.next(false);
    this.loading.subscribe(s =>
      this.loadingStatus = s
    )

  }

  loadPages(){
    this.loading?.next(true);
  }

  unloadPages(){
    this.loading?.next(false);
  }

  getLoadingStatus(){
    return this.loadingStatus;
  }

}

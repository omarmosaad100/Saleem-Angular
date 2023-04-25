/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { APIUrlConnectionService } from './APIUrlConnection.service';

describe('Service: APIUrlConnection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIUrlConnectionService]
    });
  });

  it('should ...', inject([APIUrlConnectionService], (service: APIUrlConnectionService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerviewService } from './customerview.service';

describe('CustomerviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerviewService]
    });
  });

  it('should ...', inject([CustomerviewService], (service: CustomerviewService) => {
    expect(service).toBeTruthy();
  }));
});

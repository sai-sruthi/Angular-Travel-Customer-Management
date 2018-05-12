/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerListService } from './customer-list.service';

describe('CustomerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerListService]
    });
  });

  it('should ...', inject([CustomerListService], (service: CustomerListService) => {
    expect(service).toBeTruthy();
  }));
});

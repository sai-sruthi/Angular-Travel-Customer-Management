/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerupdateService } from './customerupdate.service';

describe('CustomerupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerupdateService]
    });
  });

  it('should ...', inject([CustomerupdateService], (service: CustomerupdateService) => {
    expect(service).toBeTruthy();
  }));
});

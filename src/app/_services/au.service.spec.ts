/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuService } from './au.service';

describe('Service: Au', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuService]
    });
  });

  it('should ...', inject([AuService], (service: AuService) => {
    expect(service).toBeTruthy();
  }));
});

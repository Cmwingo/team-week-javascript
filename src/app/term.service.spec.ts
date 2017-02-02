/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TermService } from './term.service';

describe('TermService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermService]
    });
  });

  it('should ...', inject([TermService], (service: TermService) => {
    expect(service).toBeTruthy();
  }));
});

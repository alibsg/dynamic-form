import { TestBed } from '@angular/core/testing';

import { DynamicFormService } from './dynamic-form.service';

describe('DynamicFormLibraryService', () => {
  let service: DynamicFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

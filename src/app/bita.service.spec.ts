import { TestBed } from '@angular/core/testing';

import { bitaservice } from './bita.service';

describe('BitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: bitaservice = TestBed.get(bitaservice);
    expect(service).toBeTruthy();
  });
});

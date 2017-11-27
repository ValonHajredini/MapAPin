import { TestBed, inject } from '@angular/core/testing';

import { InitMarkersService } from './init-markers.service';

describe('InitMarkersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitMarkersService]
    });
  });

  it('should be created', inject([InitMarkersService], (service: InitMarkersService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PandorabotApiService } from './pandorabot-api.service';

describe('PandorabotApiService', () => {
  let service: PandorabotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PandorabotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MusicafyFirebaseService } from './musicafy-firebase.service';

describe('MusicafyFirebaseService', () => {
  let service: MusicafyFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicafyFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

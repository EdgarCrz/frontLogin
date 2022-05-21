import { TestBed } from '@angular/core/testing';

import { GuardInicioGuard } from './guard-inicio.guard';

describe('GuardInicioGuard', () => {
  let guard: GuardInicioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardInicioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusUpload } from './tus-upload';

describe('TusUpload', () => {
  let component: TusUpload;
  let fixture: ComponentFixture<TusUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TusUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

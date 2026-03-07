import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempResumePageComponent } from './temp-resume-page.component';

describe('TempResumePageComponent', () => {
  let component: TempResumePageComponent;
  let fixture: ComponentFixture<TempResumePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempResumePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempResumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

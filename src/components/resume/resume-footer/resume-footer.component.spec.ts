import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFooterComponent } from './resume-footer.component';

describe('ResumeFooterComponent', () => {
  let component: ResumeFooterComponent;
  let fixture: ComponentFixture<ResumeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

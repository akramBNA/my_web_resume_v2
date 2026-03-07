import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeNavbarComponent } from './resume-navbar.component';

describe('ResumeNavbarComponent', () => {
  let component: ResumeNavbarComponent;
  let fixture: ComponentFixture<ResumeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

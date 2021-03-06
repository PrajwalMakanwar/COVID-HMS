import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PendingAppointmentComponent } from './pending-appointment.component';

describe('PendingAppointmentComponent', () => {
  let component: PendingAppointmentComponent;
  let fixture: ComponentFixture<PendingAppointmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAppointmentComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [PendingAppointmentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

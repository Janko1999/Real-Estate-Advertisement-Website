import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperErrorsExample } from './stepper-errors-example.component';

describe('StepperErrorsExampleComponent', () => {
  let component: StepperErrorsExample;
  let fixture: ComponentFixture<StepperErrorsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperErrorsExample ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperErrorsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

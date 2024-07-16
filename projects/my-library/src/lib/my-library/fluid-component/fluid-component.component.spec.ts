import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidComponentComponent } from './fluid-component.component';

describe('FluidComponentComponent', () => {
  let component: FluidComponentComponent;
  let fixture: ComponentFixture<FluidComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FluidComponentComponent]
    });
    fixture = TestBed.createComponent(FluidComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

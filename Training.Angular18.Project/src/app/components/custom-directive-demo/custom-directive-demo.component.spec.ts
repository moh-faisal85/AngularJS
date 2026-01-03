import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveDemoComponent } from './custom-directive-demo.component';

describe('CustomDirectiveDemoComponent', () => {
  let component: CustomDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectiveDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

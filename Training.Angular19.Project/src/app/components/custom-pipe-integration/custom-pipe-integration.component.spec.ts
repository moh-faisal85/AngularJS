import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeIntegrationComponent } from './custom-pipe-integration.component';

describe('CustomPipeIntegrationComponent', () => {
  let component: CustomPipeIntegrationComponent;
  let fixture: ComponentFixture<CustomPipeIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipeIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

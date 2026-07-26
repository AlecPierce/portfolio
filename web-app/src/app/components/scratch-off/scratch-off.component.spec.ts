import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchOffComponent } from './scratch-off.component';

describe('ScratchOffComponent', () => {
  let component: ScratchOffComponent;
  let fixture: ComponentFixture<ScratchOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtkozottakComponent } from './atkozottak.component';

describe('AtkozottakComponent', () => {
  let component: AtkozottakComponent;
  let fixture: ComponentFixture<AtkozottakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtkozottakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtkozottakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeletNepeComponent } from './kelet-nepe.component';

describe('KeletNepeComponent', () => {
  let component: KeletNepeComponent;
  let fixture: ComponentFixture<KeletNepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeletNepeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeletNepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

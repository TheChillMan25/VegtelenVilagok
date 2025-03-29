import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtakComponent } from './utak.component';

describe('UtakComponent', () => {
  let component: UtakComponent;
  let fixture: ComponentFixture<UtakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

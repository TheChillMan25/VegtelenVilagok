import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FajokComponent } from './fajok.component';

describe('FajokComponent', () => {
  let component: FajokComponent;
  let fixture: ComponentFixture<FajokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FajokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FajokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

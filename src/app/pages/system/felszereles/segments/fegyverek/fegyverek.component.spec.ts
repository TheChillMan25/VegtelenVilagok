import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FegyverekComponent } from './fegyverek.component';

describe('FegyverekComponent', () => {
  let component: FegyverekComponent;
  let fixture: ComponentFixture<FegyverekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FegyverekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FegyverekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

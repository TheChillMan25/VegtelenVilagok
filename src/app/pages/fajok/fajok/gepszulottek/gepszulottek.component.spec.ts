import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GepszulottekComponent } from './gepszulottek.component';

describe('GepszulottekComponent', () => {
  let component: GepszulottekComponent;
  let fixture: ComponentFixture<GepszulottekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GepszulottekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GepszulottekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

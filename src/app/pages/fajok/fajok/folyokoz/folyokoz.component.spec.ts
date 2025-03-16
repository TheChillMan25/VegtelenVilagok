import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolyokozComponent } from './folyokoz.component';

describe('FolyokozComponent', () => {
  let component: FolyokozComponent;
  let fixture: ComponentFixture<FolyokozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolyokozComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolyokozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

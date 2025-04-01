import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargyakComponent } from './targyak.component';

describe('TargyakComponent', () => {
  let component: TargyakComponent;
  let fixture: ComponentFixture<TargyakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargyakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

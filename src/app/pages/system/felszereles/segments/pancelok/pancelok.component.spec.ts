import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancelokComponent } from './pancelok.component';

describe('PancelokComponent', () => {
  let component: PancelokComponent;
  let fixture: ComponentFixture<PancelokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PancelokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancelokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

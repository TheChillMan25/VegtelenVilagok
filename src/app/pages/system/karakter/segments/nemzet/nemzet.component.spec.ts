import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemzetComponent } from './nemzet.component';

describe('NemzetComponent', () => {
  let component: NemzetComponent;
  let fixture: ComponentFixture<NemzetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NemzetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NemzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

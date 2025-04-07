import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharTemplComponent } from './char-templ.component';

describe('CharTemplComponent', () => {
  let component: CharTemplComponent;
  let fixture: ComponentFixture<CharTemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharTemplComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharTemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

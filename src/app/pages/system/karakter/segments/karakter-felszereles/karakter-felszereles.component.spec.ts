import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarakterFelszerelesComponent } from './karakter-felszereles.component';

describe('KarakterFelszerelesComponent', () => {
  let component: KarakterFelszerelesComponent;
  let fixture: ComponentFixture<KarakterFelszerelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarakterFelszerelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarakterFelszerelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarakterKeszitoComponent } from './karakter-keszito.component';

describe('KarakterKeszitoComponent', () => {
  let component: KarakterKeszitoComponent;
  let fixture: ComponentFixture<KarakterKeszitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarakterKeszitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarakterKeszitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

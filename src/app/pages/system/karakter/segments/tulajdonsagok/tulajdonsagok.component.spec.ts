import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulajdonsagokComponent } from './tulajdonsagok.component';

describe('TulajdonsagokComponent', () => {
  let component: TulajdonsagokComponent;
  let fixture: ComponentFixture<TulajdonsagokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TulajdonsagokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TulajdonsagokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

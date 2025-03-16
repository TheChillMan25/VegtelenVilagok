import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToronyvarosokComponent } from './toronyvarosok.component';

describe('ToronyvarosokComponent', () => {
  let component: ToronyvarosokComponent;
  let fixture: ComponentFixture<ToronyvarosokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToronyvarosokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToronyvarosokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

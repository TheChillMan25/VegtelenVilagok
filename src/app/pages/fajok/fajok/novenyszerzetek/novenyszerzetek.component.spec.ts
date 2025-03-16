import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenyszerzetekComponent } from './novenyszerzetek.component';

describe('NovenyszerzetekComponent', () => {
  let component: NovenyszerzetekComponent;
  let fixture: ComponentFixture<NovenyszerzetekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovenyszerzetekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovenyszerzetekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

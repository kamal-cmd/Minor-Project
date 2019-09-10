import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtrainerComponent } from './ourtrainer.component';

describe('OurtrainerComponent', () => {
  let component: OurtrainerComponent;
  let fixture: ComponentFixture<OurtrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurtrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

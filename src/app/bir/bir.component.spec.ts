import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirComponent } from './bir.component';

describe('BirComponent', () => {
  let component: BirComponent;
  let fixture: ComponentFixture<BirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

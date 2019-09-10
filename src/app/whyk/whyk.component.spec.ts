import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhykComponent } from './whyk.component';

describe('WhykComponent', () => {
  let component: WhykComponent;
  let fixture: ComponentFixture<WhykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

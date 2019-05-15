import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordiansComponent } from './accordians.component';

describe('AccordiansComponent', () => {
  let component: AccordiansComponent;
  let fixture: ComponentFixture<AccordiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

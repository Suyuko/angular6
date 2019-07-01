import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxitemComponent } from './boxitem.component';

describe('BoxitemComponent', () => {
  let component: BoxitemComponent;
  let fixture: ComponentFixture<BoxitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNinjaComponent } from './new-ninja.component';

describe('NewNinjaComponent', () => {
  let component: NewNinjaComponent;
  let fixture: ComponentFixture<NewNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

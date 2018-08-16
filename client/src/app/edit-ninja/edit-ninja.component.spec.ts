import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNinjaComponent } from './edit-ninja.component';

describe('EditNinjaComponent', () => {
  let component: EditNinjaComponent;
  let fixture: ComponentFixture<EditNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

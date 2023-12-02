import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrdctComponent } from './edit-prdct.component';

describe('EditPrdctComponent', () => {
  let component: EditPrdctComponent;
  let fixture: ComponentFixture<EditPrdctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrdctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

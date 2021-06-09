import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWillComponent } from './add-will.component';

describe('AddWillComponent', () => {
  let component: AddWillComponent;
  let fixture: ComponentFixture<AddWillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

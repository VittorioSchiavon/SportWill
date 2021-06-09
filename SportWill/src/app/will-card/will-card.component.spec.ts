import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillCardComponent } from './will-card.component';

describe('WillCardComponent', () => {
  let component: WillCardComponent;
  let fixture: ComponentFixture<WillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

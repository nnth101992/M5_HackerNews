import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBarComponent } from './new-bar.component';

describe('NewBarComponent', () => {
  let component: NewBarComponent;
  let fixture: ComponentFixture<NewBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

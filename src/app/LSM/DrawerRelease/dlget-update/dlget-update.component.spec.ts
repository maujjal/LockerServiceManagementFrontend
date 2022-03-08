import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLGetUpdateComponent } from './dlget-update.component';

describe('DLGetUpdateComponent', () => {
  let component: DLGetUpdateComponent;
  let fixture: ComponentFixture<DLGetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLGetUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLGetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

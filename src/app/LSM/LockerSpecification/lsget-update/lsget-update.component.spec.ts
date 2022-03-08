import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSGetUpdateComponent } from './lsget-update.component';

describe('LSGetUpdateComponent', () => {
  let component: LSGetUpdateComponent;
  let fixture: ComponentFixture<LSGetUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSGetUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSGetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

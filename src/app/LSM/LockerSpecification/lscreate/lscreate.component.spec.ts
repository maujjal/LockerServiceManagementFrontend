import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSCreateComponent } from './lscreate.component';

describe('LSCreateComponent', () => {
  let component: LSCreateComponent;
  let fixture: ComponentFixture<LSCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LSCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LSCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

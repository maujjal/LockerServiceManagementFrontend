import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLCreateComponent } from './dlcreate.component';

describe('DLCreateComponent', () => {
  let component: DLCreateComponent;
  let fixture: ComponentFixture<DLCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listComponent } from './list.component';

describe('listComponent', () => {
  let component: listComponent;
  let fixture: ComponentFixture<listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

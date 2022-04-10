import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonSwansonComponent } from './ron-swanson.component';

describe('RonSwansonComponent', () => {
  let component: RonSwansonComponent;
  let fixture: ComponentFixture<RonSwansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RonSwansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RonSwansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AibodyComponent } from './aibody.component';

describe('AibodyComponent', () => {
  let component: AibodyComponent;
  let fixture: ComponentFixture<AibodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AibodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AibodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

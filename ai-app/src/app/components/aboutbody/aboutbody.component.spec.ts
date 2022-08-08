import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbodyComponent } from './aboutbody.component';

describe('AboutbodyComponent', () => {
  let component: AboutbodyComponent;
  let fixture: ComponentFixture<AboutbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

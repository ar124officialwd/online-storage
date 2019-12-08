import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMediaComponent } from './open-media.component';

describe('OpenMediaComponent', () => {
  let component: OpenMediaComponent;
  let fixture: ComponentFixture<OpenMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

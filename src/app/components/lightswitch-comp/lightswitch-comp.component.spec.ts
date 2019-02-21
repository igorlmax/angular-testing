import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchCompComponent } from './lightswitch-comp.component';

describe('LightswitchCompComponent', () => {
  let component: LightswitchCompComponent;
  let fixture: ComponentFixture<LightswitchCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

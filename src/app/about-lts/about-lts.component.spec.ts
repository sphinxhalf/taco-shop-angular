import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLTSComponent } from './about-lts.component';

describe('AboutLTSComponent', () => {
  let component: AboutLTSComponent;
  let fixture: ComponentFixture<AboutLTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutLTSComponent]
    });
    fixture = TestBed.createComponent(AboutLTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

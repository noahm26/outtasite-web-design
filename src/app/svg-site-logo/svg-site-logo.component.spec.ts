import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSiteLogoComponent } from './svg-site-logo.component';

describe('SvgSiteLogoComponent', () => {
  let component: SvgSiteLogoComponent;
  let fixture: ComponentFixture<SvgSiteLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgSiteLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAboutMainComponent } from './view-about-main.component';

describe('ViewAboutMainComponent', () => {
  let component: ViewAboutMainComponent;
  let fixture: ComponentFixture<ViewAboutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAboutMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAboutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

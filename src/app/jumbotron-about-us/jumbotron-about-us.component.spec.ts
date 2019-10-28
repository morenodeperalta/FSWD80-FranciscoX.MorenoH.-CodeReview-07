import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronAboutUsComponent } from './jumbotron-about-us.component';

describe('JumbotronAboutUsComponent', () => {
  let component: JumbotronAboutUsComponent;
  let fixture: ComponentFixture<JumbotronAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

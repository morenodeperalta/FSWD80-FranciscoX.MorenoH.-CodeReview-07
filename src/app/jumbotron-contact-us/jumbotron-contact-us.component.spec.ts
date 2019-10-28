import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronContactUsComponent } from './jumbotron-contact-us.component';

describe('JumbotronContactUsComponent', () => {
  let component: JumbotronContactUsComponent;
  let fixture: ComponentFixture<JumbotronContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

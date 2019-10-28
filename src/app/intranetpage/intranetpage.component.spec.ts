import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetpageComponent } from './intranetpage.component';

describe('IntranetpageComponent', () => {
  let component: IntranetpageComponent;
  let fixture: ComponentFixture<IntranetpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntranetpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

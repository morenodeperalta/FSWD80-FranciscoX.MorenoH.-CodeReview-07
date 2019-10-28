import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronArgentinaComponent } from './jumbotron-argentina.component';

describe('JumbotronArgentinaComponent', () => {
  let component: JumbotronArgentinaComponent;
  let fixture: ComponentFixture<JumbotronArgentinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronArgentinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

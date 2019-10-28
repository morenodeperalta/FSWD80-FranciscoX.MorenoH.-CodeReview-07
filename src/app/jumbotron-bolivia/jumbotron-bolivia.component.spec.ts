import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronBoliviaComponent } from './jumbotron-bolivia.component';

describe('JumbotronBoliviaComponent', () => {
  let component: JumbotronBoliviaComponent;
  let fixture: ComponentFixture<JumbotronBoliviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronBoliviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronBoliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronBrasilComponent } from './jumbotron-brasil.component';

describe('JumbotronBrasilComponent', () => {
  let component: JumbotronBrasilComponent;
  let fixture: ComponentFixture<JumbotronBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

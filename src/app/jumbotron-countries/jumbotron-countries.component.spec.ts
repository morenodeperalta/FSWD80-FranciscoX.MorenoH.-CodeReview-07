import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronCountriesComponent } from './jumbotron-countries.component';

describe('JumbotronCountriesComponent', () => {
  let component: JumbotronCountriesComponent;
  let fixture: ComponentFixture<JumbotronCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

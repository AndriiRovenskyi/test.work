import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTableComponent } from './ip-table.component';

describe('IpTableComponent', () => {
  let component: IpTableComponent;
  let fixture: ComponentFixture<IpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

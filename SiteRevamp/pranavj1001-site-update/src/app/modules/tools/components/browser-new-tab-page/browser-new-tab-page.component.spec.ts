import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserNewTabPageComponent } from './browser-new-tab-page.component';

describe('BrowserNewTabPageComponent', () => {
  let component: BrowserNewTabPageComponent;
  let fixture: ComponentFixture<BrowserNewTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserNewTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserNewTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

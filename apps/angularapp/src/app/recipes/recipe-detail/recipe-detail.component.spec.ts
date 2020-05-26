import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipDetailComponent } from './recipe-detail.component';

describe('RecipDetailComponent', () => {
  let component: RecipDetailComponent;
  let fixture: ComponentFixture<RecipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNasabahComponent } from './list-nasabah.component';

describe('ListNasabahComponent', () => {
  let component: ListNasabahComponent;
  let fixture: ComponentFixture<ListNasabahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNasabahComponent]
    });
    fixture = TestBed.createComponent(ListNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

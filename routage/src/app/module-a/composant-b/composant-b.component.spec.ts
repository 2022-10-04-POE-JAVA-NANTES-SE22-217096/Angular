import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantBComponent } from './composant-b.component';

describe('ComposantBComponent', () => {
  let component: ComposantBComponent;
  let fixture: ComponentFixture<ComposantBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

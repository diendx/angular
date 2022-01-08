import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmapComponent } from './boxmap.component';

describe('BoxmapComponent', () => {
  let component: BoxmapComponent;
  let fixture: ComponentFixture<BoxmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

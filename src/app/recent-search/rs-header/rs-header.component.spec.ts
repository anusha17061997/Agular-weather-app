import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsHeaderComponent } from './rs-header.component';

describe('RsHeaderComponent', () => {
  let component: RsHeaderComponent;
  let fixture: ComponentFixture<RsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

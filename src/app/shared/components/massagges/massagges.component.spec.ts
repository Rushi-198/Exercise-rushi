import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassaggesComponent } from './massagges.component';

describe('MassaggesComponent', () => {
  let component: MassaggesComponent;
  let fixture: ComponentFixture<MassaggesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassaggesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

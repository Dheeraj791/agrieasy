import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmregistrationComponent } from './farmregistration.component';

describe('FarmregistrationComponent', () => {
  let component: FarmregistrationComponent;
  let fixture: ComponentFixture<FarmregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

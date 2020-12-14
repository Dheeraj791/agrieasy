import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CropsearchComponent } from './cropsearch.component';

describe('CropsearchComponent', () => {
  let component: CropsearchComponent;
  let fixture: ComponentFixture<CropsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

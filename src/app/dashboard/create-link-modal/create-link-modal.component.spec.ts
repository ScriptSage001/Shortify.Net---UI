import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinkModalComponent } from './create-link-modal.component';

describe('CreateLinkModalComponent', () => {
  let component: CreateLinkModalComponent;
  let fixture: ComponentFixture<CreateLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLinkModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

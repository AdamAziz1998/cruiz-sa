import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePageBodyComponent } from './white-page-body.component';

describe('WhitePageBodyComponent', () => {
  let component: WhitePageBodyComponent;
  let fixture: ComponentFixture<WhitePageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitePageBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitePageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

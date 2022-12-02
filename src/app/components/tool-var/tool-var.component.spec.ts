import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolVarComponent } from './tool-var.component';

describe('ToolVarComponent', () => {
  let component: ToolVarComponent;
  let fixture: ComponentFixture<ToolVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

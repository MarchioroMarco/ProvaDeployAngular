import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoVelocitaComponent } from './consumo-velocita.component';

describe('ConsumoVelocitaComponent', () => {
  let component: ConsumoVelocitaComponent;
  let fixture: ComponentFixture<ConsumoVelocitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoVelocitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoVelocitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

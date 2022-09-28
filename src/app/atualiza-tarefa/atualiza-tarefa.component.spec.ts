import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaTarefaComponent } from './atualiza-tarefa.component';

describe('AtualizaTarefaComponent', () => {
  let component: AtualizaTarefaComponent;
  let fixture: ComponentFixture<AtualizaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

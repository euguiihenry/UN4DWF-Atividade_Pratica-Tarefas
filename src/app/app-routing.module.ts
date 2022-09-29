import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { AtualizaTarefaComponent } from './atualiza-tarefa/atualiza-tarefa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tarefa',
    component: NovaTarefaComponent
  },
  {
    path: 'nova',
    component: NovaTarefaComponent
  },
  {
    path: 'atualiza/:id',
    component: AtualizaTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

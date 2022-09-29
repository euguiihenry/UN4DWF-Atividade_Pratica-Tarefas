import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {
  public categories: string[] = ['doméstica', 'trabalho', 'pessoal'];
  public categorySelectedCategory: string = '';

  newTaskObj = {};
  itemName: string = '';
  itemDueDate: any;
  itemPriority: any;
  itemCategory: string = '';


  constructor(private rota: Router, private tarefaServ: TarefaService) { }

  ngOnInit(): void {
  }

  public async add() {
    let uid: any = Date.now();
    uid = uid.toString(16);

    if(this.itemName && this.itemDueDate && this.categorySelectedCategory) {
      this.newTaskObj = {
        itemName: this.itemName,
        itemDueDate: this.itemDueDate,
        itemPriority: this.itemPriority,
        itemCategory: this.categorySelectedCategory
      };

      this.tarefaServ.addTask(uid, this.newTaskObj);

      this.rota.navigate(['/home']);

    } else{
      alert('Não é possível salvar uma tarefa vazia. Insira os dados básicos (nome, data e categoria)');

    }
  }

  public selectCategory(index: number) {
    this.categorySelectedCategory = this.categories[index];

    //console.log(this.categorySelectedCategory);
  }
}

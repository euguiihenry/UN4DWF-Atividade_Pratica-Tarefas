import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-atualiza-tarefa',
  templateUrl: './atualiza-tarefa.component.html',
  styleUrls: ['./atualiza-tarefa.component.css']
})
export class AtualizaTarefaComponent implements OnInit {
  key: string = '';

  categories = ['domestico', 'pessoal', 'trabalho'];
  categorySelectedCategory: string = '';

  newTaskObj = {}
  itemName: string = '';
  itemDueDate: any;
  itemPriority: string = '';
  itemCategory: string = '';

  constructor(private rota: Router, private rotaAtiva: ActivatedRoute, private tarefaServ: TarefaService) { }

  ngOnInit(): void {
    const id: string = this.rotaAtiva.snapshot.paramMap.get('id') || '0';

    this.key = id;

    console.log(id);

    this.tarefaServ.getTask(id)
      .then((task: any) => {
        this.itemName = task.itemName;
        this.itemDueDate = task.itemDueDate;
        this.itemPriority = task.itemPriority;
        this.categorySelectedCategory = task.itemCategory;
      });

  }

  public selectCategory(index: number) {
    this.categorySelectedCategory = this.categories[index];
  }

  async update() {

    this.newTaskObj = ({
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
    });


    let uid = this.key;

    await this.tarefaServ.updateTask(uid, this.newTaskObj);

    this.rota.navigate(['/home']);
  }

}
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today = Date.now();
  todoList = [
    {
      key: '001',
      value: {
        itemName: 'cozinhar',
        itemPriority: 'medio',
        itemCategory: 'domestica',
        itemDueCategory: Date.now()
      }
    },
    {
      key: '002',
      value: {
        itemName: 'programar',
        itemPriority: 'alto',
        itemCategory: 'trabalho',
        itemDueCategory: Date.now()
      }
    },
    {
      key: '001',
      value: {
        itemName: 'jogar',
        itemPriority: 'baixo',
        itemCategory: 'pessoal',
        itemDueCategory: Date.now()
      }
    }
  ];

  constructor(private tarefaServ: TarefaService) { }

  ngOnInit(): void {

    this.todoList = this.tarefaServ.getAllTasks();
    
  }

}

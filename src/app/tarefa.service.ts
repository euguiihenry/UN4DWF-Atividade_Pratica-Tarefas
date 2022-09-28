import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private storage: Storage) {
    this.init();
  }

  public async init() {
    await this.storage.create();
  }

  public async addTask(key: string, value: any) {
    await this.storage.set(key, value);
  }

  public async updateTask(key: string, newValue: any) {
    await this.storage.set(key, newValue);
  }

  public async deleteTask(key: string) {
    await this.storage.remove(key);
  }

  public async getTask(key: string) {
    await this.storage.get(key);
  }

  public getAllTasks() {
    let tasks: any = [];

    this.storage.forEach( (item, key, index) => {
      tasks.push({
        'key': key,
        'value': item
      })
    })

    return tasks;
  }
}

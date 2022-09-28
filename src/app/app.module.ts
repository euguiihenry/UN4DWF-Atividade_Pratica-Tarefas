import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { AtualizaTarefaComponent } from './atualiza-tarefa/atualiza-tarefa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NovaTarefaComponent,
    AtualizaTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot({
      name: '_tarefasDB',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsertCardComponent } from './insert-card/insert-card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule
];

@NgModule({
  declarations: [AppComponent, InsertCardComponent],
  imports: [...MATERIAL_MODULES, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

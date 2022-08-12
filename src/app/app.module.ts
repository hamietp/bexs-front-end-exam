import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsertCardComponent } from './insert-card/insert-card.component';

@NgModule({
  declarations: [	
    AppComponent,
      InsertCardComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

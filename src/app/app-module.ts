import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Secondary } from './secondary/secondary';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDirectove } from './my-directove';

@NgModule({
  declarations: [App, Secondary, MyDirectove],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

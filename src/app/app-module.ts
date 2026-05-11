import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Secondary } from './secondary/secondary';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDirectove } from './my-directove';
import { Menu } from './menu/menu';
import { SterownikLicznika } from './sterownik-licznika/sterownik-licznika';
import { Licznik } from './licznik/licznik';
import { LicznikGlobalny } from './services/licznik-globalny';
import { Formularz } from './formularz/formularz';

@NgModule({
  declarations: [App, Secondary, MyDirectove, Menu, SterownikLicznika, Licznik, Formularz],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), LicznikGlobalny],
  bootstrap: [App],
})
export class AppModule {}

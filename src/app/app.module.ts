import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './_views/home/home.component';
import { AboutComponent } from './_views/about/about.component';
import { MenuComponent } from './_views/menu/menu.component';
import { ContactComponent } from './_views/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, MenuComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

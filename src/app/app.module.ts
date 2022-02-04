import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideAfterDirectiveDirective } from './hide-after-directive.directive';
import { IfLoadedDirective } from './if-loaded.directive';

@NgModule({
  declarations: [
    AppComponent,
    HideAfterDirectiveDirective,
    IfLoadedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

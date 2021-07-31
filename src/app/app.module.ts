import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFlexGrid } from 'src/directives/directives.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlexGrid
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

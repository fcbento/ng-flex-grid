import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularGrid } from 'src/directives/directives.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularGrid
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridDirective } from './grid.directive';
import { ColDirective } from './col.directive';
import { RowDirective } from './row.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GridDirective,
    ColDirective,
    RowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridDirective,
    ColDirective,
    RowDirective
  ]
})
export class AngularGrid { }

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[grid]'
})
export class GridDirective implements OnInit {

  @Input() fluid!: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.fluid ? 'container-fluid' : 'container');
  }

}

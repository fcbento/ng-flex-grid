import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[col]'
})

export class ColDirective implements OnInit {

  @Input() cols!: string;
  @Input() padding!: number;

  constructor(private el: ElementRef) { }

  private toCss(numbers: string): string {

    const cols: any[] = numbers ? numbers.split(' ') : [];
    let classes: string = '';
    let padding = this.padding ? this.padding : 0;

    if (cols[0]) classes += `col-xs-${cols[0]} `
    if (cols[1]) classes += `col-sm-${cols[1]} `
    if (cols[2]) classes += `col-md-${cols[2]} `
    if (cols[3]) classes += `col-lg-${cols[3]} `

    return `${classes}`;
  }

  ngOnInit() {
    this.toCss(this.cols).split(' ').forEach(item => {
      item ? this.el.nativeElement.classList.add(item) : '';
    });

  }

}

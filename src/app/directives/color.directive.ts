import { Directive, Input, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[colorChange]'
})
export class ColorDirective implements OnInit {
  @Input()
  change = 0;
  plusColor = 'green';
  minusColor = 'red';
  constructor(private el : ElementRef) {

  }

  ngOnInit(){
    if(this.change < 0){
        this.el.nativeElement.classList.remove(this.plusColor);
          this.el.nativeElement.classList.add(this.minusColor);
    } else {
      this.el.nativeElement.classList.add(this.plusColor);
        this.el.nativeElement.classList.remove(this.minusColor);
    }
  }

}

import { Directive, Input, ElementRef, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[colorChange]'
})
export class ColorDirective implements OnInit {
  @Input()
  change = 0;
  plusColor = 'green-text';
  minusColor = 'red-text';
  constructor(private el : ElementRef) {

  }

  ngOnInit(){
    if(this.change < 0){
        this.el.nativeElement.querySelector('mat-card-title').classList.remove(this.plusColor);
          this.el.nativeElement.querySelector('mat-card-title').classList.add(this.minusColor);
    } else {
      this.el.nativeElement.querySelector('mat-card-title').classList.add(this.plusColor);
        this.el.nativeElement.querySelector('mat-card-title').classList.remove(this.minusColor);
    }
  }

  @HostListener('mouseover') onMouseOver(){
      //this.el.nativeElement.style.boxShadow = "6px 6px 5px #999";
      this.el.nativeElement.style.transform = "translateY(10px)";
  }

  @HostListener('mouseout') onMouseOut(){
    //  this.el.nativeElement.style.boxShadow = "";
      this.el.nativeElement.style.transform = "";
  }

}

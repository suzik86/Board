import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDaysLeft]'
})
export class DaysLeftDirective implements OnInit {
  @Input() dueDate:Date;
  @Input() isDone:boolean;


  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    const dueDate = new Date(this.dueDate);
    const nowDate = new Date();
    const millisecondsInDay = 24*60*60*1000;

    if(!this.isDone){
      if((dueDate.getTime() - nowDate.getTime())/millisecondsInDay < 3) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', "red")
      } else if((dueDate.getTime() - nowDate.getTime())/millisecondsInDay < 7) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', "yellow")
      }
    }

  }
}

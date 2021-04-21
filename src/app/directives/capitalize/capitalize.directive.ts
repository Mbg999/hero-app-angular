import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.capitalize();
  }

  @HostListener('input', ['$event']) private onInput($event) {
    this.capitalize();
  }

  private capitalize(){
    (this.el.nativeElement as HTMLInputElement).value = (this.el.nativeElement as HTMLInputElement).value.toUpperCase();
  }

}

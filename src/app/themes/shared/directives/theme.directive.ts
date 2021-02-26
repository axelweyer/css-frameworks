import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[themeHost]',
})
export class ThemeDirective implements OnInit {
  
  @Input('themeHost') component!: Type<any>;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private viewContainerRef: ViewContainerRef,
      private cdr: ChangeDetectorRef,
  ) {
    console.log('themeDirective', this.component)
  }

  ngOnInit(): void {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory);
      this.cdr.detectChanges();
  }
}
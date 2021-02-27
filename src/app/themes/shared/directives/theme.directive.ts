import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeModel } from '../models/theme.model';
import { ThemesService } from '../services/themes.service';

@Directive({
    selector: '[themeHost]',
})
export class ThemeDirective implements OnInit, OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private cdr: ChangeDetectorRef,
        private themesService: ThemesService
    ) { }

    ngOnInit(): void {
        const themeActiveSub = this.themesService.themeActive.subscribe((theme: ThemeModel) => {
            if (theme != null) {
                // init theme component
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(theme.type);
                this.viewContainerRef.clear();
                this.viewContainerRef.createComponent(componentFactory);
                // init categories list
                this.themesService.emitCategoriesList(theme.categories);
                // apply changes
                this.cdr.detectChanges();
            }
        });
        this.subscriptions.add(themeActiveSub);
    }
    
    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
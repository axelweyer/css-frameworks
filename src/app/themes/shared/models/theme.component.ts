import { ViewportScroller } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ThemesService } from "../services/themes.service";

@Component({
    selector: 'app-theme',
    template: ''
})
export class ThemeComponent implements OnInit, OnDestroy {

    protected subscriptions: Subscription = new Subscription();

    constructor(protected themesService: ThemesService, protected viewportScroller: ViewportScroller) {}

    ngOnInit(): void {
        const categoryActiveSub = this.themesService.categorySelected.subscribe((categoryActive: string) => {
            if (categoryActive) {
                // this.viewportScroller.scrollToAnchor('#' + categoryActive);
                const scrollId = <HTMLElement>document.querySelector('#' + categoryActive);
                scrollId.scrollIntoView();
            }
        });
        this.subscriptions.add(categoryActiveSub);
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ThemesService } from "../services/themes.service";

@Component({
    selector: 'app-theme',
    template: ''
})
export class ThemeComponent implements OnInit, OnDestroy {

    protected subscriptions: Subscription = new Subscription();

    constructor(protected themesService: ThemesService) {}

    ngOnInit(): void {
        const categoryActiveSub = this.themesService.categorySelected.subscribe((categoryActive: string) => {
            console.log(categoryActive)
        });
        this.subscriptions.add(categoryActiveSub);
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
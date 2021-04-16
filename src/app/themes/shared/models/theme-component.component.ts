import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
@Component({
    selector: 'app-theme-component',
    template: ''
})
export class ThemeComponentComponent implements OnInit {

    protected content: string[] = [];
    protected contentSanitized: SafeHtml[] = [];

    constructor(protected sanitizer: DomSanitizer) {}

    ngOnInit(): void {}

    protected initContent(content: string[]): void {
        this.content = content;
        this.content.filter((code: string) => {
            this.contentSanitized.push(this.sanitizer.bypassSecurityTrustHtml(code));
        });
    }

    public getContent(): string[] {
        return this.content;
    }

    public getContentSanitized(): SafeHtml[] {
        return this.contentSanitized;
    }
}
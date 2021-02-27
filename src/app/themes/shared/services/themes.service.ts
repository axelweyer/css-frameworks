import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemesService {

    public submenu: Subject<string> = new Subject();

    constructor() { }

    public emitSubmenu(value: string) {
        this.submenu.next(value);
    }
}
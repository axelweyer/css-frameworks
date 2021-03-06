export class ThemeModel {

    public id: string;
    public label: string;
    public path: string;
    public type: any;
    public icon: string;
    public categories: any;

    constructor(id: string, label: string, path: string, type: any, icon: string, categories: any) {
        this.id = id;
        this.label = label;
        this.path = path;
        this.type = type;
        this.icon = icon;
        this.categories = categories;
    }
}
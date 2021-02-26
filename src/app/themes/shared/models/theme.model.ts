export class ThemeModel {

    public id: string;
    public label: string;
    public path: string;
    public type: any;

    constructor(id: string, label: string, path: string, type: any) {
        this.id = id;
        this.label = label;
        this.path = path;
        this.type = type;
    }
}
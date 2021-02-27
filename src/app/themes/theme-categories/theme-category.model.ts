export class ThemeCategoryModel {

    public key: string;
    public label: string;
    public isCategory: boolean;
    public isTitle: boolean;

    constructor(key: string, label: string, isCategory: boolean, isTitle: boolean) {
        this.key = key;
        this.label = label;
        this.isCategory = isCategory;
        this.isTitle = isTitle;
    }
}
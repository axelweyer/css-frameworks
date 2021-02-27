import { PuraCategories } from "../../list/pura/pura-categories.utils";
import { PuraComponent } from "../../list/pura/pura.component";
import { ThemeModel } from "../models/theme.model";

export const ThemesEnum: Map<string, ThemeModel> = new Map([
    ['pura', new ThemeModel('pura', 'Pura', 'pura', PuraComponent, 'record', PuraCategories)]
]);
import { ThemeCategoryModel } from "./theme-category.model";

export const ThemesCategories = [
    new ThemeCategoryModel('GENERAL', 'General', true, true), 
    new ThemeCategoryModel('COLORS', 'Colors', true, false),
    new ThemeCategoryModel('FONT', 'Font', true, false),

    new ThemeCategoryModel('', '', false, false),

    new ThemeCategoryModel('TEXTS', 'Texts', true, true),
    new ThemeCategoryModel('LINKS', 'Links', true, false),
    new ThemeCategoryModel('PARAGRAPHS', 'Paragraphs', true, false),
    new ThemeCategoryModel('TITLES', 'Titles', true, false),

    new ThemeCategoryModel('', '', false, false),

    new ThemeCategoryModel('COMPONENTS', 'Components', true, true),
    new ThemeCategoryModel('BUTTONS', 'Buttons', true, false),
    new ThemeCategoryModel('CARDS', 'Cards', true, false),
    new ThemeCategoryModel('CHIPS', 'Chips', true, false),
    new ThemeCategoryModel('MODALS', 'Modals', true, false),
    new ThemeCategoryModel('SPINNERS', 'Spinners', true, false),
    new ThemeCategoryModel('TABLES', 'Tables', true, false),
    new ThemeCategoryModel('TOASTS', 'Toasts', true, false),
    new ThemeCategoryModel('TOOLTIPS', 'Tooltips', true, false),

    new ThemeCategoryModel('', '', false, false),

    new ThemeCategoryModel('FORMS', 'Forms', true, true),
    new ThemeCategoryModel('AUTOCOMPLETE', 'Autocomplete', true, false),
    new ThemeCategoryModel('CHECKBOXES', 'Checkboxes', true, false),
    new ThemeCategoryModel('INPUTS', 'Inputs', true, false),
    new ThemeCategoryModel('RADIOS', 'Radios', true, false),
    new ThemeCategoryModel('SELECTS', 'Select', true, false),
    new ThemeCategoryModel('SLIDERS', 'Sliders', true, false),
    new ThemeCategoryModel('TOGGLES', 'Toggles', true, false),
]
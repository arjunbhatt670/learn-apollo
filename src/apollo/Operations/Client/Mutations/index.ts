import { Language } from "apollo/State";

import { updateLanguage } from "./i18n";

export const i18nMutations = {
    updateLanguage: async (lang: Language) => updateLanguage(lang),
};

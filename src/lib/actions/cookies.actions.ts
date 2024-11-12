"use server";

import { cookies } from "next/headers";

export const setLanguage = async (lang: string) => {
    const supportedLanguages = ['en', 'tr'];

    if (!supportedLanguages.includes(lang)) {
        console.warn(`Unsupported language detected: ${lang}. Falling back to 'en'.`);
        lang = "en";
    }

    const cookieStore = await cookies();
    cookieStore.set({
        name: "ig_lang",
        value: lang,
        expires: Date.now() + 400,
        sameSite: "lax",
    });
}

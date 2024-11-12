"use client";

import React from "react";

/**
 * Represents a link in the footer navigation.
 * @property displayName - The text to display for the link.
 * @property href - The URL the link points to.
 */
interface FooterLink {
  displayName: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { displayName: "Meta", href: "https://about.meta.com" },
  { displayName: "About", href: "https://about.instagram.com/" },
  { displayName: "Blog", href: "https://about.instagram.com/blog/" },
  { displayName: "Jobs", href: "https://about.instagram.com/about-us/careers" },
  { displayName: "Help", href: "https://help.instagram.com/" },
  {
    displayName: "API",
    href: "https://developers.facebook.com/docs/instagram",
  },
  { displayName: "Privacy", href: "https://www.instagram.com/legal/privacy/" },
  {
    displayName: "Consumer Health Privacy",
    href: "https://www.instagram.com/legal/privacy/health_privacy_policy/",
  },
  { displayName: "Terms", href: "https://www.instagram.com/legal/terms/" },
  {
    displayName: "Locations",
    href: "https://www.instagram.com/explore/locations/",
  },
  {
    displayName: "Instagram Lite",
    href: "https://www.instagram.com/web/lite/",
  },
  { displayName: "Threads", href: "https://www.threads.net/" },
  {
    displayName: "Contact Uploading & Non-Users",
    href: "https://www.facebook.com/help/instagram/261704639352628",
  },
  {
    displayName: "Meta Verified",
    href: "https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer",
  },
];

/**
 * Represents a language option in the language selection menu.
 * @property id - The id of the language
 * @property displayName - The text to display for the language.
 */
interface LanguageOption {
  id: string;
  displayName: string;
}

const languageOptions: LanguageOption[] = [
  { id: "af", displayName: "Afrikaans" },
  { id: "ar", displayName: "العربية" },
  { id: "cs", displayName: "Čeština" },
  { id: "da", displayName: "Dansk" },
  { id: "de", displayName: "Deutsch" },
  { id: "el", displayName: "Ελληνικά" },
  { id: "en", displayName: "English" },
  { id: "en-gb", displayName: "English (UK)" },
  { id: "es", displayName: "Español (España)" },
  { id: "es-la", displayName: "Español" },
  { id: "fa", displayName: "فارسی" },
  { id: "fi", displayName: "Suomi" },
  { id: "fr", displayName: "Français" },
  { id: "he", displayName: "עברית" },
  { id: "id", displayName: "Bahasa Indonesia" },
  { id: "it", displayName: "Italiano" },
  { id: "ja", displayName: "日本語" },
  { id: "ko", displayName: "한국어" },
  { id: "ms", displayName: "Bahasa Melayu" },
  { id: "nb", displayName: "Norsk" },
  { id: "nl", displayName: "Nederlands" },
  { id: "pl", displayName: "Polski" },
  { id: "pt-br", displayName: "Português (Brasil)" },
  { id: "pt", displayName: "Português (Portugal)" },
  { id: "ru", displayName: "Русский" },
  { id: "sv", displayName: "Svenska" },
  { id: "th", displayName: "ภาษาไทย" },
  { id: "tl", displayName: "Filipino" },
  { id: "tr", displayName: "Türkçe" },
  { id: "zh-cn", displayName: "中文(简体)" },
  { id: "zh-tw", displayName: "中文(台灣)" },
  { id: "bn", displayName: "বাংলা" },
  { id: "gu", displayName: "ગુજરાતી" },
  { id: "hi", displayName: "हिन्दी" },
  { id: "hr", displayName: "Hrvatski" },
  { id: "hu", displayName: "Magyar" },
  { id: "kn", displayName: "ಕನ್ನಡ" },
  { id: "ml", displayName: "മലയാളം" },
  { id: "mr", displayName: "मराठी" },
  { id: "ne", displayName: "नेपाली" },
  { id: "pa", displayName: "ਪੰਜਾਬੀ" },
  { id: "si", displayName: "සිංහල" },
  { id: "sk", displayName: "Slovenčina" },
  { id: "ta", displayName: "தமிழ்" },
  { id: "te", displayName: "తెలుగు" },
  { id: "ur", displayName: "اردو" },
  { id: "vi", displayName: "Tiếng Việt" },
  { id: "zh-hk", displayName: "中文(香港)" },
  { id: "bg", displayName: "Български" },
  { id: "fr-ca", displayName: "Français (Canada)" },
  { id: "ro", displayName: "Română" },
  { id: "sr", displayName: "Српски" },
  { id: "uk", displayName: "Українська" },
];

const Footer = () => {
  // TODO: Temporarily setting language here. Replace after internalization.
  const currLang = "en";

  return (
    <footer
      role="contentinfo"
      className="pb-[52px] pt-6 flex flex-col gap-[6px]"
    >
      <ul className="flex justify-center gap-4">
        {footerLinks.map((link, i) => (
          <li key={i}>
            <a href={link.href || "#"}>
              <span className="text-xs font-sans text-secondary_text">
                {link.displayName || "Untitled"}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-[17px] justify-center mt-[13px] mb-[9px] text-secondary_text text-xs font-sans leading-[18px] overflow-y-visible">
        <div className="flex relative">
          <div className="flex">
            <span className="">English</span>
            <div className="transform rotate-180 relative ml-[5px] top-[-3px]">
              <svg
                aria-label="Down chevron icon"
                role="img"
                viewBox="0 0 24 24"
                className="fill-current w-3 h-3"
              >
                <title>Down chevron icon</title>
                <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
              </svg>
            </div>
          </div>
          <select
            className="bg-transparent absolute w-full top-[1px] opacity-0"
            value={currLang}
            aria-label="Switch Display Language"
            onChange={() => {
              return;
            }}
          >
            {languageOptions.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.displayName}
              </option>
            ))}
          </select>
        </div>
        <span className="">&#169; 2024 Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default Footer;

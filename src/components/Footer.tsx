"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { setLanguage } from "@/lib/actions/cookies.actions";
import { languages } from "@/i18n/languages";

interface FooterLink {
  displayName: string;
  href: string;
}

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  const footerLinks: FooterLink[] = [
    { displayName: "Meta", href: "https://about.meta.com" },
    { displayName: t("links.about"), href: "https://about.instagram.com/" },
    { displayName: "Blog", href: "https://about.instagram.com/blog/" },
    {
      displayName: "Jobs",
      href: "https://about.instagram.com/about-us/careers",
    },
    { displayName: "Help", href: "https://help.instagram.com/" },
    {
      displayName: "API",
      href: "https://developers.facebook.com/docs/instagram",
    },
    {
      displayName: "Privacy",
      href: "https://www.instagram.com/legal/privacy/",
    },
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

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

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
            <span className="">{t("languageName")}</span>
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
            value={locale}
            aria-label="Switch Display Language"
            onChange={changeLanguage}
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.nativeName}
              </option>
            ))}
          </select>
        </div>
        &#169; 2024 Instagram from Meta
      </div>
    </footer>
  );
};

export default Footer;

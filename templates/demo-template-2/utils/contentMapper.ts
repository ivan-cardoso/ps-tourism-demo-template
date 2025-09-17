import homeContent from "@/content/home";
import settings from "@/content/settings.json";

export function getHomeContent() {
  return homeContent;
}

export function getSettings() {
  return settings;
}

export function getSEOData() {
  return {
    title: settings.seo.title,
    description: settings.seo.description,
    keywords: settings.seo.keywords,
  };
}

export function getBusinessInfo() {
  return settings.business;
}

export function getSocialLinks() {
  return settings.social;
}

import homeContent from "@/content/home";
import settings from "@/content/settings.json";

export const getHomeContent = () => homeContent;
export const getSettings = () => settings;

export const formatPrice = (price: string) => {
  return price.replace(/\$(\d+),(\d+)/, "$1.$2");
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\+54 9 (\d{2}) (\d{4})-(\d{4})/, "+54 9 $1 $2-$3");
};

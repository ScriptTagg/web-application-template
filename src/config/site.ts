interface SiteConfig {
  name: string;
  description: string;
  siteUrl: string;
  phone: string;
  email: string;
  address: {
    location: string;
  };
  ogImage: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    tiktok: string;
    whatsapp: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Scripttag Web Solutions",
  description: "Building web for the future",
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  phone: "+254...",
  email: "knundahalphones@gmail.com",
  address: {
    location: "Obama Estate",
  },
  ogImage: "",
  socialLinks: {
    twitter: "",
    facebook: "",
    tiktok: "",
    whatsapp: "",
  },
};

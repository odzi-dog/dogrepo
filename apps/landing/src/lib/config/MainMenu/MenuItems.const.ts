// Interface
export interface IMenuItem {
  path_regexp?: RegExp;
  href: string;
};

// Items
export const MenuItems: Record<string, IMenuItem> = {
  // Pawcapsu services
  pawcapsu_services: {
    path_regexp: /pawcapsu/,
    href: "/categories/pawcapsu"
  },

  // Bluk services
  bluk_services: {
    path_regexp: /bluk/,
    href: "/categories/bluk"
  },

  // Other info (discord, github)
  discord: {
    href: "https://discord.gg/EHvUDyNQ7J"
  },

  github: {
    href: "https://github.com/odzi-dog"
  },
};
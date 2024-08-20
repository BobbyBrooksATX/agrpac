import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
    },
    {
      text: 'Become a Supporter',
      href: 'https://oldgloryalliance.com/product/a-greater-republic-pac/',
      target: '_blank',
    },
    {
      text: 'Victory Team',
      href: getPermalink('/victory'),
    },
    {
      text: 'Voter Guide',
      href: getPermalink('/voter-guide'),
    },
  ],
  actions: [{ text: 'Get Updates', href: '/updates', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Events', href: '/events' },
        { text: 'Get Updates', href: '/updates' },
        { text: 'Victory Team', href: '/victory' },
        {
          text: 'Donate',
          href: 'https://oldgloryalliance.com/product/a-greater-republic-pac/',
          target: '_blank',
        },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'TruthSocial', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made in Austin · All rights reserved.
  `,
};

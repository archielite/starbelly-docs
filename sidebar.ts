import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/starbelly/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/starbelly/releases' },
      { text: 'Upgrade Guide', link: '/starbelly/upgrade' },
    ]
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/starbelly/installation' },
      { text: 'SSL', link: '/starbelly/ssl' },
      { text: 'License', link: '/starbelly/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Theme options', link: '/starbelly/theme-options' },
      { text: 'Widgets', link: '/starbelly/widgets' },
      { text: 'Menus', link: '/starbelly/menus' },
      { text: 'Ecommerce', link: '/starbelly/ecommerce' },
      { text: 'Custom CSS/JS', link: '/starbelly/custom-css-js' },
      { text: 'Translation', link: '/starbelly/translation' },
      { text: 'Multi-language', link: '/starbelly/multi-language' },
      { text: 'Currencies', link: '/starbelly/currencies' },
      { text: 'Location', link: '/starbelly/location' },
      { text: 'Analytics', link: '/starbelly/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/starbelly/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/starbelly/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/starbelly/usage-media-wasabi' },
      { text: 'Email', link: '/starbelly/usage-email' },
      { text: 'Backup', link: '/starbelly/plugin-backup' },
      { text: 'Invoice template', link: '/starbelly/invoice-template' },
      { text: 'Social login', link: '/starbelly/social-login' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mantis Documentation',
  tagline: 'Native yield meets chain-abstracted orderflow.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.mantis.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mantis',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Composable Finance', // Usually your GitHub org/user name.
  projectName: 'mantis-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ComposableFi/mantis-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Site Title',  // The title of the site goes here
      logo: {
        alt: 'My Site Logo', // The description to the logo goes here
        src: 'img/logo.svg', // The logo of the business goes here
      },
      items: [
        {
          type: 'docSidebar', // Signifies that the sidebar is for documentation and will come from the sidebar.ts or js
          sidebarId: 'concepts',  // Id to target a soecific sidebar item in the sidebar.ts
          position: 'left', // Represents the position of the item on the top nav bar
          label: 'Concepts',
        },
        {
          type: 'docSidebar',
          sidebarId: 'protocol',  // Id to target a soecific sidebar item in the sidebar.ts
          position: 'left',
          label: 'Protocol',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rollup',  // Id to target a soecific sidebar item in the sidebar.ts
          position: 'left',
          label: 'Rollup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'solvers',  // Id to target a soecific sidebar item in the sidebar.ts
          position: 'left',
          label: 'Solvers',
        },
        {
          type: 'docSidebar',
          sidebarId: 'user_guides',  // Id to target a soecific sidebar item in the sidebar.ts
          position: 'left',
          label: 'User Guides',
        },
        {
             href: 'https://research.composable.finance/://github.com/facebook/docusaurus',
             label: 'Research',
             position: 'right',
           },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/mantis',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/N82fRBKQND',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://mirror.xyz/0x2e9907036C62d7dAb6775FbF49E84E4c74562526',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/composablefi',
            },
            {
              label: 'Whitepaper',
              href: 'https://assets.website-files.com/65b28e756a8eda2e91e76ca4/6656289f21123d6215091555_MANTIS%20Whitepaper.pdf',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Composable Foundation`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

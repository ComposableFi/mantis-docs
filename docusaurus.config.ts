

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
  baseUrl: '/',

  organizationName: 'Composable Finance', 
  projectName: 'mantis-docs', 

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
          routeBasePath: '/',
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
      title: 'Mantis Documentation',  // The title of the site goes here
      logo: {
        alt: 'My Site Logo', // The description to the logo goes here
        src: 'img/logo.svg', // The logo of the business goes here
      },
      items: [
        {
          type: 'docSidebar', // Signifies that the sidebar is for documentation and will come from the sidebar.ts or js
          sidebarId: 'concepts', 
          position: 'left', // Represents the position of the item on the top nav bar
          label: 'Concepts',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rollup',  
          position: 'left',
          label: 'Rollup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'protocol',  
          position: 'left',
          label: 'Protocol',
        },
        {
          type: 'docSidebar',
          sidebarId: 'solvers',  
          position: 'left',
          label: 'Solvers',
        },
        {
          type: 'docSidebar',
          sidebarId: 'user_guides',  
          position: 'left',
          label: 'User Guides',
        },
        {
             href: 'https://research.composable.finance/://github.com/facebook/docusaurus',
             label: 'Research',
             position: 'right',
           },
           {
            label: 'Whitepaper',
            href: 'https://assets.website-files.com/65b28e756a8eda2e91e76ca4/6656289f21123d6215091555_MANTIS%20Whitepaper.pdf',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
      links: [
           {
              label: 'X',
              href: 'https://x.com/mantis',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/N82fRBKQND',
            },
            {
              label: 'Blog',
              href: 'https://mirror.xyz/0x2e9907036C62d7dAb6775FbF49E84E4c74562526',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/composablefi',
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
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8c4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b31'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a1e'),
            routes: [
              {
                path: '/concepts/definitions',
                component: ComponentCreator('/concepts/definitions', 'dea'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/concepts/learn',
                component: ComponentCreator('/concepts/learn', '835'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/concepts/use-cases',
                component: ComponentCreator('/concepts/use-cases', '762'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/develop/',
                component: ComponentCreator('/develop/', '0e4'),
                exact: true,
                sidebar: "develop"
              },
              {
                path: '/protocol/audits',
                component: ComponentCreator('/protocol/audits', 'aab'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/protocol/ecosystem',
                component: ComponentCreator('/protocol/ecosystem', 'ff3'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/protocol/mantis',
                component: ComponentCreator('/protocol/mantis', '3a2'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/protocol/roadmap',
                component: ComponentCreator('/protocol/roadmap', 'ace'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/protocol/solvers',
                component: ComponentCreator('/protocol/solvers', '904'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/rollup/bridge-contract',
                component: ComponentCreator('/rollup/bridge-contract', '34d'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/data-types',
                component: ComponentCreator('/rollup/data-types', 'ac7'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/decentralised-sequencing',
                component: ComponentCreator('/rollup/decentralised-sequencing', '6c8'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/fees',
                component: ComponentCreator('/rollup/fees', '8ee'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/mantis',
                component: ComponentCreator('/rollup/mantis', '605'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/svm-sequencer',
                component: ComponentCreator('/rollup/svm-sequencer', '84f'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/rollup/tx-lifecycle',
                component: ComponentCreator('/rollup/tx-lifecycle', '865'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'bd7'),
                exact: true,
                sidebar: "concepts"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

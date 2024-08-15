import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mantis/__docusaurus/debug',
    component: ComponentCreator('/mantis/__docusaurus/debug', 'c18'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/config',
    component: ComponentCreator('/mantis/__docusaurus/debug/config', 'ea0'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/content',
    component: ComponentCreator('/mantis/__docusaurus/debug/content', '6dc'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/globalData',
    component: ComponentCreator('/mantis/__docusaurus/debug/globalData', 'bea'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/metadata',
    component: ComponentCreator('/mantis/__docusaurus/debug/metadata', 'd9a'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/registry',
    component: ComponentCreator('/mantis/__docusaurus/debug/registry', 'f73'),
    exact: true
  },
  {
    path: '/mantis/__docusaurus/debug/routes',
    component: ComponentCreator('/mantis/__docusaurus/debug/routes', '609'),
    exact: true
  },
  {
    path: '/mantis/markdown-page',
    component: ComponentCreator('/mantis/markdown-page', 'eae'),
    exact: true
  },
  {
    path: '/mantis/docs',
    component: ComponentCreator('/mantis/docs', '6b8'),
    routes: [
      {
        path: '/mantis/docs',
        component: ComponentCreator('/mantis/docs', '1ab'),
        routes: [
          {
            path: '/mantis/docs',
            component: ComponentCreator('/mantis/docs', '610'),
            routes: [
              {
                path: '/mantis/docs/concepts/about',
                component: ComponentCreator('/mantis/docs/concepts/about', 'abb'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/mantis/docs/concepts/definitions',
                component: ComponentCreator('/mantis/docs/concepts/definitions', '91f'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/mantis/docs/concepts/learn',
                component: ComponentCreator('/mantis/docs/concepts/learn', 'f60'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/mantis/docs/concepts/mev',
                component: ComponentCreator('/mantis/docs/concepts/mev', '9b7'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/mantis/docs/concepts/use-cases',
                component: ComponentCreator('/mantis/docs/concepts/use-cases', 'd49'),
                exact: true,
                sidebar: "concepts"
              },
              {
                path: '/mantis/docs/mantis',
                component: ComponentCreator('/mantis/docs/mantis', 'e39'),
                exact: true
              },
              {
                path: '/mantis/docs/protocol/audits',
                component: ComponentCreator('/mantis/docs/protocol/audits', '042'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/ecosystem',
                component: ComponentCreator('/mantis/docs/protocol/ecosystem', '162'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/mantis',
                component: ComponentCreator('/mantis/docs/protocol/mantis', '5e4'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/mvm',
                component: ComponentCreator('/mantis/docs/protocol/mvm', '246'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/roadmap',
                component: ComponentCreator('/mantis/docs/protocol/roadmap', '383'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/solvers',
                component: ComponentCreator('/mantis/docs/protocol/solvers', '4da'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/protocol/token',
                component: ComponentCreator('/mantis/docs/protocol/token', 'beb'),
                exact: true,
                sidebar: "protocol"
              },
              {
                path: '/mantis/docs/rollup/bridge-contract',
                component: ComponentCreator('/mantis/docs/rollup/bridge-contract', 'ce9'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/data-types',
                component: ComponentCreator('/mantis/docs/rollup/data-types', '015'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/decentralised-sequencing',
                component: ComponentCreator('/mantis/docs/rollup/decentralised-sequencing', '689'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/fees',
                component: ComponentCreator('/mantis/docs/rollup/fees', 'c64'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/interop',
                component: ComponentCreator('/mantis/docs/rollup/interop', '901'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/mantis',
                component: ComponentCreator('/mantis/docs/rollup/mantis', '4f8'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/svm-sequencer',
                component: ComponentCreator('/mantis/docs/rollup/svm-sequencer', 'fbf'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/rollup/tx-lifecycle',
                component: ComponentCreator('/mantis/docs/rollup/tx-lifecycle', '566'),
                exact: true,
                sidebar: "rollup"
              },
              {
                path: '/mantis/docs/solvers/develop',
                component: ComponentCreator('/mantis/docs/solvers/develop', 'f1c'),
                exact: true,
                sidebar: "solvers"
              },
              {
                path: '/mantis/docs/user_guides/waitlist',
                component: ComponentCreator('/mantis/docs/user_guides/waitlist', 'a98'),
                exact: true,
                sidebar: "user_guides"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mantis/',
    component: ComponentCreator('/mantis/', '02d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

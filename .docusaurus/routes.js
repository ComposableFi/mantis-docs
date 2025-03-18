import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0f8'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'f6e'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '52d'),
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
                path: '/develop/mantis-sdk',
                component: ComponentCreator('/develop/mantis-sdk', '995'),
                exact: true,
                sidebar: "develop"
              },
              {
                path: '/develop/setup',
                component: ComponentCreator('/develop/setup', '194'),
                exact: true,
                sidebar: "develop"
              },
              {
                path: '/dise/prompt-guide',
                component: ComponentCreator('/dise/prompt-guide', 'e38'),
                exact: true,
                sidebar: "dise"
              },
              {
                path: '/dise/roadmap',
                component: ComponentCreator('/dise/roadmap', '297'),
                exact: true,
                sidebar: "dise"
              },
              {
                path: '/dise/tech-stack',
                component: ComponentCreator('/dise/tech-stack', '12a'),
                exact: true,
                sidebar: "dise"
              },
              {
                path: '/m/guides',
                component: ComponentCreator('/m/guides', '486'),
                exact: true,
                sidebar: "m"
              },
              {
                path: '/m/overview',
                component: ComponentCreator('/m/overview', '8c2'),
                exact: true,
                sidebar: "m"
              },
              {
                path: '/operate/api',
                component: ComponentCreator('/operate/api', 'fb2'),
                exact: true,
                sidebar: "operate"
              },
              {
                path: '/operate/solvers',
                component: ComponentCreator('/operate/solvers', '631'),
                exact: true,
                sidebar: "operate"
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
                path: '/protocol/intent-lifecycle',
                component: ComponentCreator('/protocol/intent-lifecycle', 'b0a'),
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
                path: '/protocol/solver-rules',
                component: ComponentCreator('/protocol/solver-rules', '76e'),
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
                path: '/rollup/rebasing',
                component: ComponentCreator('/rollup/rebasing', '07c'),
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

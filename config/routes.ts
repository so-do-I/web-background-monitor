export default [
  {
    path: '*',
    redirect: '/view-presentation',
  },
  {
    name: '登录',
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    name: '视图展示',
    path: '/view-presentation',
    component: './View',
    icon: 'LineChartOutlined',
  },
  {
    name: '异常监控数据',
    path: '/error',
    icon: 'WarningOutlined',
    routes: [
      {
        name: '接口异常',
        path: '/error/interface',
        component: './Error/Interface',
      },
      {
        name: '前端异常',
        path: '/error/frontend',
        component: './Error/Forntend',
      },
    ],
  },
  {
    name: '用户行为数据',
    path: '/user',
    icon: 'UserOutlined',
    component: './User',
    // routes: [
    //   {
    //     name: 'PV',
    //     path: '/user/pv',
    //     component: './User/PV',
    //   },
    //   {
    //     name: 'UV',
    //     path: '/user/uv',
    //     component: './User/UV',
    //   },
    //   {
    //     name: 'IP',
    //     path: '/user/ip',
    //     component: './User/IP',
    //   },
    // ],
  },
  {
    name: '页面性能数据',
    path: '/page-performance',
    icon: 'FileOutlined',
    component: './Page',
    //   routes: [
    //     {
    //       name: 'FP',
    //       path: '/page-performance/FP',
    //       component: './Page/FP',
    //     },
    //     {
    //       name: 'FCP',
    //       path: '/page-performance/FCP',
    //       component: './Page/FCP',
    //     },
    //     {
    //       name: 'LCP',
    //       path: '/page-performance/LCP',
    //       component: './Page/LCP',
    //     },
    //     {
    //       name: 'FMP',
    //       path: '/page-performance/FMP',
    //       component: './Page/FMP',
    //     },
    //     {
    //       name: 'DCL',
    //       path: '/page-performance/DCL',
    //       component: './Page/DCL',
    //     },
    //     {
    //       name: 'L',
    //       path: '/page-performance/L',
    //       component: './Page/L',
    //     },
    //     {
    //       name: 'TTI',
    //       path: '/page-performance/TTI',
    //       component: './Page/TTI',
    //     },
    //     {
    //       name: 'FID',
    //       path: '/page-performance/FID',
    //       component: './Page/FID',
    //     },
    //   ],
  },
  {
    name: '网络性能数据',
    path: '/web-performance',
    icon: 'GlobalOutlined',
    component: './Web',
    //   routes: [
    //     {
    //       name: '重定向耗时',
    //       path: '/web-performance/redirect',
    //       component: './Web/Redirect',
    //     },
    //     {
    //       name: 'DNS解析耗时',
    //       path: '/web-performance/dns',
    //       component: './Web/DNS',
    //     },
    //     {
    //       name: 'TCP连接耗时',
    //       path: '/web-performance/tcp',
    //       component: './Web/TCP',
    //     },
    //     {
    //       name: 'SSL连接耗时',
    //       path: '/web-performance/ssl',
    //       component: './Web/SSL',
    //     },
    //     {
    //       name: 'TTFB网络请求耗时',
    //       path: '/web-performance/ttfb',
    //       component: './Web/TTFB',
    //     },
    //     {
    //       name: '数据传输耗时',
    //       path: '/web-performance/data-transmission',
    //       component: './Web/Data',
    //     },
    //     {
    //       name: '资源加载耗时',
    //       path: '/web-performance/resource-load',
    //       component: './Web/Resource',
    //     },
    //     {
    //       name: '接口访问信息',
    //       path: '/web-performance/http-request',
    //       component: './Web/HTTP',
    //     },
    //   ],
  },
  {
    name: '账户管理',
    path: '/admin',
    icon: 'IdcardOutlined',
    component: './Manager',
  },
];

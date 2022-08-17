import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  plugins: [
    // ... 其他插件
    // 这是当前的目录，最近正在调整这个插件，如果你这么写报错了，请访问官网查看最新用法
    require.resolve('@umijs/max-plugin-openapi'),
  ],
  openAPI: {
    // 这里使用服务端提供的url
    schemaPath: 'http://127.0.0.1:4523/export/openapi/3?version=openapi30.json',
    mock: true,
  },
  antd: {
    import: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '聊天室性能监控',
    locale: false,
  },
  routes,
  npmClient: 'npm',
});

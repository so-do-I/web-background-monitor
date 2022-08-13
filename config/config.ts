import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
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

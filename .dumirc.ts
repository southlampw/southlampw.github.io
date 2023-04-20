import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'UI',
    nav: [{ title: '文档', link: '/components/lamp-button' }],
  },
});

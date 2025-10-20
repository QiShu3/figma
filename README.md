# Figma to React Components

这是一个 Figma 设计转 React 组件的项目，展示了如何将 Figma 设计稿转换为可用的 React 组件。

## 项目特性

- 🎨 Figma 设计稿转 React 组件
- ⚡ Vite + React + TypeScript 开发环境
- 🎯 组件化开发模式
- 📱 响应式设计
- 🎪 交互式演示页面

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- SCSS Modules
- React Router

## 项目结构

```
├── src/
│   ├── components/          # React 组件
│   │   ├── AddInteractions/ # 交互添加组件
│   │   ├── Avatar/          # 头像组件
│   │   ├── Card/            # 卡片组件
│   │   └── ...
│   ├── pages/               # 页面组件
│   └── lib/                 # 工具函数
├── .figma/                  # Figma 导出的组件
└── public/                  # 静态资源
```

## 开始使用

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm run dev
```

3. 构建项目：
```bash
pnpm run build
```

## 演示页面

- `/` - 主页面（Add Interactions 演示）
- `/layout-demo` - 布局演示页面
- `/element-plus` - Element Plus 设计系统演示
- `/replace-content` - 内容替换功能演示

## 许可证

MIT License
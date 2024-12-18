# Cube-Admin-Vue

Cube-Admin-Vue 是一个基于 Vue.js 的后台管理系统前端模板，使用 TailwindCSS 和 Sass 进行样式定制，支持响应式布局，适合构建现代化的后台管理界面。

## 许可证

本项目使用 [MIT 许可证](LICENSE)，你可以自由地使用、修改、分发此项目。

## 联系方式

- 作者：赵士杰
- 个人主页：[https://zsjie.blog.csdn.net/](https://zsjie.blog.csdn.net/)
- 项目链接：[https://gitcode.com/qq_20185737/Cube-Admin-Vue](https://gitcode.com/qq_20185737/Cube-Admin-Vue)

## 安装和使用

1. 克隆项目：

   ```bash
   git clone https://gitcode.com/qq_20185737/Cube-Admin-Vue.git
   ```

2. 安装依赖：

   ```bash
   cd Cube-Admin-Vue
   npm install
   ```

3. 运行开发环境：

   ```bash
   npm run dev
   ```

4. 生产构建：

   ```bash
   npm run build
   ```

## 贡献

如果你希望为这个项目贡献代码，可以按照以下步骤进行：

1. Fork 本项目。
2. 创建自己的功能分支：`git checkout -b feature-branch`。
3. 提交代码：`git commit -m 'Add new feature'`。
4. 推送到远程：`git push origin feature-branch`。
5. 提交 Pull Request。

## 项目目录结构

```txt
Cube-Admin-Vue/
│
├── .husky/							  # Husky 配置和 Git 钩子脚本
│   └── pre-commit
│
├── .vscode/						  # 存放 VSCode 编辑器的配置文件
│
├── public/                           # 静态资源目录
│   └── favicon.ico                   # 网站图标等静态资源
│
├── src/                              # 源代码目录
│   ├── assets/                       # 存放静态资源（如图片、字体等）
│   ├── components/                   # 可复用的 Vue 组件
│   ├── config/                       # 项目配置文件目录
│   ├── constants/                    # 项目常量目录
│   ├── views/                        # 页面视图组件（对应路由）
│   ├── router/                       # 路由配置目录
│   ├── store/                        # 状态管理（Pinia 或 Vuex）
│   ├── types/                        # TypeScript 类型定义
│   ├── utils/                        # 工具函数和帮助方法
│   ├── interfaces/                   # API 请求相关文件
│   ├── directives/                   # 自定义指令
│   ├── filters/                      # 自定义过滤器
│   ├── layout/                       # 布局组件（如侧边栏、顶部导航等）
│   ├── App.vue                       # 根组件
│   └── main.ts                       # 项目入口文件
│
├── .editorconfig                     # 编辑器配置文件
├── .env                              # 开发环境的环境变量配置
├── .env.production                   # 生产环境的环境变量配置
├── .env.staging                      # 测试环境的环境变量配置
├── .gitignore                        # Git 忽略文件
├── .prettierrc.json                  # Prettier 配置文件
├── .env.d.ts		                  # Prettier 配置文件
├── eslint.config.js                  # ESLint 配置文件
├── index.html                        # 入口 HTML 模板
├── LICENSE                     	  # 许可证文件
├── package.json                      # 项目依赖配置文件
├── pnpm-lock.yaml                    # pnpm 锁定文件
├── README.md                         # 项目说明文件
├── tsconfig.json                     # TypeScript 配置文件
└── vite.config.ts                    # Vite 配置文件
```


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

## GitLab Flow 协同开发工作流

该项目采用 **GitLab Flow** 模式的分支管理策略，旨在提供一种灵活、高效的工作流程，特别适用于持续集成（Continuous Integration）和持续交付（Continuous Delivery）环境，满足敏捷开发的需求。该策略注重分支管理的简洁与高效，支持快速迭代和自动化部署，以确保项目能够顺畅地进行开发、测试和发布。

### 主要分支和流程

在 GitLab Flow 模式下，分支结构清晰，强调 `devlop` 和 `main` 分支的分离，并通过 `feature`、`release`、`hotfix` 等分支来组织不同阶段的开发工作：

- **主分支（Main）**

  项目的核心分支，代表着生产环境中的稳定版本。只有经过测试和验证的代码都会合并到该分支，并通过标签（tag）标记特定的版本，以便清晰追踪每次发布的代码快照。

- **开发分支（Devlop）**

  日常开发的主要分支，所有开发工作从 `devlop` 分支开始，开发完成后再合并回此分支，应保持相对稳定，供团队内部使用和验证。

- **功能分支（Feature Branch）**

  用于开发特定的新功能。每个功能分支从 `devlop` 分支创建，开发完成后将其合并回 `develop`。功能分支的命名约定为 `feature/功能描述`，如 `feature/user-login`。

- **修复分支（Hotfix）**

  用于处理生产环境中的紧急 bug 。修复分支的命名通常为 `hotfix/bug描述`。完成修复后合并回 `develop` 和 `main` 分支，以确保问题在各个环境中得到及时解决。

- **发布分支（Release Branch）**

  用于准备新版本发布的临时分支，通常从 `develop` 分支创建。主要用于在发布前进行最终的测试、文档修改、版本号更新等准备工作。发布分支的命名约定为 `release/版本号`，例如 `release/1.0.0`。发布完成后会同时合并回 `main` 和 `develop` 分支，确保各个环境中的代码都保持一致。

- **标签（Tag）**  

  在每次发布新版本时，通常会在 `main` 分支上打上标签，记录该版本的代码快照。标签的命名遵循版本号的规范，如 `v1.0.0` 或 `v2.1.0`，以便准确标识发布的版本，并为未来的版本回溯提供清晰的依据。

### 工作流示例

1. **从 `develop` 创建一个功能分支**：
   
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-feature
   ```
2. **开发完成后，提交并推送到远程**：
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
3. **创建 Pull Request / Merge Request**：
   - 在 GitHub、GitLab 或 GitCode 等平台上创建 Pull Request，将 `feature/new-feature` 合并回 `develop` 分支。
4. **合并后删除功能分支**：
   
   ```bash
   git branch -d feature/new-feature
   git push origin --delete feature/new-feature
   ```

## 规范化 Git 提交信息格式

在 Git 提交中，规范化提交（也叫 "Conventional Commits"）目的是通过统一的提交信息格式，提高代码历史的可读性和可维护性，当需要回溯某个特定的功能、修复或文档时，规范化的提交帮助快速定位。

**提交信息格式：**

```bash
<type>(<scope>): <subject>
```

其中：

- `type`：提交类型（如 `fix`、`feat` 等）。
- `scope`：修改范围（可选，指代修改的功能模块或区域）。
- `subject`：简洁的描述。

例如：

```bash
git commit -m "fix(auth): resolve login bug"
```

**Git 提交类型及其描述的表格展示：**

| **提交类型** | **描述**                                   |
| ------------ | ------------------------------------------ |
| `fix`        | 修复 bug                                   |
| `feat`       | 新增功能                                   |
| `chore`      | 日常任务（工具或配置更新等）               |
| `docs`       | 文档修改                                   |
| `style`      | 代码风格（不影响代码功能，通常是格式调整） |
| `refactor`   | 代码重构（不改变外部行为，仅改善内部结构） |
| `perf`       | 性能优化                                   |
| `test`       | 添加或修改测试代码                         |
| `update`     | 更新现有功能或修复                         |
| `delete`     | 删除功能或代码                             |
| `merge`      | 合并分支                                   |
| `ci`         | 持续集成配置修改                           |

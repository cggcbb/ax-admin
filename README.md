## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 📦 [组件自动化加载](./src/components)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- ✅ 使用 [Vitest](http://vitest.dev/) 进行单元和组件测试

- 🦾 TypeScript, 还在摸索... ... ...

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集


## 下载&安装

- 下载
  ```bash
  git clone -b main https://github.com/AnxGGYw/ax-admin.git
  ```
- 进入项目目录
  ```bash
  cd ax-work
  ```
- 安装依赖
  ```bash
  pnpm i
  ```
  - 如果你没装过 pnpm，可以看看 [这里]( https://pnpm.io/ )
- 运行
  ```bash
  npm run dev
  ```
  - 推荐 [ni](https://github.com/antfu/ni)，会自动检测项目用到的包管理器（yarn，pnpm，bun）
  - ```bash
    ni
    # npm install
    # yarn install
    # pnpm install
    # bun install

    nr dev
    # npm run dev
    # yarn run dev
    # pnpm run dev
    # bun run dev
    ```

## GitHub 模板

[使用这个模板初始化仓库](https://github.com/antfu/vitesse-lite/generate).

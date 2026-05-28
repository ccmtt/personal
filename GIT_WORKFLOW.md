# Git 跨设备开发操作手册

> 目标：让你可以在公司电脑和家里电脑之间持续开发同一个项目，并且始终保持代码可追踪、可回退、可继续。

## 1. 核心原则

- 远程仓库是唯一可信来源。
- 每台电脑都只是仓库的一个工作副本。
- 所有重要进度必须提交到 Git。
- 不靠手动拷贝源码，不靠聊天记录记忆进度。
- 每次收工前都要把当前状态整理成一个可继续的提交。

## 2. 需要准备的东西

- 一个远程 Git 仓库，例如 GitHub、GitLab 或自建 Git 服务。
- 两台电脑都安装好 Git。
- 两台电脑都能访问同一个远程仓库。
- 项目目录中保留锁文件，例如 `package-lock.json`、`pnpm-lock.yaml`、`yarn.lock`。
- 项目中准备 `.env.example`，真实 `.env` 不提交。

## 3. 第一次初始化

### 3.1 先在 GitHub 创建仓库

先在 GitHub 新建一个仓库：

- 仓库名建议和项目名一致
- 先选空仓库，尽量不要勾选自动生成 README、`.gitignore`、License
- 先用 `main` 作为默认分支

创建完成后，你会拿到一个仓库地址，例如：

```bash
https://github.com/<your-name>/<repo-name>.git
```

### 3.2 在第一台电脑上初始化本地项目

如果本地已经有项目目录：

```bash
cd <project-folder>
git init
git branch -M main
git add .
git commit -m "chore: initial commit"
git remote add origin <remote-repo-url>
git push -u origin main
```

如果本地还没有项目目录：

```bash
mkdir <project-folder>
cd <project-folder>
git init
git branch -M main
```

然后再把代码文件放进来，提交并推送：

```bash
git add .
git commit -m "chore: initial commit"
git remote add origin <remote-repo-url>
git push -u origin main
```

### 3.3 在第二台电脑上克隆

```bash
git clone <remote-repo-url>
cd <project-name>
```

## 4. 日常开发流程

### 4.1 开始前

先确认本地是最新代码：

```bash
git checkout main
git pull origin main
```

如果你要做一个新功能，创建分支：

```bash
git checkout -b feat/home-page
```

### 4.2 开发中

按小步提交，不要堆到最后：

```bash
git status
git add .
git commit -m "feat: add home hero section"
```

建议提交粒度：
- 一个页面模块
- 一次明确的 bug 修复
- 一次测试修正
- 一次样式调整

### 4.3 收工前

下班前一定要做一次完整收尾：

```bash
git status
git add .
git commit -m "wip: continue homepage layout"
git push origin feat/home-page
```

如果今天没做完，也要提交一个能继续的状态。

## 5. 回家后继续开发

### 5.1 先拉最新代码

```bash
git checkout feat/home-page
git pull origin feat/home-page
```

如果本地没有这个分支：

```bash
git fetch origin
git checkout -b feat/home-page origin/feat/home-page
```

### 5.2 继续开发

```bash
npm install
npm run dev
```

或者按项目实际命令启动。

## 5.3 你当前阶段的推荐顺序

如果你现在是从零开始做个人站，推荐按这个顺序：

1. 先创建 GitHub 仓库
2. 再把本地项目初始化为 Git 仓库
3. 再连上远程 `origin`
4. 再开始写第一版页面
5. 每做完一个小块就提交一次
6. 每次换电脑前都 `push`

## 6. 两台电脑切换规则

- 只要换电脑，先 `pull` 再干活。
- 只要准备收工，先 `commit` 再关机。
- 任何未提交修改都不要指望靠另一台电脑自动出现。
- 如果同一文件两台电脑都改过，先解决冲突，再继续。

## 7. 冲突处理

### 7.1 常见冲突场景

- 公司电脑改了首页，家里电脑又改了同一个文件。
- 一边改配置文件，一边改页面结构。
- 一边更新锁文件，一边更新依赖版本。

### 7.2 处理步骤

```bash
git status
git pull origin <branch-name>
```

如果出现冲突：

1. 打开冲突文件
2. 找到 `<<<<<<<`, `=======`, `>>>>>>>`
3. 手动保留正确内容
4. 保存文件
5. 重新提交

```bash
git add <conflicted-file>
git commit -m "fix: resolve merge conflict"
```

## 8. 推荐分支策略

### 8.1 主分支

- `main`：稳定分支，只放可用代码。

### 8.2 功能分支

- `feat/<feature-name>`：新功能
- `fix/<bug-name>`：缺陷修复
- `refactor/<area>`：重构
- `chore/<task>`：杂项维护

示例：

- `feat/home-layout`
- `feat/projects-page`
- `fix/mobile-nav`
- `refactor/components`

## 9. 提交信息规范

推荐格式：

```bash
type: concise summary
```

常用类型：

- `feat`：新增功能
- `fix`：修复问题
- `refactor`：重构
- `style`：样式调整
- `test`：测试相关
- `docs`：文档相关
- `chore`：杂项

示例：

- `feat: add about section`
- `fix: resolve mobile layout overflow`
- `docs: update guide for site structure`

## 10. 每日工作清单

### 开始前

- 拉最新代码
- 确认当前分支
- 启动本地开发环境

### 开发中

- 小步提交
- 及时验证
- 遇到冲突先解决再继续

### 收工前

- 确认 `git status` 干净或已经提交
- 推送到远程
- 写下下一步要做什么

## 11. 常用命令速查

```bash
git status
git branch
git checkout -b feat/xxx
git add .
git commit -m "feat: ..."
git pull origin <branch>
git push origin <branch>
git log --oneline --decorate -n 10
git diff
```

## 12. 最重要的一句话

**任何时候，代码都应该能通过 Git 在另一台电脑上继续接上。**

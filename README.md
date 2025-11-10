## 小小的诗不敢递给她
___

### 这个是我的个人博客项目，里面记录生活和技术的点滴。

### 访问地址 ：[https://ouyangresume.github.io](https://ouyangresume.github.io/)

### 博客使用的主题：[Next](https://github.com/next-theme/hexo-theme-next)



### 启动项目
node环境版本
nvm install 22.13.1
nvm use 22.13.1

下载依赖
npm install -g hexo-cli
npm install

hexo clean && hexo server

### 生成本地静态文件
hexo generate



### 部署项目

直接推送代码到master分支，会自动执行workflows下面的hexo.yml构建.

### 创建写作

hexo new [layout] <title>

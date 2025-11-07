---
title: umami埋点平台
date: 2025-11-04 19:08:56
categories: VUE
tags: [Vue]
---

 [Umami](https://umami.is/docs) 是一种开源、注重隐私的网络分析工具，可作为 Google Analytics 的替代品。它提供了有关网站流量、用户行为和性能的重要见解，同时优先考虑数据隐私。
 <!--more-->

### 核心优势与特点

#### 1. 隐私至上
  ○ 不收集任何个人可识别信息。
  ○ 不使用 Cookie，无需显示 Cookie 横幅。
  ○ 完全遵守 GDPR、CCPA 等数据隐私法规。
  ○ 数据由您自己掌控（自托管时）。
#### 2. 轻量高效
  ○ 跟踪脚本极小（约 ~2KB），对网站性能影响微乎其微。
  ○ 界面简洁，加载速度快。
#### 3. 开源与自托管
  ○ 代码完全开源，透明可审计。
  ○ 支持免费自托管，数据完全私有化。

### 功能清单
#### 1. 数据收集与指标
● 页面浏览量： 跟踪每个页面的访问次数。
● 独立访客： 基于匿名唯一标识符统计访客数量。
● 访问次数： 统计会话（Session）的数量。
● 平均停留时长： 访客在网站上的平均停留时间。
● 跳出率： 仅浏览一个页面后离开的访问比例。
● 实时数据： 显示当前正在网站上的活跃访客。

#### 2. 维度与筛选
● 来源： 查看流量来源（直接访问、搜索引擎、社交媒体、引荐网站）。
● 页面： 分析特定页面的表现。
● 浏览器： 访客使用的浏览器类型（Chrome, Safari, Firefox 等）。
● 操作系统： 访客使用的操作系统（Windows, macOS, iOS, Android 等）。
● 设备类型： 区分桌面设备、平板电脑和移动设备。
● 国家/地区： 基于 IP 地址（可配置为不记录）识别访客地理位置（仅国家级别）。
● 语言： 访客浏览器设置的语言。
● 活动日志： 查看详细的页面浏览事件流。

#### 3. 报告与可视化
● 仪表盘： 集成的数据总览，以图表和卡片形式展示关键指标。
● 趋势图表： 以折线图展示指标（如浏览量、访客数）随时间的变化趋势。
● 数据表格： 以列表形式展示详细数据（如热门页面、来源等）。
● 指标对比： 可以并排比较不同指标（如将“访客数”和“浏览量”放在同一图表）。
● 日期范围选择： 支持自定义时间范围（如今天、最近24小时、上周、上月、自定义等）。
● 链接过滤： 点击图表中的图例可以直接筛选数据。

#### 4. 管理与多租户
● 多网站支持： 一个 Umami 实例可以跟踪和管理多个网站。
● 团队协作： 可以创建多个用户账号并分配不同权限。
● 权限控制： 

   ○ 管理员： 可以管理所有网站和用户。
   ○ 用户： 可以被授予查看特定一个或多个网站的权限。
● 数据共享： 可以为每个网站生成一个公开的、只读的分享链接，方便与他人共享数据而无需创建账号。
● 自定义事件： 可以通过 API 或修改跟踪脚本发送自定义事件，以跟踪特定用户交互（如按钮点击、表单提交等）。

### 集成系统指南


#### 1.登录umami 管理系统。
添加需要埋点的网站
<div  align="center"><img src="umami埋点平台/image.png" width = "300" height = "200" alt="图片名称" align=center />
</div>

#### 2.收集数据
要开始收集数据，需要将跟踪器脚本安装到网站。
可以在跟踪代码部分下找到。复制代码并将其插入到网站的 <head> 部分中。
<div  align="center"><img src="./link.png" width = "600" height = "200" alt="图片名称" align=center />
</div>

#### 3.自定义事件
除了页面浏览量之外，Umami 还能够跟踪网站上发生的事件。有两种方法可以在 Umami 中记录事件，使用数据属性属性或使用 JavaScript。
事件名称限制为 50 个字符。
没有事件名称，无法发送事件数据。

```  javascript
// Custom event with data 自定义事件
umami.track(event_name: string, data: object);

// 比如 记录登录完成事件
window.umami.track((props) => ({
  ...props,
  name: "login-sucess-event",
  data: {
    ...userRes,
  },
}));

// Session data 输入您自己的 ID 以识别用户，保存有关当前会话的数据。
// 用于登录完成时记录
umami.identify(unique_id: string, data: object);
```

### 本地运行及部署
#### 环境依赖
Node.js 版本 18.18 或更高版本的服务器。
数据库。Umami 支持 MariaDB（最低 v10.5）、MySQL（最低 v8.0）和 PostgreSQL（最低 v12.14）数据库。
#### 本地运行

```  javascript
// 下载资源和依赖
git clone https://github.com/umami-software/umami.git
cd umami
pnpm install
// 项目根目录创建一个 .env 文件
DATABASE_URL=connection-url
// connection-url格式为下面两种之一。
//注意：密码如果中包含特殊字符 #，进行URL编码
postgresql://username:mypassword@localhost:5432/mydb
mysql://username:mypassword@localhost:3306/mydb
// 构建应用程序
// 如果您是第一次安装，构建步骤将在数据库中创建表。它还将创建一个具有用户名 admin 和密码 umami 的登录用户。
pnpm run builddd
// 启动应用程序
pnpm run dev
```
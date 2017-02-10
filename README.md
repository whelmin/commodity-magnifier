商品放大镜效果🍭
===
模仿京东网站，使用webpack进行打包


## 目录结构

```
commodityMagnifier
   ├─ README.md
   ├─ index.html *      // 访问入口 (打包后)
   ├─ dist *            // 打包后文件夹
   │    └─ ...
   ├─ src               // 打包前文件夹
   │    ├─ sass
   │    │   ├─  style.scss
   │    │   └─ ...
   │    ├─ img
   │    │   └─ ...
   │    ├─ font
   │    │   └─ ...
   │    ├─ js
   │    │   ├─ main.js  // webpack入口
   │    │   └─ ...
   │    └─ index.html   // 访问入口 (打包前)
   ├─ node_modules      // 依赖包文件夹 (提交需要gitignore)
   │    └─ ...
   ├─ webpack.config.js // webpack打包配置
   ├─ package.json      // npm该项目描述
   └─ .gitignore
   (*表示访问必需)
```

## 效果页
  ![](http://ww1.sinaimg.cn/large/e6164e5dgy1fclhlt6kh2j21490rhguk)
## 思路说明
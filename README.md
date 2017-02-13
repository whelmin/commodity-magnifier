
商品放大镜效果🍭
===
模仿京东网站，采用webpack进行打包


## 项目目录

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
   ├─ package.json      // npm项目描述
   └─ .gitignore
   (*表示访问必需)
```

## 效果页
  ![点击查看大图](http://ww1.sinaimg.cn/large/e6164e5dgy1fclhlt6kh2j21490rhguk)
## 思路说明
该思路也可用于裁剪用户头像，图片等
### 布局
```html
<div class="box">
	<div class="left">
        /* 放大镜区域 */
  		<div class="pointer"></div>
        /* 小图片 */
      	<img class="small"/>
  	</div>
  	/* 被放大区域 */
    <div class="right">
    	<img class="big"/>
    </div>
</div>
```
### 交互
S大/S小 = O大/ O放 = S 显/ S放
![](http://ww1.sinaimg.cn/large/e6164e5dgy1fcor88rovkj20mq0h30u0)

```javascript
// O大 = S大 * O放 / S小
  S_box.onmousemove = function(ev) {
    var e = window.event || ev;
    // 当前鼠标的X轴坐标（相对于其父级元素）
    var Left = e.clientX - box.offsetLeft - left.offsetLeft - pointer.offsetWidth / 2;
    var Top = e.clientY - box.offsetTop - left.offsetLeft - pointer.offsetHeight / 2;
    if(Left<0){
        left = 0;
    }
    else if(Left > left.offsetWidth - pointer.offsetWidth / 2){
        Left = left.offsetWidth - pointer.offsetWidth / 2;
    }
    if(Top<0){
        Top = 0;
    }
    else if(Top > left.offsetHeight - pointer.offsetHeight / 2){
        Top = left.offsetHeight - pointer.offsetHeight / 2;
    }
    // 放大镜当前位置
    pointer.style.left = Left + 'px';
    pointer.style.top = Top + 'px';
    // 放大比例(这里我们假设大小图片都为正方形)
    var size = big.offsetWidth / small.offsetWidth;
    // 大图移动距离
    big.style.left = - (size * Left) + 'px';
    big.style.top = - (size * Top) + 'px';
  };
```


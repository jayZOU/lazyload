# lazyload
性能更优越的小程序懒加载库
![enter image description here](https://user-gold-cdn.xitu.io/2018/7/13/16493c391403e98f?w=378&h=635&f=gif&s=2743718)

## install
[链接下载](https://raw.githubusercontent.com/jayZOU/lazyload/master/src/libs/lazyload.js)

## Usage
```
//page.js
import lazyLoad from '../../libs/lazyload';
let lazyload;
Page({
	data: {
		img: []
	},
	onLoad: function () {

		lazyload = new lazyLoad(this, {
			classNote: '.item-',			//循环节点class
			initNum: 5,						//初始化展示多少个节点
			limit: 5						//每次加载多少个节点
		})
	},

	onReady: function () {
		lazyload.observe();
	},
})
```
初始化完成之后会在data添加`__LAZT_LOAD_COUNT`字段，用来标识当前加载到第几张图，业务方自行判断节点挂载，例如
```
//page.wxml

<view>
    <view wx:for="{{img}}" class="item-{{index}}">
        <image style="display: {{index < __LAZT_LOAD_COUNT + 1 ? 'block' : 'none'}}" src="{{item}}"></image>
    </view>
</view>
```

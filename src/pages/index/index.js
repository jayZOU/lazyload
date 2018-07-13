//index.js
//获取应用实例
const app = getApp()


import lazyLoad from '../../libs/lazyload';

let lazyload;

Page({
	data: {
		img: ["https://images.freeimages.com/images/small-previews/851/poppies-1369329.jpg", "https://images.freeimages.com/images/small-previews/53b/montenegro-sky-1370598.jpg", "https://images.freeimages.com/images/small-previews/6d5/lake-at-the-cottage-1372381.jpg", "https://images.freeimages.com/images/small-previews/e5f/pink-lotus-1396744.jpg", "https://images.freeimages.com/images/small-previews/b45/spring-colours-1375388.jpg", "https://images.freeimages.com/images/small-previews/773/koldalen-4-1384902.jpg", "https://images.freeimages.com/images/small-previews/6e4/cemetary-1387449.jpg", "https://images.freeimages.com/images/small-previews/bf2/fields-1-1370990.jpg", "https://images.freeimages.com/images/small-previews/950/serious-grasshopper-1-1056340.jpg", "https://images.freeimages.com/images/small-previews/002/two-gerbers-1408523.jpg", "https://images.freeimages.com/images/small-previews/c53/yellowstone-river-1361768.jpg", "https://images.freeimages.com/images/small-previews/256/spring-1376144.jpg", "https://images.freeimages.com/images/small-previews/e51/tokyo05-2-1447803.jpg", "https://images.freeimages.com/images/small-previews/0db/tropical-bird-1390996.jpg", "https://images.freeimages.com/images/small-previews/901/butterfly-dress-1520606.jpg", "https://images.freeimages.com/images/small-previews/ffa/water-lilly-1368676.jpg", "https://images.freeimages.com/images/small-previews/fec/sunset-rays-1391805.jpg", "https://images.freeimages.com/images/small-previews/176/mansion-in-the-canyon-1575490.jpg", "https://images.freeimages.com/images/small-previews/48d/marguerite-1372118.jpg", "https://images.freeimages.com/images/small-previews/99b/sunflowers-3-1393020.jpg", "https://images.freeimages.com/images/small-previews/9b6/among-giants-1375605.jpg", "https://images.freeimages.com/images/small-previews/03e/wild-flowers-1628445.jpg", "https://images.freeimages.com/images/small-previews/fb3/grass-1379193.jpg", "https://images.freeimages.com/images/small-previews/e71/frog-1371919.jpg", "https://images.freeimages.com/images/small-previews/981/cow-1380252.jpg", "https://images.freeimages.com/images/small-previews/5b7/on-the-road-7-1384791.jpg", "https://images.freeimages.com/images/small-previews/58f/double-bass-1423720.jpg", "https://images.freeimages.com/images/small-previews/e0c/hawaiin-sunset-1368289.jpg", "https://images.freeimages.com/images/small-previews/b74/wild-poppies-1384853.jpg", "https://images.freeimages.com/images/small-previews/241/night-fog-1521028.jpg", "https://images.freeimages.com/images/small-previews/bfd/clouds-1371838.jpg", "https://images.freeimages.com/images/small-previews/1e7/japanese-food-1327425.jpg", "https://images.freeimages.com/images/small-previews/716/flower-1372780.jpg", "https://images.freeimages.com/images/small-previews/85a/daisy-s-1375598.jpg", "https://images.freeimages.com/images/small-previews/8ee/multicolor-drop-2-1056473.jpg", "https://images.freeimages.com/images/small-previews/8a5/red-tulip-2-1401227.jpg", "https://images.freeimages.com/images/small-previews/859/burning-trees-1391193.jpg", "https://images.freeimages.com/images/small-previews/7c7/tulips-1531279.jpg", "https://images.freeimages.com/images/small-previews/615/corcovado-sunset-1527899.jpg", "https://images.freeimages.com/images/small-previews/700/road-to-nowhere-1383109.jpg", "https://images.freeimages.com/images/small-previews/0d6/blue-flowers-with-macro-4-1400913.jpg", "https://images.freeimages.com/images/small-previews/efb/lotus-flower-1382251.jpg", "https://images.freeimages.com/images/small-previews/b2d/kiwi-fruit-macros-1313905.jpg", "https://images.freeimages.com/images/small-previews/b85/bay-lrt-station-1626400.jpg", "https://images.freeimages.com/images/small-previews/9a4/large-pumpkin-1387927.jpg", "https://images.freeimages.com/images/small-previews/0cf/tulips-1-1377350.jpg", "https://images.freeimages.com/images/small-previews/f13/factory-1446641.jpg", "https://images.freeimages.com/images/small-previews/e2a/boise-downtown-1387405.jpg"]

	},
	onLoad: function () {

		lazyload = new lazyLoad(this, {
			classNote: '.item-',				//循环节点
			initNum: 5,						//初始化展示多少个节点
			limit: 5						//每次加载多少个节点
		})
	},

	onReady: function () {
		lazyload.observe();


	},
})

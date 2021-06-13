<template>
	<view class="content">
		<search>
			
		</search>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" indicator-active-color="#fff" circular="true" :autoplay="true" :interval="3000" :duration="1000" class="banner">
			<swiper-item v-for="item in bannerList" :key="item.bannerId"><image :src="item.pic"></image></swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="navContainer">
			<view class="navItem">
				<text class="iconfont icon-biaoqiankuozhan_tuijian-126 navItem-i"></text>
				<text>每日推荐</text>
			</view>
			<view class="navItem">
				<text class="iconfont icon-gedan navItem-i"></text>
				<text>歌单</text>
			</view>
			<view class="navItem">
				<text class="iconfont icon-paihang- navItem-i"></text>
				<text>排行榜</text>
			</view>
			<view class="navItem">
				<text class="iconfont icon-zhuanji navItem-i"></text>
				<text>数字专辑</text>
			</view>
			<view class="navItem">
				<text class="iconfont icon-dianshizhiboguankanshipinbofangmeiti navItem-i"></text>
				<text>直播</text>
			</view>
		</view>
		<!-- 推荐歌单 -->
		<view class="recommendContainer">
			<view class="recommend">
				<h3>推荐歌单</h3>
				<view>
					更多
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<scroll-view scroll-x="true" class="recommendScroll" enable-flex="true">
				<view v-for="item in recommendList" :key="item.id" class="scrollItem">
					<image :src="item.picUrl"></image>
					<text>{{ item.name }}</text>
				</view>
			</scroll-view>
		</view>
		<!-- 排行榜 -->
		<view class="topList">
			<view class="recommend">
				<h3>排行榜</h3>
				<view>
					更多
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<swiper next-margin="50rpx" class="topListSwiper">
				<swiper-item v-for="item in topList" :key="item.id">
					<view class="swiperItem">
						<view class="title">{{ item.name }}</view>
						<view class="musicItem" v-for="(musicItem, index) in item.tracks" :key="musicItem.id">
							<image :src="musicItem.al.picUrl"></image>
							<view class="count">{{ index + 1 }}</view>
							<view class="musicName">{{ musicItem.name }}</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<tabBar></tabBar>
	</view>
</template>

<script>
import tabBar from '../../commonts/footer/footer.vue';
import search from '../../commonts/header/header.vue';
import request from '../../utils/request.js';
export default {
	data() {
		return {
			bannerList: [],
			recommendList: [],
			topList: []
		};
	},
	components: {
		tabBar,
		search
	},
	onLoad() {
		this.setData();
	},
	methods: {
		async setData() {
			const { banners } = await request('/banner', { type: 2 });
			this.bannerList = banners;
			const { result } = await request('/personalized', { limit: 10 });
			this.recommendList = result;
			let resultArr = [];
			let index = 0;
			for (let i = 0; i < 6; i++) {
				const { playlist } = await request('/top/list', { idx: index++ });
				let topListData = {
					name: playlist.name,
					tracks: playlist.tracks.slice(0, 3)
				};
				resultArr.push(topListData);
			}
			this.topList = resultArr;
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;
	// 轮播图
	.banner {
		margin: 10px auto;
		width: 100%;
		height: 300rpx;
		border-radius: 30rpx;
		text-align: center;
		image {
			width: 92%;
			height: 100%;
			border-radius: 20rpx;
		}
	}
	// 导航
	.navContainer {
		width: 92%;
		margin: 0 auto 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: #fffdef;
		.navItem {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.navItem-i + text {
				font-size: 20rpx;
			}
			.navItem-i {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				background-color: rgba(150, 150, 150, 0.4);
				text-align: center;
				line-height: 100rpx;
				font-size: 60rpx;
				color: #ffffff;
				margin-bottom: 15rpx;
			}
		}
	}
	// 推荐歌单
	.recommendContainer {
		margin: 0 auto;
		padding: 20rpx;
		.recommendScroll {
			display: flex;
			height: 270rpx;
			.scrollItem {
				width: 200rpx;
				margin-right: 20rpx;
			}
			.scrollItem image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
			.scrollItem text {
				font-size: 24rpx;
				color: #fff;
				/* 多行文本溢出隐藏 省略号代替 */
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical; /*设置纵向对齐*/
				-webkit-line-clamp: 2; /*设置盒子行数*/
			}
		}
		.recommend {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20rpx;
			color: #fff;
			h3 + view {
				text-align: center;
				width: 130rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 30rpx;
				border: 1px solid #999;
				border-radius: 50rpx;
				text {
					font-size: inherit;
				}
			}
		}
	}
	// 排行榜
	.topList {
		padding: 20rpx;
		.recommend {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20rpx;
			color: #fff;
			h3 + view {
				text-align: center;
				width: 130rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 30rpx;
				border: 1px solid #999;
				border-radius: 50rpx;
				text {
					font-size: inherit;
				}
			}
		}
		.topListSwiper {
			height: 440rpx;
			.swiperItem {
				width: 95%;
				background-color: rgb(248, 248, 248);
				border-radius: 10rpx;
				.title {
					text-align: center;
					font-size: 30rpx;
					line-height: 80rpx;
					padding-left: 10rpx;
				}
				.musicItem {
					/* 一个元素为flex，子元素自动变成block */
					display: flex;
					image {
						width: 100rpx;
						height: 100rpx;
						margin-bottom: 20rpx;
						border-radius: 6rpx;
						padding-left: 10rpx;
					}
					.count {
						width: 100rpx;
						height: 100rpx;
						text-align: center;
						line-height: 100rpx;
					}
					.musicName {
						height: 100rpx;
						line-height: 100rpx;
						max-width: 400rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
}
</style>

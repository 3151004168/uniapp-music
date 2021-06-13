<template>
	<view class="personalContainer">
		<search>
			<slot><view></view></slot>
		</search>
		<view class="user-section">
			<image src="../../static/images/personal/bgImg2.jpg" class="bg"></image>
			<view class="user-info-box" @click="toLogin()">
				<view class="portrait-box"><image class="portrait" :src="userInfo.avatarUrl ? userInfo.avatarUrl : '../../static/images/personal/missing-face.png'"></image></view>
				<view class="info-box">
					<text class="username">{{ userInfo.nickname ? userInfo.nickname : '游客' }}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="../../static/images/personal/vip-card-bg.png"></image>
				<view class="b-btn">立即开通</view>
				<view class="tit">
					<!-- 会员图标-->
					<text class="iconfont icon-huiyuan"></text>
					会员
				</view>
				<text class="e-m">Hello World</text>
				<text class="e-b">开通会员听歌</text>
			</view>
		</view>
		<view
			class="cover-container"
			bindtouchstart="handleTouchStart"
			bindtouchmove="handleTouchMove"
			bindtouchend="handleTouchEnd"
			style="transform: coverTransform;transition: coverTransition"
		>
			<image class="arc" src="/static/images/personal/arc.png"></image>
			<!-- 个人中心导航 -->
			<view class="nav-section">
				<view class="nav-item" hover-class="common-hover" hover-stay-time="50">
					<text class="iconfont icon-comment"></text>
					<text>我的消息</text>
				</view>
				<view class="nav-item" hover-class="common-hover" hover-stay-time="50">
					<text class="iconfont icon-team"></text>
					<text>我的好友</text>
				</view>
				<view class="nav-item" hover-class="common-hover" hover-stay-time="50">
					<text class="iconfont icon-user"></text>
					<text>个人主页</text>
				</view>
				<view class="nav-item" hover-class="common-hover" hover-stay-time="50">
					<text class="iconfont icon-skin"></text>
					<text>个性装扮</text>
				</view>
			</view>

			<!-- 个人中心列表 -->
			<view class="personalContent">
				<view class="recentPlayContainer">
					<text class="title">最近播放</text>
					<!-- 最近播放记录 -->
					<scroll-view v-if="recentPlayList.length" scroll-x="true" class="recentScroll" enable-flex="true">
						<view class="recentItem" v-for="item in recentPlayList" :key="item.id"><image :src="item.song.al.picUrl"></image></view>
					</scroll-view>
					<view v-else>暂无播放记录</view>
				</view>

				<view class="cardList">
					<view class="card-item">
						<text class="title">我的音乐</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<text class="title">我的收藏</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<text class="title">我的电台</text>
						<text class="more">></text>
					</view>
				</view>
			</view>
		</view>
		<tabBar></tabBar>
	</view>
</template>

<script>
import search from '../../commonts/header/header.vue';
import tabBar from '../../commonts/footer/footer.vue';
import request from '../../utils/request.js';
export default {
	data() {
		return {
			userInfo: {},
			coverTransform: 'translateY(0)',
			coverTransition: '',
			recentPlayList: []
		};
	},
	methods: {
		async setUserInfo() {
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				userInfo: JSON.parse(userInfo);
			}
		},
		toLogin(){
			uni.navigateTo({
				url:'../login/login'
			})
		}
	},
	components: {
		search,
		tabBar
	},
	onLoad() {
		this.setUserInfo();
	}
};
</script>

<style lang="scss" scoped>
.personalContainer {
	width: 100vw;
	height: 100vh;
}

.personalContainer .user-section {
	height: 520rpx;
	position: relative;
	padding: 100rpx 30rpx 0;
}
.user-section .bg {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.7;
	filter: blur(1px);
}

.user-info-box {
	height: 180rpx;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 1;
}

.user-info-box .portrait {
	width: 130rpx;
	height: 130rpx;
	border: 5rpx solid #fff;
	border-radius: 50%;
}
.user-info-box .username {
	font-size: 24;
	color: #303133;
	margin-left: 20rpx;
}

/* vip-box */
.vip-card-box {
	position: relative;
	display: flex;
	flex-direction: column;
	background: rgba(0, 0, 0, 0.7);
	height: 240rpx;
	color: #f7d680;
	border-radius: 16rpx 16rpx 0 0;
	padding: 20rpx 24rpx;
}

.vip-card-box .card-bg {
	position: absolute;
	top: 20rpx;
	right: 0;
	width: 380rpx;
	height: 260rpx;
}

.vip-card-box .b-btn {
	position: absolute;
	right: 20rpx;
	top: 16rpx;
	width: 132rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	font-size: 22rpx;
	color: #36343c;
	border-radius: 20px;
	background: #f9e6af;
	z-index: 1;
}

.vip-card-box .b-btn {
	position: absolute;
	right: 20rpx;
	top: 16rpx;
	width: 132rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	font-size: 22rpx;
	color: #36343c;
	border-radius: 20px;
	/*background: linear-gradient(left, #f9e6af, #ffd465);*/ /*渐变不生效*/
	background: #f9e6af;
	z-index: 1;
}

.vip-card-box .tit {
	font-size: 22rpx;
	color: #f7d680;
	margin-bottom: 28rpx;
}
.vip-card-box .tit .iconfont {
	color: #f6e5a3;
	margin-right: 16rpx;
}

.vip-card-box .e-m {
	font-size: 34rpx;
	margin-top: 10rpx;
}
.vip-card-box .e-b {
	font-size: 24rpx;
	color: #d8cba9;
	margin-top: 10rpx;
}

.cover-container {
	width: 100%;
	margin-top: -150rpx;
	position: relative;
	bottom: 0;
	right: 0;
	padding-bottom: 50rpx;
	background: #f5f5f5;
}

.cover-container .arc {
	position: absolute;
	left: 0;
	top: -34rpx;
	height: 36rpx;
}

/* 导航部分 */
.cover-container .nav-section {
	display: flex;
	background: #fff;
	padding: 20rpx 0;
	border-radius: 15rpx;
	width: 90%;
	margin: 0 auto;
}

.nav-section .nav-item {
	width: 25%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.nav-section .nav-item .iconfont {
	font-size: 50rpx;
	color: #d43c33;
	line-height: 70rpx;
}

.nav-section .nav-item text:last-child {
	font-size: 22rpx;
}

/* 个人中心列表 */
.personalContent {
	background: #fff;
	width: 90%;
	margin: 20rpx auto 0;
}

/* 最近播放 */
.personalContent .scrollView {
	display: flex;
	height: 160rpx;
}
.personalContent .recentPlay {
	display: flex;
}

.recentPlayContainer .title {
	padding-left: 20rpx;
	font-size: 26rpx;
	color: #333;
	line-height: 80rpx;
}

.personalContent .recentPlay image {
	width: 160rpx;
	height: 160rpx;
	margin-left: 20rpx;
	border-radius: 20rpx;
}

.cardList {
	margin-top: 20rpx;
}
.cardList .card-item {
	border-top: 1rpx solid #eee;
	height: 80rpx;
	line-height: 80rpx;
	padding: 10rpx;
	font-size: 26rpx;
	color: #333;
}
.cardList .card-item .more {
	float: right;
}

/*最近播放记录*/
.recentScroll {
	display: flex;
	height: 200rpx;
}
.recentItem {
	margin: 0 20rpx;
}
.recentItem image {
	width: 200rpx;
	height: 200rpx;
	border-radius: 10rpx;
}
</style>

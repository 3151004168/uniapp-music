<template>
	<view class="tabBar">
		<view class="home" @click="getHome()">
			<text class="iconfont icon-V"></text>
			主页
		</view>
		<view class="video" @click="getVideo()">
			<text class="iconfont icon-shipin"></text>
			视频
		</view>
		<view class="my" @click="getMy()">
			<text class="iconfont icon-user"></text>
			我的
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		getHome() {
			uni.redirectTo({
				url: '../../pages/index/index'
			});
		},
		getVideo() {
			uni.redirectTo({
				url: '../../pages/video/video'
			});
		},
		getMy() {
			uni.redirectTo({
				url: '../../pages/user/user'
			});
		}
	},
	onLoad() {}
};
</script>

<style lang="scss">
.tabBar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 130rpx;
	display: flex;
	flex-direction: row;
	background-color: #fff0f5;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	.home,
	.video,
	.my {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 110rpx;
		height: 110rpx;
		border-radius: 50px;
		background-color: #00bfff;
		color: #f1f1f1;
		font-size: 20rpx;
		.iconfont {
			font-size: 70rpx;
		}
	}
	.bgc {
		background-color: $uni-color-error;
		color: $uni-color-warning;
	}
}
</style>

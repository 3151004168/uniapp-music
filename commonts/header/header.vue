<template>
	<view>
		<image src="../../static/images/TomaTodo-Poster-8793.jpg" class="bgImg"></image>
		<view class="nav">
			<view class="left"><i class="iconfont icon-menu"></i></view>
			<slot>
				<view class="search">
					<text class="iconfont icon-search"></text>
					<slot name="title" class="title">音乐 / 视频 / 用户</slot>
				</view>
			</slot>
			<view class="right"><i class="iconfont icon-customerservice"></i></view>
		</view>
	</view>
	<!-- 导航栏 -->
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.bgImg {
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: -1;
}
.nav {
	// position: absolute;
	// left: 0;
	// top: 0;
	padding-top: 40rpx;
	height: 60rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	z-index: 999;
	.search {
		background-color: rgba(220, 220, 220, 0.3);
		border-radius: 50rpx;
		padding-left: 30rpx;
		flex: 1;
		color: rgba(255, 255, 255, 0.3);
		line-height: 60rpx;
		display: flex;
		flex-direction: row;
	}
	.left,
	.right {
		width: 40px;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
	}
	use {
		font-size: 45rpx;
	}
}
</style>

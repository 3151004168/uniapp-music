<template>
	<view class="login">
		<search>
			<slot><view>登录</view></slot>
		</search>
		<view class="container">
			<view class="user">
				手机号码：
				<input type="text" value="" placeholder="请输入手机号" />
			</view>
			<view class="user m100">
				密码：
				<input type="text" value=""  placeholder="请输入密码" />
			</view>
			<button type="default"></button>
			<text>忘记密码</text>
			<text>还没有账号？马上注册</text>
		</view>
	</view>
</template>

<script>
import search from '../../commonts/header/header.vue';
export default {
	data() {
		return {};
	},
	methods: {},
	components: {
		search
	}
};
</script>

<style lang="scss">
.login {
	color: #fff;
	height: 100vh;
}
.container {
	width: 80%;
	height: 93%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	.user{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background: rgba(255,255,255,.7);
		border-radius: 50px;
		padding: 10px 0;
		margin-bottom: 10px;
	}
	.m100{
		margin-bottom: 100px;
	}
	button {
		width: 80%;
		height: 100rpx;
		background-color: $uni-color-primary;
		border-radius: 50px;
	}
}
</style>

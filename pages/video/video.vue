<template>
	<view class="video">
		<!-- 头部 -->
		<search>
			<template v-slot:title>
				光辉岁月
			</template>
		</search>
		<view class="container"></view>
		<!--  -->
		<tabBar></tabBar>
	</view>
</template>

<script>
import search from '../../commonts/header/header.vue';
import tabBar from '../../commonts/footer/footer.vue';
import request from '../../utils/request.js'
export default {
	data() {
		return {};
	},
	methods: {
		async setData(){
			const data = await request(
				'/video/group/list',
			)
			console.log(data)
		}
	},
	components: {
		search,
		tabBar
	}
};
</script>

<style lang="scss" scoped>
.video {
	width: 100vw;
	height: 100vh;
}
</style>

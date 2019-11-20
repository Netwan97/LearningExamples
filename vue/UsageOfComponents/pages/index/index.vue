<template>
	<view class="">
		<uni-number-box></uni-number-box>
		<uni-number-box :min="0" :max="9"></uni-number-box>
		<uni-number-box @change="bindChange"></uni-number-box>
	</view>
	
	
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default {
		data() {
			return {
				title: 'Hello...'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {uniNumberBox}
	}
</script>

<style lang="less">
	@import "../../less.less";
</style>

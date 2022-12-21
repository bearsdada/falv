<template>
	<view class="container">
		<view class="form-wrap">
			<view class="form-li">
				<view class="form-l">入职时间</view>
				<view class="form-r">2022-11-15</view>
			</view>
			<view class="form-li">
				<view class="form-l">离职时间</view>
				<view class="form-r">2022-11-15</view>
			</view>
			<view class="form-li">
				<view class="form-l">离职人员前12个月平均工资</view>
				<view class="form-r"><input type="text" placeholder="请填写"></view>
			</view>
			<view class="form-li">
				<view class="form-l">本地区上年度月平均工资</view>
				<view class="form-r"><input type="text" placeholder="请填写"></view>
			</view>
			<view class="form-li">
				<view class="form-l">应发放经济补偿金</view>
				<view class="form-r"><input type="text" class="orange" placeholder="请填写"></view>
			</view>
		</view>
		<view class="f-30 c pt-18 pb-18">劳动法常用计算器</view>
		<view class="func-wrap c">
			<view class="item-li c">
				<text class="iconfont">表情</text>
				<text class="text">加班费</text>
			</view>
			<view class="item-li c">
				<text class="iconfont">表情</text>
				<text class="text">经济补偿金</text>
			</view>
			<view class="item-li c">
				<text class="iconfont">表情</text>
				<text class="text">补偿金个税</text>
			</view>
			<view class="item-li c">
				<text class="iconfont">表情</text>
				<text class="text">年休假</text>
			</view>
		</view>
		<tabBar v-if="!is_diy" :pagePath="'/pages/calculator/index'"></tabBar>
	</view>
</template>

<script>
	import tabBar from "@/pages/index/visualization/components/tabBar.vue";
	export default {
		components:{
			tabBar
		},
		data() {
			return {
				is_diy:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.func-wrap{
		.item-li{
			.iconfont{
				color:#8f6222;
			}
			.text{
				margin-top:14rpx;
				font-size:28rpx;
			}
			border-right:1rpx solid #ddd;
			height: 180rpx;
			flex:1;
			display: flex;
			flex-direction: column;
		}
		border: 1rpx solid #ddd;
	}
	.pt-18{padding-top:18rpx}
	.pb-18{padding-bottom:18rpx}
	.c{display: flex;align-items: center;justify-content: center;}
	.f-30{font-size:30rpx;}
	.form-wrap{
		.form-li{
			input{
				max-width: 250rpx;
				width:100%;
				text-align:right;
				font-size:32rpx;
			}
			align-items: center;
			height: 105rpx;
			display:flex;
			font-size:32rpx;
			border-bottom:2rpx solid #f0f0f0;
			justify-content: space-between;
		}
		padding:0 28rpx;
		background:#fff;
	}
	.orange{
		color:#b27f55;
	}
	.container{
		min-height:100vh;
		background-color:#f8f8f8;
	}
</style>

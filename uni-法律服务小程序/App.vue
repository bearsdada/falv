<script>
	import {
		checkLogin
	} from './libs/login';
	import {
		HTTP_REQUEST_URL
	} from './config/app';
	import {
		getShopConfig,
		silenceAuth
	} from '@/api/public';
	import Auth from '@/libs/wechat.js';
	import Routine from './libs/routine.js';
	import {
		silenceBindingSpread
	} from "@/utils";
	import {
		getCartCounts,
	} from '@/api/order.js';
	import {
		colorChange,
		getCrmebCopyRight,

	} from '@/api/api.js';
	import {
		getLangJson
	} from '@/api/user.js'
	import {
		mapGetters
	} from "vuex"
	import colors from '@/mixins/color.js';
	import Cache from '@/utils/cache';
	let green =
		'--view-theme: rgba(66,202,77,1);--view-theme-16: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(66,202,77, 0.1);--view-main-start:#70E038; --view-main-over:#42CA4D;--view-op-point-four: rgba(66,202,77, 0.04);'
	let red =
		'--view-theme: rgba(233,51,35,1);--view-theme-16: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(233,51,35, 0.1);--view-main-start:#FF6151; --view-main-over:#e93323;--view-op-point-four: rgba(233,51,35, 0.04);'
	let blue =
		'--view-theme: rgba(29,176,252,1);--view-theme-16:#1db0fc;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;--view-op-ten: rgba(29,176,252, 0.1);--view-main-start:#40D1F4; --view-main-over:#1DB0FC;--view-op-point-four: rgba(29,176,252, 0.04);'
	let pink =
		'--view-theme: rgba(255,68,143,1);--view-theme-16:#ff448f;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;--view-op-ten: rgba(255,68,143, 0.1);--view-main-start:#FF67AD; --view-main-over:#FF448F;--view-op-point-four: rgba(255,68,143, 0.04);'
	let orange =
		'--view-theme: rgba(254,92,45,1); --view-theme-16:#FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;--view-op-ten: rgba(254,92,45, 0.1);--view-main-start:#FF9445; --view-main-over:#FE5C2D;--view-op-point-four: rgba(254,92,45, 0.04);'

	export default {
		globalData: {
			spid: 0,
			code: 0,
			isLogin: false,
			userInfo: {},
			MyMenus: [],
			globalData: false,
			isIframe: false,
			tabbarShow: true,
			windowHeight: 0,
			locale: ''
		},
		mixins: [colors],
		computed: mapGetters(['isLogin', 'cartNum']),
		watch: {
			isLogin: {
				deep: true, //????????????????????? true
				handler: function(newV, oldV) {
					if (newV) {
						// this.getCartNum()
					} else {
						this.$store.commit('indexData/setCartNum', '')
					}
				}
			},
			cartNum(newCart, b) {
				this.$store.commit('indexData/setCartNum', newCart + '')
				if (newCart > 0) {
					uni.setTabBarBadge({
						index: Number(uni.getStorageSync('FOOTER_ADDCART')) || 2,
						text: newCart + ''
					})
				} else {
					uni.hideTabBarRedDot({
						index: Number(uni.getStorageSync('FOOTER_ADDCART')) || 2
					})
				}
			}
		},
		onShow() {
			const queryData = uni.getEnterOptionsSync() // uni-app?????? 3.5.1+ ??????
			if (queryData.query.spread) {
				this.$Cache.set('spread', queryData.query.spread);
				this.globalData.spid = queryData.query.spread;
				this.globalData.pid = queryData.query.spread;
				silenceBindingSpread(this.globalData)
			}
			if (queryData.query.spid) {
				this.$Cache.set('spread', queryData.query.spid);
				this.globalData.spid = queryData.query.spid;
				this.globalData.pid = queryData.query.spid;
				silenceBindingSpread(this.globalData)
			}
			// #ifdef MP
			if (queryData.query.scene) {
				switch (queryData.scene) {
					//??????????????????
					case 1047:
						this.globalData.code = queryData.query.scene;
						break;
						//??????????????????????????????
					case 1048:
						this.globalData.code = queryData.query.scene;
						break;
						//??????????????????????????????
					case 1049:
						this.globalData.code = queryData.query.scene;
						break;
						//?????????????????????
					case 1001:
						this.globalData.spid = queryData.query.scene;
						break;
				}
				silenceBindingSpread(this.globalData)
			}
			// #endif
		},
		async onLaunch(option) {
			uni.hideTabBar()
			let that = this;
			colorChange('color_change').then(res => {
				uni.setStorageSync('is_diy', res.data.is_diy)
				uni.$emit('is_diy', res.data.is_diy)
				switch (res.data.status) {
					case 1:
						uni.setStorageSync('viewColor', blue)
						uni.$emit('ok', blue, res.data.status)
						break;
					case 2:
						uni.setStorageSync('viewColor', green)
						uni.$emit('ok', green, res.data.status)
						break;
					case 3:
						uni.setStorageSync('viewColor', red)
						uni.$emit('ok', red, res.data.status)
						break;
					case 4:
						uni.setStorageSync('viewColor', pink)
						uni.$emit('ok', pink, res.data.status)
						break;
					case 5:
						uni.setStorageSync('viewColor', orange)
						uni.$emit('ok', orange, res.data.status)
						break;
					default:
						uni.setStorageSync('viewColor', red)
						uni.$emit('ok', red, res.data.status)
						break
				}
			});
			if (!Cache.has('localeSet')) {
				getLangJson().then(res => {
					Cache.set('locale', Object.keys(res.data)[0])
					uni.setStorageSync('localeJson', res.data);
					Cache.set('localeSet', true, 600) // ????????????????????????
				})
			}

			// #ifdef APP-PLUS || H5
			uni.getSystemInfo({
				success: function(res) {
					// ????????????title?????????????????????????????????????????????????????????????????????????????????????????????
					// ????????????????????????????????? ??????????????????????????????44px
					let height = res.windowHeight - res.statusBarHeight - 44
					// #ifdef H5 || APP-PLUS
					that.globalData.windowHeight = res.windowHeight + 'px'
					// #endif
					// // #ifdef APP-PLUS
					// that.globalData.windowHeight = height + 'px'
					// // #endif

				}
			});
			// #endif	
			// #ifdef MP
			if (HTTP_REQUEST_URL == '') {
				console.error(
					"????????????????????????config.js???????????? 'HTTP_REQUEST_URL'\n\n???????????????????????????????????????->???AppID??????????????????Appid\n\n??????????????????????????????->???????????????????????????????????? appId and AppSecret"
				);
				return false;
			}

			const updateManager = wx.getUpdateManager();
			const startParamObj = wx.getEnterOptionsSync();
			if (wx.canIUse('getUpdateManager') && startParamObj.scene != 1154) {
				const updateManager = wx.getUpdateManager()
				updateManager.onCheckForUpdate(function(res) {
					// ?????????????????????????????????
					// console.log(res.hasUpdate)
					if (res.hasUpdate) {
						updateManager.onUpdateFailed(function() {
							return that.Tips({
								title: '?????????????????????'
							});
						});
						updateManager.onUpdateReady(function() {
							wx.showModal({
								title: '????????????',
								content: '??????????????????????????????????????????????????????',
								success(res) {
									if (res.confirm) {
										updateManager.applyUpdate()
									}
								}
							})
						})
						updateManager.onUpdateFailed(function() {
							wx.showModal({
								title: '???????????????',
								content: '?????????????????????????????????????????????...',
							})
						})
					}
				})
			}
			// #endif

			// getShopConfig().then(res => {
			// 	this.$store.commit('SETPHONESTATUS', res.data.status);
			// });
			// ?????????????????????
			uni.getSystemInfo({
				success: function(res) {
					that.globalData.navHeight = res.statusBarHeight * (750 / res.windowWidth) + 91;
				}
			});
			// #ifdef MP
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			that.globalData.navH = menuButtonInfo.top * 2 + menuButtonInfo.height / 2;
			const version = uni.getSystemInfoSync().SDKVersion
			if (Routine.compareVersion(version, '2.21.3') >= 0) {
				that.$Cache.set('MP_VERSION_ISNEW', true)
			} else {
				that.$Cache.set('MP_VERSION_ISNEW', false)
			}
			// #endif

			// #ifdef H5
			uni.getSystemInfo({
				success(e) {
					/* ??????????????????420px?????????PC??????????????????????????????????????? PC.html ?????? */
					if (e.windowWidth > 420 && !window.top.isPC && !/iOS|Android/i.test(e.system)) {
						window.location.pathname = '/static/html/pc.html';
					}
				}
			});
			if (option.query.hasOwnProperty('type') && option.query.type == "iframeWindow") {
				this.globalData.isIframe = true;
			} else {
				this.globalData.isIframe = false;
			}
			// #endif
			// #ifdef MP
			// ?????????????????????
			// if (!this.$store.getters.isLogin) {
			// 	Routine.getCode()
			// 		.then(code => {
			// 			this.silenceAuth(code);
			// 		})
			// 		.catch(res => {
			// 			uni.hideLoading();
			// 		});
			// }
			// #endif
			// #ifdef H5
			// ??????crmeb chat ??????
			var __s = document.createElement('script');
			__s.src = `${HTTP_REQUEST_URL}/api/get_script`;
			document.head.appendChild(__s);
			// #endif
			getCrmebCopyRight().then(res => {
				uni.setStorageSync('copyRight', res.data)
			})
		},
		// #ifdef H5
		onHide() {
			this.$Cache.clear('snsapiKey')
		},
		// #endif
		methods: {
			// ?????????????????????
			// silenceAuth(code) {
			// 	let that = this;
			// 	let spread = that.globalData.spid ? that.globalData.spid : '';
			// 	silenceAuth({
			// 			code: code,
			// 			spread_spid: spread,
			// 			spread_code: that.globalData.code
			// 		})
			// 		.then(res => {
			// 			if (res.data.token !== undefined && res.data.token) {
			// 				uni.hideLoading();
			// 				let time = res.data.expires_time - this.$Cache.time();
			// 				that.$store.commit('LOGIN', {
			// 					token: res.data.token,
			// 					time: time
			// 				});
			// 				that.$store.commit('SETUID', res.data.userInfo.uid);
			// 				that.$store.commit('UPDATE_USERINFO', res.data.userInfo);
			// 			}
			// 		})
			// 		.catch(res => {});
			// },
		},

	};
</script>

<style>
	@import url('@/plugin/emoji-awesome/css/tuoluojiang.css');
	@import url('@/plugin/animate/animate.min.css');
	@import 'static/css/base.css';
	@import 'static/iconfont/iconfont.css';
	@import 'static/css/guildford.css';
	@import 'static/css/style.scss';

	view {
		box-sizing: border-box;
	}

	page {
		font-family: PingFang SC;
	}

	.bg-color-red {
		background-color: var(--view-theme) !important;
	}

	.syspadding {
		padding-top: var(--status-bar-height);
	}

	.flex {
		display: flex;
	}

	.uni-scroll-view::-webkit-scrollbar {
		/* ?????????????????????????????????????????????????????? */
		display: none;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.uni-system-open-location .map-content.fix-position {
		height: 100vh;
		top: 0;
		bottom: 0;
	}

	.open-location {
		width: 100%;
		height: 100vh;
	}
</style>

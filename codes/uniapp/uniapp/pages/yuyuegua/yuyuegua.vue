<template>
	<view>
		<u-navbar title="预约挂号" :background="background"></u-navbar>
		<u-notice-bar mode="vertical" :list="tishi"></u-notice-bar>

		<view>
			<u-tabs-swiper ref="uTabs" :list="dptlist" :current="current" @change="tabsChange" :is-scroll="true"
				swiperWidth="750" bg-color="#eeeeee"></u-tabs-swiper>
		</view>
		<view style="height:20rpx;width: 100%;">
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item style="width: 100%;" class="swiper-item" v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y style="height:100%;width: 100%;" @scrolltolower="onreachBottom">

						<view class="item u-border-bottom" v-for="(itm, idx) in item" :key="idx">
							<image v-if="tabs[index][idx].sex==='男'" src="../../static/icons/mandoct.png"
								class="img-80" />
							<image v-else src="../../static/icons/womandoct.png" class="img-80" />
							<view class="title-wrap" style="width: 300rpx;font-size: 35rpx;padding-left: 50rpx;">
								<text class="title u-line-2">{{tabs[index][idx].doctorName}}</text>
							</view>
							<button type="primary" @tap="yuyue(tabs[index][idx].id)">预约</button>
							
							
						</view>

					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

		<u-picker  mode="time" :end-year="endyear" :start-year="startyear" v-model="show" @confirm="confirm" @change="change"
			:params="params"></u-picker>
			<u-toast ref="uToast" />
	</view>
	
</template>


<script>
	import request from "@/utils/request";
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false
				},
				show: false,
				startyear: 0,
				endyear: 0,
				background: {
					backgroundColor: '#eeeeee',

				},
				tishi: [
					'温馨提示:如对挂号有疑问，可前往首页进行自助导诊',

				],
				//标签内容
				dptlist: [],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				//下面的内容
				tabs: [],
				doctors: [],
				selectdoc:0,
				userid:0,
				
			}
		},
		onLoad() {
			this.load()
			
		},
		onPullDownRefresh(){
			this.load()
			uni.stopPullDownRefresh()
		},
		methods: {
			//预约失败的toast
			failToast(msg) {
				this.$refs.uToast.show({
					title: msg,
					type: 'error',
					// url: '../index/index',
					position: 'bottom',
				})
			},
			//预约成功的toast
			successToast(msg) {
				this.$refs.uToast.show({
					title: msg,
					type: 'success',
					//url: '/pages/index/index',
					position: 'bottom',
					//duration:1000,
					
				})
			},
			tabsChange(index) {
				this.swiperCurrent = index;

			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;

			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			yuyue(e){
				this.show=true
				// console.log("doctorid:"+e);
				// console.log("patientid:"+this.userid);
				this.selectdoc=e
			},
			
			confirm(e) {
				
				var patient=JSON.parse(sessionStorage.getItem('user')).id.toString()
				let time = e.year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':00:00';
				var yuyue={
					patientId:this.userid,
					doctorId:this.selectdoc,
					statue:0,
					time:time
				}
				request.post("/yuyue/newyuyue", yuyue).then(res => {
					console.log(res)
					if (res.code === '0') {
						this.successToast("预约成功！")
				
					} else { 
						this.failToast("预约失败！")
					}
				
				})
				// console.log(yuyue);

			},
			// 用户更改picker的列选项
			change(e) {
				this.valueArr = e.detail.value;
				let i = 0;
				if (this.mode == 'time') {
					// 这里使用i++，是因为this.valueArr数组的长度是不确定长度的，它根据this.params的值来配置长度
					// 进入if规则，i会加1，保证了能获取准确的值
					if (this.params.year) this.year = this.years[this.valueArr[i++]];
					if (this.params.month) this.month = this.months[this.valueArr[i++]];
					if (this.params.day) this.day = this.days[this.valueArr[i++]];
					if (this.params.hour) this.hour = this.hours[this.valueArr[i++]];
					if (this.params.minute) this.minute = this.minutes[this.valueArr[i++]];
					if (this.params.second) this.second = this.seconds[this.valueArr[i++]];
				} else if (this.mode == 'region') {
					if (this.params.province) this.province = this.valueArr[i++];
					if (this.params.city) this.city = this.valueArr[i++];
					if (this.params.area) this.area = this.valueArr[i++];
				} else if (this.mode == 'multiSelector') {
					let index = null;
					// 对比前后两个数组，寻找变更的是哪一列，如果某一个元素不同，即可判定该列发生了变化
					this.defaultSelector.map((val, idx) => {
						if (val != e.detail.value[idx]) index = idx;
					});
					// 为了让用户对多列变化时，对动态设置其他列的变更
					if (index != null) {
						this.$emit('columnchange', {
							column: index,
							index: e.detail.value[index]
						});
					}
				}
			},
			load(){
				this.current = 0
				this.swiperCurrent = 0
				this.tabs = []
				this.dptlist = []
				this.userid=JSON.parse(sessionStorage.getItem('user')).id
				//获取各科室医生的信息存入doctors
				request.get("/doctor/loadall", {
					params: {
						pageNum: 1,
						pageSize: 30,
						
					}
				}).then(res => {
					//异步问题	
					// console.log(res.data.records)
					this.doctors=res.data.records
					// console.log(this.doctors)
									
					// this.tabs.splice(i, 1, res.data.records)
				})
					//获取科室信息
					request.get("/department/getdpt").then(res => {
						// console.log(res.data.records)
						for (var i = 0; i < res.data.total; i++) {
							var dptname = res.data.records[i].department
							var dpt = {
								name: dptname
							}
							this.dptlist.push(dpt)
							var tab=[]
							this.doctors.forEach((doctor, idx)=> {
								
								if(doctor.department==dptname)
								{
									// console.log(doctor)
									tab.push(doctor)
								}
								
							})
							this.tabs.push(tab)				
						}
					})		
			}
		}
	}
</script>

<style scoped lang="scss">
	.item {
		display: flex;
		padding: 20rpx;
	}

	.wrap {
		padding: 10rpx;
		padding-top: 0rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		//文字居中
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 8rpx;
	}

	
</style>

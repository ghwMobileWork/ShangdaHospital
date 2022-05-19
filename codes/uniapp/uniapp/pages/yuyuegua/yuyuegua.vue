<template>
	<view>
		<u-navbar title="预约挂号" :background="background"></u-navbar>
		<u-notice-bar mode="vertical" :list="tishi"></u-notice-bar>

		<view>
			<u-tabs-swiper ref="uTabs" :list="dptlist" :current="current" @change="tabsChange" :is-scroll="true"
				swiperWidth="750" bg-color="#eeeeee"></u-tabs-swiper>
		</view>
		<view style="height: 1000rpx;width: 100%;">
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item style="width: 100%;" class="swiper-item" v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y style="height:100%;width: 100%;" @scrolltolower="onreachBottom">

						<view class="item u-border-bottom" v-for="(itm, idx) in item" :key="idx">
							<image v-if="tabs[index][idx].sex==='男'" src="../../static/icons/mandoct.png"
								class="img-80" />
							<image v-else src="../../static/icons/womandoct.png" class="img-80" />
							<view class="title-wrap" style="width: 200rpx;font-size: 35rpx;padding-left: 50rpx;">
								<text class="title u-line-2">{{tabs[index][idx].doctorName}}</text>
							</view>
							<button type="primary">预约</button>
						</view>
						<!-- <view class="item u-border-bottom">
							<image src="../../static/icons/womandoct.png" class="img-80" />
							
			
							<view class="title-wrap">
								<text class="title u-line-2">{{current}}{{tabs[current]}}</text>
							</view>
						</view> -->

					</scroll-view>
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>


<script>
	import request from "@/utils/request";
	export default {
		data() {
			return {

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
			}
		},
		onLoad() {
			this.current = 0
			this.swiperCurrent = 0
			this.tabs = []
			this.dptlist = []
			//获取各科室医生的信息存入doctors
			request.get("/doctor/loadall", {
				params: {
					pageNum: 1,
					pageSize: 20,
					
				}
			}).then(res => {
				//异步问题	
				// console.log(res.data.records)
				this.doctors=res.data.records
				// console.log(this.doctors)
								
				// this.tabs.splice(i, 1, res.data.records)
			})
			
				// console.log(this.doctors)
				// this.doctors.forEach((doctor, idx)=> {
				// 	// console.log(doctor)
					
					
				// })
				
					
				
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
								console.log(doctor)
								tab.push(doctor)
							}
							
						})
						this.tabs.push(tab)
				
					}
					// this.dptlist.forEach((x, index)=> {
					// 	console.log(x + '|' + index + '|');
					// 	var dptname = x.name
					// 	console.log(dptname + '|' + index + '|');
					// 	request.get("/doctor/findbydepartment", {
					// 		params: {
					// 			pageNum: 1,
					// 			pageSize: 20,
					// 			search: dptname
					// 		}
					// 	}).then(res => {
					// 		//异步问题	
					// 		// console.log(res.data.records)
							
					// 		// this.tabs.push(tab)
					// 		this.tabs.splice(index, 1, res.data.records)
					// 	})
					// })
					
						
						// console.log(dptname)
						
						//dptlist是对象
						
						
						// for(var i = 0; i < this.dptlist.length; i++){
						// 	var department=this.dptlist[i]
						// 	var tab=[]
						// 	this.doctors.forEach((x, index)=> {
						// 		console.log(x)
						// 		if(x.department==department)
						// 		tab.push(x)
						// 	})
						// 	this.tabs.push(tab)
						// }
						// this.tabs.forEach((x, index)=> {
						// 	console.log(x + '|' + index + '|');
						// 	var dptname = x.name
						// 	console.log(dptname + '|' + index + '|');
						// 	request.get("/doctor/findbydepartment", {
						// 		params: {
						// 			pageNum: 1,
						// 			pageSize: 20,
						// 			search: dptname
						// 		}
						// 	}).then(res => {
						// 		//异步问题	
						// 		// console.log(res.data.records)
								
						// 		// this.tabs.push(tab)
						// 		this.tabs.splice(index, 1, res.data.records)
						// 	})
						// })
						// var data={}
						// var res= await request.get("/doctor/findbydepartment", {
						// 	params: {
						// 		pageNum: 1,
						// 		pageSize: 20,
						// 		search: dptname
						// 	}
						// })
						// data=res.data.records
						// this.tabs.splice(i, 1, res.data.records)
					
					// console.log(this.tabs)
				})
				// console.log('------tabs------')
				// console.log(this.tabs)
				// console.log('------dptlst------')
				// console.log(this.dptlist)
				
							
			
			
				
			
			


		},
		methods: {
			//获取科室医生方法
			// getDocts(department) {
			// 	request.get("/doctor/findbydepartment", department).then(res => {
			// 		console.log(res.data.records)

			// 	})
			// },
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

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>

<template>
	<view>
		<u-navbar title="会诊记录" :background="background"></u-navbar>
		<view style="display: flex;flex-direction: column;flex-wrap:nowrap;">
			<view class="">
				<button type="default" :class="left" style="width: 50%;float: left;" @tap="tap_l">待就诊</button>
				<button type="default" :class="right" style="width: 50%;float: right;" @tap="tap_r">历史就诊记录</button>
			</view>
			
			<view class="" style="margin-top: 20upx;margin-left: 10upx;">
				<view class="" v-for="(itm, idx) in nowpage" :key="idx">
					<view :class="card" style="display: flex;flex-direction: row;flex-wrap:nowrap;" >
						<image v-if="itm.doctorList[0].sex==='男'" src="../../static/icons/mandoct.png"
							class="img-80" />
						<image v-else src="../../static/icons/womandoct.png" class="img-80" />
						<view >
							<text class="">医生id:{{itm.doctorId}}<br/>医生：{{itm.doctorList[0].doctorName}}</text>
							<br/>
							<text class="">科室:{{itm.doctorList[0].department}}<br/>预约时间：{{itm.time}}</text>
							<br/>
							<text v-if="nowpage==rightpage" style="color: #007AFF;padding-left: 160upx;" @tap="baogao(itm.result)">查看诊断报告</text>
							<view v-if="nowpage==leftpage">
								<text  style="color: #CD5C5C;padding-left: 400upx;" @tap="handlecancel(itm.id)">取消预约</text>
							</view>
							</view>
						
					</view>
					
					
					
				</view>
				<u-top-tips ref="uTips"></u-top-tips>
				<u-modal v-model="show" title="诊断结果"  >
					<view class="slot-content" >
									<rich-text :nodes="content"></rich-text>
								</view>
				</u-modal>
				<u-modal v-model="show_cancel" content="确定取消吗？" show-cancel-button @confirm="confirmdele()"></u-modal>
				
			</view>
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
				left: "current",
				right: "default",
				card: "card_l",
				userid: 0,
				item:[],
				leftpage:[],
				rightpage:[],
				nowpage:this.leftpage,
				show: false,
				show_cancel:false,
				content: '',
				deleid:0,
			}
		},
		onLoad() {
			this.load()
		},
		onPullDownRefresh() {
			this.load()
			uni.stopPullDownRefresh()
		},
		methods: {
			load() {
				this.init()
				this.userid = JSON.parse(sessionStorage.getItem('user')).id
				// console.log(this.userid);
				// if(this.item.length==0){
					
				// }
				request.get("/yuyue/loadyuyue", {
					params: {
						search: this.userid
					}
				}).then(res => {
					// console.log(res.data);
					this.item=res.data
					// console.log(this.item);
					
				})
				
				this.item.forEach((itm,index)=>{
					if(itm.statue==0){
						this.leftpage.push(itm)
					}
					else{
						this.rightpage.push(itm)
					}
				}
				)
				// console.log(this.rightpage);
				// console.log(this.leftpage);
				this.nowpage=this.leftpage
			},
			tap_l() {
				this.right = "default"
				this.left = "current"
				this.card ="card_l"
				this.nowpage=this.leftpage

			},
			tap_r() {
				this.left = "default"
				this.right = "current"
				this.card ="card_r"
				this.nowpage=this.rightpage
			},
			baogao(e){
				this.show=true
				this.content=e
				console.log(e);
			},
			init(){
				this.leftpage=[]
				this.rightpage=[]
				this.nowpage=[]
				this.right = "default"
				this.left = "current"
				this.card ="card_l"
				this.nowpage=this.leftpage
			},
			
			handlecancel(id){
				this.show_cancel=true
				this.deleid=id
			},
			confirmdele(){
				request.delete("/yuyue/delete/" + this.deleid).then(res => {
				        console.log(res)
				        if (res.code === '0') {
				          this.$refs.uTips.show({
				          				title: '成功取消预约！',
				          				type: 'success',
				          				duration: '2300'
				          			})
				        } else {
				          this.$refs.uTips.show({
				          				title: '取消预约失败，请重试！',
				          				type: 'warning',
				          				duration: '2300'
				          			})
				        }
				        this.load() //删除之后重新加载数据
				      })
					  
			}
			
		}
	}
</script>

<style>
	.current {
		color: #ffffff;
		background-color: #007AFF;
	}

	.default {}

	.top {}
	.card_l{
		color: #555555;
		border-radius: 25px;
		background-color:#B0E2FF;
		padding-left: 20upx;
		padding-top: 20upx;
		margin-top: 10upx;
		height: 250upx;
		width: 720upx;
		font-size: 35rpx
	}
	.card_r{
		color: #555555;
		border-radius: 25px;
		background-color:#FFEFDB;
		padding-left: 20upx;
		padding-top: 20upx;
		margin-top: 10upx;
		height: 250upx;
		width: 720upx;
		font-size: 35rpx
	}
	
	
</style>


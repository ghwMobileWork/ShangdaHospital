<template>
	<view>
		<u-navbar title="自助导诊" :background="background"></u-navbar>
		<view class="" style="margin-top: 30upx;">
			<u-steps :list="numList" :current="current"></u-steps>
		</view>
		<view class="" style="display: flex;flex-direction: row;flex-wrap:nowrap;">
			<image class="doctor"src="../../static/icons/doc.png" ></image>
		<view class="duihua">
			<view style="padding-top: 50upx;">{{yisheng[current]}}</view>
			
		</view>
		</view>
		<view class="duihua2">
			<view class="" style="display: flex;flex-direction: column;flex-wrap:nowrap;padding-top: 20upx;">
				<button v-if="choose_show" v-for="(item,index) in myhuida" type="default" :class="huida_c" @tap="ans(index)">{{item}}</button>
				<button v-if="result_show"  type="default" class="" >{{item}}</button>
				<!-- <button v-if="buzhou[1]===true" v-for="(item,index) in answer2[0]" type="default">{{item}}</button> -->
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#eeeeee',
				},
				numList: [{
					name: '身体部位'
				}, {
					name: '症状'
				},  {
					name: '建议科室'
				}, ],
				current:0,
				yisheng:['您好像遇到了一些问题，我来给你解答吧！请告诉我您不舒服的部位!',
				'请告诉我您的具体症状！'
				,'建议您挂'],
				answer1:['头部','胸部','腹部','四肢'],
				answer2:[['看书写字时，出现头痛并伴有眼眶疼，视觉模糊，眼睛流泪或眼挂眼科结膜充血，可能是青光眼或眼内压增高等情况。',
				'突然出现剧烈的头痛，且伴有恶心，呕吐,疼痛难忍，多考虑急性挂神经内科的蛛网膜下腔出血。',
				'一侧头痛，多为偏头痛或慢性、持续性头痛，与疲劳、紧张有关，如果伴随着失眠、记忆减退、情绪不稳定等情况。',
				'头痛时伴有眩晕、耳鸣，或者鼻塞、流脓鼻涕，或鼻涕带血。'
				],
				['如果经常在劳累、紧张时出现胸痛，每次疼痛大概几分钟到十几分钟，休息可以缓解，多是心脏缺血的表现',
				'如果胸痛伴有咳嗽、深吸气或呼气时加重，多为胸膜、肺部疾病，如胸膜炎、肺炎等',
				'如果运动后突然出现剧烈胸痛，并伴有呼吸困难，考虑为气胸(高压性气胸)的情况',
				'如果胸部及前胸后背突然出现撕裂性疼痛，并伴有血压升高，这种情况较危险'],
				['如果出现一般的腹痛(痛感不剧烈):且按压时腹部疼痛能有所减轻，考虑为内科腹痛',
				'如果腹部疼痛比较剧烈，且按压时痛感明显加重，一般考虑为外科腹痛',
				'如果是下腹坠痛且伴有阴道出血',
				'如果肚子痛的同时伴有尿频、尿痛、尿急等尿道症状'
				],
				['如果出现大腿小腿外侧疼，痛感延伸到屁股，多是坐骨神经受到压迫或刺激，引起的疼痛',
				'如果在运动后，腿部关节出现疼痛',
				'如果是长时间坐飞机，或是久坐后出现了小腿肚肿胀(尤其是老年人)，手指按压会出现疼痛',
				'如果是受到猛烈撞击，受伤处有红肿疼痛等现象']],
				answer3:['谢谢，带我去挂号！','谢谢，我想重新咨询！'],
				result:[['眼科','内科','内科','耳鼻喉科'],
				['内科','外科','外科','外科'],
				['内科','外科','妇科','外科'],
				['骨科','骨科','外科','骨科']],
				myhuida:[],
				choose_show:true,
				result_show:false,
				//结果列表的索引
				q1:-1,
				q2:-1,
				huida_c:'huidabig'
			}
		},
		onLoad(){
			this.load()
		},
		methods: {
			load(){
				this.current=0
				this.myhuida=this.answer1
				this.q1=-1
				this.q2=-1
				this.yisheng[2]='建议您挂'
			},
		ans(idx){
			// console.log(idx);
			
			if(this.current==0){
				//回答了第一个问题
				this.myhuida=this.answer2[idx]
				this.huida_c='huida'
				this.p1=idx
				this.current+=1
			}else if(this.current==1){
				//回答了第二个问题
				this.myhuida=this.answer3
				this.huida_c='huidabig'
				this.p2=idx
				this.yisheng[2]=this.yisheng[2]+'['+this.result[this.p1][this.p2]+']进一步查看！'
				this.current+=1
			}
			else if(this.current=2){
				//回答了第三个问题
				if(idx==0){
					//跳转到挂号
					uni.navigateTo({
						url:"../yuyuegua/yuyuegua"
					})
				}else if(idx==1){
					this.load()
				}
			}
		},
		
		}
	}
</script>

<style>
.doctor{
	height: 180upx;
	width: 180upx;
	margin-top: 200upx;
	margin-left: 20upx;
}
.duihua{
	color: #555555;
	border-radius: 25px;
	background-color:#B0E2FF;
	/* padding-left: 20upx; */
	padding: 20upx;
	/* padding-top: 20upx; */
	margin-top: 10upx;
	height: 250upx;
	width: 720upx;
	font-size: 35rpx
}
.duihua2{
	color: #555555;
	border-radius: 25px;
	background-color:#B0E2FF;
	margin-top: 10upx;
	margin-left: 25upx;
	height: 700upx;
	width: 700upx;
	font-size: 35rpx
}
.huida{
	font-size: 20upx;
	border-radius: 25upx;
	background-color: #e5dfdb;
	width: 680upx;
	margin-top: 10upx;
	height: 150upx;
}
.huidabig{
	font-size: 40upx;
	border-radius: 25upx;
	background-color: #e5dfdb;
	width: 680upx;
	margin-top: 10upx;
	height: 100upx;
}
</style>

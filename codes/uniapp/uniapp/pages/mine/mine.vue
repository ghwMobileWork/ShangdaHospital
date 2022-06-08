<template>
	<view>
		<u-navbar :is-back="false" title="我" :background="background"></u-navbar>
		<view style="display: flex;margin: 30upx 25upx;">
			<view style="flex-direction: row; ">
				<u-image width="180upx" height="180rpx" shape="circle" style="margin-left: 20upx;" :src="imgsrc" />
			</view>
			<view style="margin: 20upx 40upx;">
				<view style="font-size:40upx;color: #333333;">
					{{patientname}}
				</view>
				<view style="margin-top: 50upx;font-size: 30upx;color: #999999;">
					用户名:{{username}}
				</view>
			</view>

		</view>
		<u-cell-group style="margin-top:50upx;">
			<u-cell-item icon="setting-fill" title="修改名称" @tap="changename"></u-cell-item>
			<u-cell-item icon="lock-fill" title="修改密码" @tap="changepwd"></u-cell-item>
			<u-cell-item icon="close" title="退出登陆" @tap="tishikuang"></u-cell-item>
		</u-cell-group>
		<!-- 退出登陆提示框 -->
		<u-modal v-model="show" :content="content" @confirm="exit" show-cancel-button></u-modal>
		<u-modal v-model="changepwd_show" title="修改密码" @confirm="handlepwd" show-cancel-button>
			<view style="padding: 70upx;">
				<u-form-item label="原密码" label-width='170upx'>
					<u-input v-model="oldpwd" />
				</u-form-item>
				<u-form-item label="新密码" label-width='170upx'>
					<u-input v-model="newpwd1" />
				</u-form-item>
				<u-form-item label="确认新密码" label-width='170upx'>
					<u-input v-model="newpwd2" />
				</u-form-item>
			</view>
		</u-modal>
		<u-modal v-model="changename_show" title="修改名称" @confirm="handlename" show-cancel-button>
			<view style="padding: 70upx;">
				<u-form-item label="新名称" label-width='170upx'>
					<u-input v-model="newname" />
				</u-form-item>	
			</view>
		</u-modal>
		<u-toast ref="uToast" />
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
				show: false,
				changepwd_show: false,
				changename_show: false,
				content: '确定退出登陆吗？',
				imgsrc: '',
				sex: '',
				username: '',
				patientname: '',
				oldpwd: '',
				newpwd1: '',
				newpwd2: '',
				newname:''

			}
		},
		onLoad() {
			this.load()
			// console.log(JSON.parse(sessionStorage.getItem('user')).sex.toString())
			// console.log(JSON.parse(sessionStorage.getItem('user')).username.toString())
			// console.log(JSON.parse(sessionStorage.getItem('user')).patientName.toString())

		},
		methods: {
			load() {
				this.imgsrc = ''
				this.username = ''
				this.patientname = ''
				this.sex = ''
				this.oldpwd = ''
				this.newpwd1 = ''
				this.newpwd2 = ''
				this.sex = JSON.parse(sessionStorage.getItem('user')).sex.toString()
				this.username = JSON.parse(sessionStorage.getItem('user')).username.toString(),
					this.patientname = JSON.parse(sessionStorage.getItem('user')).patientName.toString()
				//获取用户名、头像等信息
				//如果判断为男生则img设为男生的头像
				if (this.sex === '男') {
					this.imgsrc = '../../static/icons/man.png'
				} else {
					this.imgsrc = '../../static/icons/female.png'
				}

			},
			handlepwd() {
				var pwd = JSON.parse(sessionStorage.getItem('user')).password.toString()
				var id = JSON.parse(sessionStorage.getItem('user')).id
				var me= JSON.parse(sessionStorage.getItem('user'))
				me.password=this.newpwd1
				if (this.oldpwd == pwd) {
					if(this.newpwd1==this.newpwd2){
						request.put("/patient", me).then(res => {
							if (res.code === '0') {
								sessionStorage.clear()
							this.$refs.uToast.show({
								title: '修改成功，请重新登陆！',
								type: 'success',
								url: '/pages/Login/Login',
								position:'bottom'
							})
							}else{
								this.$refs.uToast.show({
									title: '修改失败！',
									type: 'error',
									position:'bottom'
								})
							}
							
						})
					}else{
						this.$refs.uToast.show({
							title: '修改失败，两次新密码不一致',
							type: 'error',
							position:'bottom'
						})
					}
				} else {
					this.$refs.uToast.show({
						title: '修改失败，原密码错误',
						type: 'error',
						position:'bottom'
					})
				}
				this.oldpwd = ''
				this.newpwd1 = ''
				this.newpwd2 = ''
			},
			handlename(){
				var me= JSON.parse(sessionStorage.getItem('user'))
				me.patientName=this.newname
				request.put("/patient", me).then(res => {
					if (res.code === '0') {
					sessionStorage.setItem("user", JSON.stringify(me))
					this.patientname=this.newname
					this.$refs.uToast.show({
						title: '修改成功！',
						type: 'success',
						position:'bottom'
					})
					}else{
						this.$refs.uToast.show({
							title: '修改失败！',
							type: 'error',
							position:'bottom'
						})
					}
					
				})
				
			},
			tishikuang() {
				this.show = true;
			},
			changepwd() {
				this.changepwd_show = true;
			},
			changename() {
				this.changename_show = true;
			},
			exit() {
				sessionStorage.clear()
				uni.reLaunch({
					url: "../Login/Login"
				})
			}

		}
	}
</script>

<style>

</style>

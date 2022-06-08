<template>
	<view class="login" style="padding-top: 100upx;">
		<view class="top_item">
			<text style="color: #000000;font-size: 22px;font-weight: bold;">欢迎注册！</text>
		</view>
		<u-form :model="form" style="margin-top: 80upx;width: 700upx;">
			<u-form-item label='姓名' label-width='130upx' style="margin-left: 40upx;">
				<u-input v-model="form.patientName" style="margin-left: 40upx;" />
			</u-form-item>
			<u-form-item label='用户名' label-width='130upx' style="margin-left: 40upx;">
				<u-input v-model="form.username" style="margin-left: 40upx;" />
			</u-form-item>
			<u-form-item label='密码' label-width='130upx' style="margin-left: 40upx;">
				<u-input v-model="form.password" style="margin-left: 40upx;" />
			</u-form-item>
			<u-form-item label='确认密码' label-width='130upx' style="margin-left: 40upx;">
				<u-input v-model="repassword" style="margin-left: 40upx;" />
			</u-form-item>
			<u-form-item label='性别' label-width='130upx' style="margin-left: 40upx;">
				<u-radio-group v-model="form.sex" style="margin-left: 40upx;">
					<u-radio v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</u-form-item>


		</u-form>
		<u-button @click="submit" type="primary" class="button" @tap="register">注册</u-button>


		<view class="" style="margin-top: 30upx;">
			<text style="color: #808080;font-size: 30upx;margin-left: 328upx; " @tap="back">返回登陆</text>

		</view>
		<u-toast ref="uToast" />
		<u-toast ref="Toast" />
	</view>
</template>

<script>
	import request from "@/utils/request";
	export default {
		data() {
			return {
				repassword:'',
				form: {},
				list: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					},

				],
			}
		},
		methods: {
			register() {
				
					if (this.form.password !== this.repassword) {
						console.log('两次密码不一致')
						this.failToast('两次密码不一致！')
						return
					} else {
						request.post("/patient/register", this.form).then(res => {
							console.log(res)
							if (res.code === '0') {
								//注册成功跳转回登陆界面
								this.$refs.uToast.show({
													title: '注册成功！',
													type: 'success',
													url: '/pages/Login/Login',
													position: 'bottom',
													duration:1000
												})
								
							} else { //注册失败
								this.failToast(res.msg)
								console.log(res.msg)
							}

						})
					}
				

			},

			back() {
				uni.navigateBack({

				})
			},
			failToast(msg) {
				this.$refs.uToast.show({
					title: msg,
					type: 'error',
					// url: '../index/index',
					position: 'bottom',
				})
			},

		}
	}
</script>

<style>
	.top_item {
		display: flex;
		margin-top: 40upx;
		margin-left: 32upx;
		margin-right: 32upx;
		justify-content: space-between;
	}

	.input-item {
		display: flex;
		margin-left: 32upx;
		margin-right: 32upx;
		height: 50px;
		align-items: center;
		border-bottom: 1px solid #efeff4;
		margin-bottom: 20upx;

		.title-content {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.title {
				font-size: 18px;
			}
		}

		.input {
			flex: 1;
		}
	}

	.button {
		height: 50px;
		line-height: 50px;
		margin-top: 60upx;
		margin-left: 32upx;
		margin-right: 32upx;
		border-radius: 50upx;
		font-size: 20px;
		background-color: #008AFE;
		color: #FFFFFF;
		text-align: center;
	}
</style>

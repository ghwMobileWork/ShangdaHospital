<template>
	<u-picker  mode="time" :end-year="endyear" :start-year="startyear" v-model="show" @confirm="confirm" @change="change"
		:params="params"></u-picker>
</template>

<script>
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
				
			}
			
		},
		methods: {
			onLoad() {
				var date = new Date()
				var nowyear = date.getFullYear()
				var nowmonth = date.getMonth() + 1
				var nowdate = date.getDate()
				this.startyear = nowyear
				if (nowmonth == 12 && nowdate >= 26) {
					this.endyear = nowyear + 1
				} else {
					this.endyear = nowyear
				}


			},
			confirm(e) {
				// yyyy-mm-dd为安卓写法，不支持iOS，需要使用"/"分隔，才能二者兼容
				let time = e.year + '/' + e.month + '/' + e.day + ' ' + e.hour + ':00:00';
				console.log(time);

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

		},

	}
</script>

<style scoped lang="scss">

</style>

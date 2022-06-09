"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[265],{4265:function(e,a,l){l.r(a),l.d(a,{default:function(){return c}});var t=l(6252);const o={style:{padding:"20px",width:"60px"}},s=(0,t._)("span",{class:"text-gray-500"},"-",-1),d=(0,t.Uk)("Create"),i=(0,t.Uk)("Cancel");function r(e,a,l,r,u,m){const n=(0,t.up)("el-input"),p=(0,t.up)("el-form-item"),c=(0,t.up)("el-option"),h=(0,t.up)("el-select"),g=(0,t.up)("el-date-picker"),f=(0,t.up)("el-col"),y=(0,t.up)("el-time-picker"),b=(0,t.up)("el-switch"),W=(0,t.up)("el-checkbox"),V=(0,t.up)("el-checkbox-group"),w=(0,t.up)("el-radio"),_=(0,t.up)("el-radio-group"),v=(0,t.up)("el-button"),S=(0,t.up)("el-form");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t.Wm)(S,{model:u.form,"label-width":"60px"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{label:"姓名"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:u.form.name,"onUpdate:modelValue":a[0]||(a[0]=e=>u.form.name=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(p,{label:"Activity zone"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{modelValue:u.form.region,"onUpdate:modelValue":a[1]||(a[1]=e=>u.form.region=e),placeholder:"please select your zone"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{label:"Zone one",value:"shanghai"}),(0,t.Wm)(c,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{label:"Activity time"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{span:11},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{modelValue:u.form.date1,"onUpdate:modelValue":a[2]||(a[2]=e=>u.form.date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{span:2,class:"text-center"},{default:(0,t.w5)((()=>[s])),_:1}),(0,t.Wm)(f,{span:11},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:u.form.date2,"onUpdate:modelValue":a[3]||(a[3]=e=>u.form.date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)(p,{label:"Instant delivery"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:u.form.delivery,"onUpdate:modelValue":a[4]||(a[4]=e=>u.form.delivery=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(p,{label:"Activity type"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:u.form.type,"onUpdate:modelValue":a[5]||(a[5]=e=>u.form.type=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{label:"Online activities",name:"type"}),(0,t.Wm)(W,{label:"Promotion activities",name:"type"}),(0,t.Wm)(W,{label:"Offline activities",name:"type"}),(0,t.Wm)(W,{label:"Simple brand exposure",name:"type"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{label:"Resources"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{modelValue:u.form.resource,"onUpdate:modelValue":a[6]||(a[6]=e=>u.form.resource=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{label:"Sponsor"}),(0,t.Wm)(w,{label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{label:"Activity form"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:u.form.desc,"onUpdate:modelValue":a[7]||(a[7]=e=>u.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{type:"primary",onClick:e.onSubmit},{default:(0,t.w5)((()=>[d])),_:1},8,["onClick"]),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[i])),_:1})])),_:1})])),_:1},8,["model"])])}var u=l(4471),m={name:"Person",components:{},data(){return{form:{},zhenduanform:{},dialogVisible:!1,search:"",currentPage:1,pageSize:10,total:0,tableData:[],doctorList:[]}},created(){this.load()},methods:{load(){var e=parseInt(JSON.parse(sessionStorage.getItem("user")).id.toString());if(console.log("usertype:"+e),1===e)u.Z.get("/yuyue/loadall",{params:{pageNum:this.currentPage,pageSize:this.pageSize}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}));else{var a=parseInt(JSON.parse(sessionStorage.getItem("user")).id.toString());console.log(a),u.Z.get("/yuyue/loadself",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:a}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))}},querry(){u.Z.get("/yuyue/findbyname",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},save(){u.Z.put("/yuyue/zhenduan",this.zhenduanform).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"诊断完成"}):this.$message({type:"error",message:"诊断失败"})})),this.dialogVisible=!1,this.load()},add(){this.dialogVisible=!0,this.form={}},handleEdit(e){this.zhenduanform=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0,console.log(e)},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()},handleDelete(e){console.log(e),u.Z["delete"]("/yuyue/delete/"+e).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:"删除失败"}),this.load()}))}}},n=l(3744);const p=(0,n.Z)(m,[["render",r]]);var c=p}}]);
//# sourceMappingURL=265.1ff942dd.js.map
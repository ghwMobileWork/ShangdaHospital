"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[551],{8551:function(e,a,l){l.r(a),l.d(a,{default:function(){return k}});var t=l(6252);const o={style:{padding:"10px"}},d=(0,t.Uk)("新增医生"),s={style:{margin:"10px 0"}},r=(0,t.Uk)("查询"),i=(0,t.Uk)("编辑 "),m=(0,t.Uk)("删除"),n={style:{margin:"10px 0"}},u={class:"demo-pagination-block"},p=(0,t._)("div",{class:"demonstration"},null,-1),c=(0,t.Uk)("男"),g=(0,t.Uk)("女"),h={class:"dialog-footer"},f=(0,t.Uk)("取消"),b=(0,t.Uk)("确定");function w(e,a,l,w,W,V){const _=(0,t.up)("el-button"),y=(0,t.up)("el-input"),k=(0,t.up)("el-table-column"),C=(0,t.up)("el-popconfirm"),v=(0,t.up)("el-table"),U=(0,t.up)("el-pagination"),z=(0,t.up)("el-form-item"),x=(0,t.up)("el-radio"),S=(0,t.up)("el-option"),D=(0,t.up)("el-select"),P=(0,t.up)("el-form"),N=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",null,[(0,t.Wm)(_,{type:"primary",onClick:V.add},{default:(0,t.w5)((()=>[d])),_:1},8,["onClick"])]),(0,t._)("div",s,[(0,t.Wm)(y,{modelValue:W.search,"onUpdate:modelValue":a[0]||(a[0]=e=>W.search=e),placeholder:"请输入关键字",style:{width:"20%"},clearable:""},null,8,["modelValue"]),(0,t.Wm)(_,{type:"primary",style:{"margin-left":"5px"},onClick:V.querry},{default:(0,t.w5)((()=>[r])),_:1},8,["onClick"])]),(0,t.Wm)(v,{data:W.tableData,stripe:"",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{prop:"id",label:"ID",sortable:""}),(0,t.Wm)(k,{prop:"username",label:"用户名"}),(0,t.Wm)(k,{prop:"password",label:"密码"}),(0,t.Wm)(k,{prop:"doctorName",label:"姓名"}),(0,t.Wm)(k,{prop:"sex",label:"性别"}),(0,t.Wm)(k,{prop:"department",label:"科室"}),(0,t.Wm)(k,{fixed:"right",label:"操作",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(_,{type:"text",onClick:a=>V.handleEdit(e.row)},{default:(0,t.w5)((()=>[i])),_:2},1032,["onClick"]),(0,t.Wm)(C,{title:"确定删除吗?",onConfirm:a=>V.handleDelete(e.row.id)},{reference:(0,t.w5)((()=>[(0,t.Wm)(_,{type:"text"},{default:(0,t.w5)((()=>[m])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),(0,t._)("div",n,[(0,t._)("div",u,[p,(0,t.Wm)(U,{currentPage:W.currentPage,"onUpdate:currentPage":a[1]||(a[1]=e=>W.currentPage=e),"page-size":W.pageSize,"onUpdate:page-size":a[2]||(a[2]=e=>W.pageSize=e),"page-sizes":[5,10,20],small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:W.total,onSizeChange:V.handleSizeChange,onCurrentChange:V.handleCurrentChange},null,8,["currentPage","page-size","small","disabled","background","total","onSizeChange","onCurrentChange"])])]),(0,t.Wm)(N,{modelValue:W.dialogVisible,"onUpdate:modelValue":a[10]||(a[10]=e=>W.dialogVisible=e),title:"信息",width:"30%"},{footer:(0,t.w5)((()=>[(0,t._)("span",h,[(0,t.Wm)(_,{onClick:a[9]||(a[9]=e=>W.dialogVisible=!1)},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(_,{type:"primary",onClick:V.save},{default:(0,t.w5)((()=>[b])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)(P,{model:W.form,"label-width":"120px"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{label:"用户名"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:W.form.username,"onUpdate:modelValue":a[3]||(a[3]=e=>W.form.username=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(z,{label:"密码"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:W.form.password,"onUpdate:modelValue":a[4]||(a[4]=e=>W.form.password=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(z,{label:"姓名"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{modelValue:W.form.doctorName,"onUpdate:modelValue":a[5]||(a[5]=e=>W.form.doctorName=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(z,{label:"性别"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{modelValue:W.form.sex,"onUpdate:modelValue":a[6]||(a[6]=e=>W.form.sex=e),label:"男"},{default:(0,t.w5)((()=>[c])),_:1},8,["modelValue"]),(0,t.Wm)(x,{modelValue:W.form.sex,"onUpdate:modelValue":a[7]||(a[7]=e=>W.form.sex=e),label:"女"},{default:(0,t.w5)((()=>[g])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(z,{label:"科室"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{modelValue:W.form.department,"onUpdate:modelValue":a[8]||(a[8]=e=>W.form.department=e),placeholder:"选择科室"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{label:"内科",value:"内科"}),(0,t.Wm)(S,{label:"妇科",value:"妇科"}),(0,t.Wm)(S,{label:"骨科",value:"骨科"}),(0,t.Wm)(S,{label:"外科",value:"外科"}),(0,t.Wm)(S,{label:"耳鼻喉科",value:"耳鼻喉科"}),(0,t.Wm)(S,{label:"眼科",value:"眼科"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}var W=l(4471),V={name:"Doctor",components:{},data(){return{form:{},dialogVisible:!1,search:"",currentPage:1,pageSize:10,total:0,tableData:[],department:[]}},created(){this.load()},methods:{load(){W.Z.get("/doctor/loadall",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},save(){this.form.id?W.Z.put("/doctor",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"修改成功"}),this.load()):this.$message({type:"error",message:"修改失败"})})):W.Z.post("/doctor/register",this.form).then((e=>{console.log(e),"0"===e.code?(this.$message({type:"success",message:"新增成功"}),this.load()):this.$message({type:"error",message:"新增失败"})})),this.dialogVisible=!1},add(){this.dialogVisible=!0,this.form={}},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0,console.log(e),this.load()},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()},handleDelete(e){console.log(e),W.Z["delete"]("/doctor/delete/"+e).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:"删除失败"}),this.load()}))},querry(){W.Z.get("/doctor/findbyname",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))}}},_=l(3744);const y=(0,_.Z)(V,[["render",w]]);var k=y}}]);
//# sourceMappingURL=551.0b0eb507.js.map
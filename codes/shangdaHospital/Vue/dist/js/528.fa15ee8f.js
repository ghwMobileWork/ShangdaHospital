"use strict";(self["webpackChunkspringboot_vue_demo"]=self["webpackChunkspringboot_vue_demo"]||[]).push([[528],{8528:function(e,a,l){l.r(a),l.d(a,{default:function(){return U}});var t=l(6252);const o={style:{padding:"10px"}},s=(0,t.Uk)("新增病人"),i=(0,t.Uk)("导入"),r=(0,t.Uk)("删除"),d={style:{margin:"10px 0"}},n=(0,t.Uk)("查询"),m=(0,t.Uk)("编辑 "),u=(0,t.Uk)("删除"),p={style:{margin:"10px 0"}},g={class:"demo-pagination-block"},h=(0,t._)("div",{class:"demonstration"},null,-1),c=(0,t.Uk)("男"),f=(0,t.Uk)("女"),b={class:"dialog-footer"},y=(0,t.Uk)("取消"),w=(0,t.Uk)("确定");function _(e,a,l,_,k,W){const C=(0,t.up)("el-button"),V=(0,t.up)("el-input"),U=(0,t.up)("el-table-column"),z=(0,t.up)("el-popconfirm"),v=(0,t.up)("el-table"),x=(0,t.up)("el-pagination"),S=(0,t.up)("el-form-item"),P=(0,t.up)("el-radio"),D=(0,t.up)("el-form"),N=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",null,[(0,t.Wm)(C,{type:"primary",onClick:W.add},{default:(0,t.w5)((()=>[s])),_:1},8,["onClick"]),(0,t.Wm)(C,{type:"primary"},{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(C,{type:"primary"},{default:(0,t.w5)((()=>[r])),_:1})]),(0,t._)("div",d,[(0,t.Wm)(V,{modelValue:k.search,"onUpdate:modelValue":a[0]||(a[0]=e=>k.search=e),placeholder:"请输入关键字",style:{width:"20%"},clearable:""},null,8,["modelValue"]),(0,t.Wm)(C,{type:"primary",style:{"margin-left":"5px"},onClick:W.querry},{default:(0,t.w5)((()=>[n])),_:1},8,["onClick"])]),(0,t.Wm)(v,{data:k.tableData,stripe:"",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{prop:"id",label:"ID",sortable:""}),(0,t.Wm)(U,{prop:"username",label:"用户名"}),(0,t.Wm)(U,{prop:"password",label:"密码"}),(0,t.Wm)(U,{prop:"patientName",label:"姓名"}),(0,t.Wm)(U,{prop:"sex",label:"性别"}),(0,t.Wm)(U,{fixed:"right",label:"操作",width:"120"},{default:(0,t.w5)((e=>[(0,t.Wm)(C,{type:"text",onClick:a=>W.handleEdit(e.row)},{default:(0,t.w5)((()=>[m])),_:2},1032,["onClick"]),(0,t.Wm)(z,{title:"确定删除吗?",onConfirm:a=>W.handleDelete(e.row.id)},{reference:(0,t.w5)((()=>[(0,t.Wm)(C,{type:"text"},{default:(0,t.w5)((()=>[u])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),(0,t._)("div",p,[(0,t._)("div",g,[h,(0,t.Wm)(x,{currentPage:k.currentPage,"onUpdate:currentPage":a[1]||(a[1]=e=>k.currentPage=e),"page-size":k.pageSize,"onUpdate:page-size":a[2]||(a[2]=e=>k.pageSize=e),"page-sizes":[5,10,20],small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:k.total,onSizeChange:W.handleSizeChange,onCurrentChange:W.handleCurrentChange},null,8,["currentPage","page-size","small","disabled","background","total","onSizeChange","onCurrentChange"])])]),(0,t.Wm)(N,{modelValue:k.dialogVisible,"onUpdate:modelValue":a[8]||(a[8]=e=>k.dialogVisible=e),title:"信息",width:"30%"},{footer:(0,t.w5)((()=>[(0,t._)("span",b,[(0,t.Wm)(C,{onClick:a[7]||(a[7]=e=>k.dialogVisible=!1)},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(C,{type:"primary",onClick:W.save},{default:(0,t.w5)((()=>[w])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)(D,{model:k.form,"label-width":"120px"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{label:"用户名"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:k.form.username,"onUpdate:modelValue":a[3]||(a[3]=e=>k.form.username=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(S,{label:"姓名"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:k.form.realName,"onUpdate:modelValue":a[4]||(a[4]=e=>k.form.realName=e),style:{width:"80%"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(S,{label:"性别"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{modelValue:k.form.sex,"onUpdate:modelValue":a[5]||(a[5]=e=>k.form.sex=e),label:"男"},{default:(0,t.w5)((()=>[c])),_:1},8,["modelValue"]),(0,t.Wm)(P,{modelValue:k.form.sex,"onUpdate:modelValue":a[6]||(a[6]=e=>k.form.sex=e),label:"女"},{default:(0,t.w5)((()=>[f])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}var k=l(4471),W={name:"Patient",components:{},data(){return{form:{},dialogVisible:!1,search:"",currentPage:1,pageSize:10,total:0,tableData:[]}},created(){this.load()},methods:{load(){k.Z.get("/patient/loadall",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))},save(){this.form.id?k.Z.put("/patient",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"修改成功"}):this.$message({type:"error",message:"修改失败"})})):k.Z.post("/patient",this.form).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"新增成功"}):this.$message({type:"error",message:"新增失败"})})),this.load(),this.dialogVisible=!1},add(){this.dialogVisible=!0,this.form={}},handleEdit(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0,console.log(e)},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()},handleDelete(e){console.log(e),k.Z["delete"]("/patient/delete/"+e).then((e=>{console.log(e),"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:"删除失败"}),this.load()}))},querry(){k.Z.get("/yuyue/findbyname",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{console.log(e),this.tableData=e.data.records,this.total=e.data.total}))}}},C=l(3744);const V=(0,C.Z)(W,[["render",_]]);var U=V}}]);
//# sourceMappingURL=528.fa15ee8f.js.map
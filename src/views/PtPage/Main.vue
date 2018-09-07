<template>
	<section>
  <div class="main-info"><em>老乡优选平台端</em><el-tag>平台</el-tag></div>

<div class="main-top">
	  <el-row :gutter="20" style=" margin-bottom:20px">
            <el-col :span="12">
                <div class="grid-content bg-purple">
			        <el-card class="box-card"  >
                        <div slot="header" class="clearfix">
                            <span>昨日交易额</span>
                        </div>
                        <div  class="text item">
                                 <span class="f-36">99999</span>
    总计昨日交易金额 
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple"> 
			<el-card class="box-card"  >
            <div slot="header" class="clearfix">
                <span>昨日订单</span>
              <el-button style="float: right; padding: 3px 0" type="text">提现</el-button> 
            </div>
            <div  class="text item">
                                            <span class="f-36">99999</span>
  总计昨日订单数 
            </div>
            </el-card>
            </div>
            </el-col>
</el-row>





			<el-row :gutter="20">

			

            <el-col :span="8">
				<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>总订单</span>
  </div>
  <div  class="text item">
    <span class="f-24">99999</span>
    总计订单量 
  </div>
</el-card></el-col>

 <el-col :span="8" >
			<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>待发货订单</span>
  </div>
  <div  class="text item">
      <span class="f-24">99999</span>
    总计待发货订单量 
  </div>
</el-card>
</el-col>

 <el-col :span="8">
			<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>待收货订单</span>
  </div>
  <div  class="text item">
         <span class="f-24">99999</span>
    总计待收货订单量 
  </div>
</el-card>
</el-col>



			</el-row>
</div>

<strong data-v-1cef26d9="" class="title" style="color:#475669">常用功能</strong>

	<el-row :gutter="20" class="main-center">
  		<el-col :span="6"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-edit-outline">发布商品</el-button>   </div></el-col>
  		<el-col :span="6"><div class="grid-content bg-purple"> <el-button type="primary" icon="el-icon-document">收入/提现</el-button> </div></el-col>
  		<el-col :span="6"><div class="grid-content bg-purple"> <el-button type="primary" icon="el-icon-service">优惠券</el-button> </div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-service">帮助中心</el-button></div></el-col>
	</el-row>


	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-container {
  background: #f5f5f5;
}
.content-wrapper {
  background: #f5f5f5;
}
.main-info {
  em {
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    padding: 0 20px 0 0;
  }
  span {
    vertical-align: middle;
    display: inline-block;
  }
}
.main-top {
  padding: 20px 0 20px 0;
}
.f-36 {
  font-size: 36px;
}
.f-24 {
  font-size: 24px;
}
.main-top .text span {
  display: block;
  color: rgb(102, 102, 102);
  padding: 0 0 10px 0;
}
.main-center {
  padding: 20px 0;
  .el-button {
    padding: 20px 40px !important;
    i {
      font-size: 18px !important;
      display: block !important;
    }
    span {
      display: block;
    }
  }
}
.text {
  font-size: 14px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
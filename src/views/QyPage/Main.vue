<template>
	<section>
  <div class="main-info"><em>杭州土味有限公司</em><el-tag>企业</el-tag></div>

<div class="main-top">
	  <el-row :gutter="20" style=" margin-bottom:20px">
            <el-col :span="12">
                <div class="grid-content bg-purple">
			        <el-card class="box-card"  >
                        <div slot="header" class="clearfix">
                            <span>昨日交易额</span>
                        </div>
                        <div  class="text item">
                                 <span class="f-36">{{SH_totalnum.yesterday_income}}</span>
    总计昨日交易金额 
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple"> 
			<el-card class="box-card"  >
            <div slot="header" class="clearfix">
                <span>可提现余额</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">提现</el-button> 
            </div>
            <div  class="text item">
                                            <span class="f-36">{{SH_totalnum.can_use_money}}</span>
 总计可提现金额
            </div>
            </el-card>
            </div>
            </el-col>
</el-row>





			<el-row :gutter="20">

			

            <el-col :span="6">
				<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>总订单</span>
  </div>
  <div  class="text item">
    <span class="f-24">{{SH_totalnum.total_order_num}}</span>
    总计订单量 
  </div>
</el-card></el-col>

 <el-col :span="6" >
			<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>待发货订单</span>
  </div>
  <div  class="text item">
      <span class="f-24">{{SH_totalnum.send_order_num}}</span>
    总计待发货订单量 
  </div>
</el-card>
</el-col>

 <el-col :span="6">
			<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>待收货订单</span>
  </div>
  <div  class="text item">
         <span class="f-24">{{SH_totalnum.collect_order_num}}</span>
    总计待收货订单量 
  </div>
</el-card>
</el-col>

 <el-col :span="6">
			<el-card class="box-card"  >
  <div slot="header" class="clearfix">
    <span>昨日订单</span>

  </div>
  <div  class="text item">
         <span  class="f-24">{{SH_totalnum.yesterday_order_num}}</span>
    总计昨日订单量 
  </div>
</el-card>
</el-col>

			</el-row>
</div>

<strong data-v-1cef26d9="" class="title" style="color:#475669">常用功能</strong>

	<el-row :gutter="20" class="main-center">
  		<el-col :span="6"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-edit-outline" @click="this.$router.push('/qyaddgoods')">发布商品</el-button>   </div></el-col>
  		<el-col :span="6"><div class="grid-content bg-purple"> <el-button type="primary" icon="el-icon-document">收入/提现</el-button> </div></el-col>
  		<el-col :span="6"><div class="grid-content bg-purple"> <el-button type="primary" icon="el-icon-service">帮助中心</el-button> </div></el-col>
		<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>

<el-dialog title="提现" :visible.sync="dialogFormVisible">
  <el-form :model="subform" label-width="30%">
    <el-form-item label="提现金额" >
      <el-input v-model="subform.money" auto-complete="off" style="width:200px; "></el-input>
    </el-form-item>
    <el-form-item label="验证码" >
 <el-input v-model="subform.code" auto-complete="off" style="width:200px; margin-right:20px;"></el-input>   <el-button type="primary" :disabled="isOvertime" :loading="clicktime" @click="sendcode">{{word}}</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
	</section>
</template>

<script>
import { getShMoneyMain, SendCode } from "../../api/api";
export default {
  data() {
    return {
      subform: {
        money: "",
        code: ""
      },
      word: "发送验证码",
      isOvertime: false,
      clicktime: false,
      phone: "17306814482",
      code: "",
      dialogFormVisible: false,
      SH_totalnum: "",
      MoneyList: [],
      money_total: 0,
      money_page: 1,
      listLoading: false
    };
  },
  methods: {
    sendMessage() {
      if (this.isOvertime) {
        return false;
      }
      let that = this,
        time = 60;
      var sendTimer = setInterval(function() {
        that.isOvertime = true;
        time--;
        that.word = "重新发送 (" + time + ")";
        if (time < 0) {
          that.isOvertime = false;
          clearInterval(sendTimer);
          that.word = "获取验证码";
        }
      }, 1000);
    },
    sendcode() {
      var self = this;
      if (!this.clicktime) {
        this.clicktime = true;

        let para = {
          phone: this.phone
        };
        SendCode(para).then(data => {
          let { msg, code, mycode } = data;
          if (code !== 200) {
            this.$message({
              message: msg,
              type: "error"
            });
          } else {
            setTimeout(function() {
              self.clicktime = false;
            }, 1000);
            this.sendMessage();
            this.$message({
              message: "验证码发送成功！",
              type: "success"
            });
            console.log(data.mycode.code);
          }
        });
      }
    },
    shmoneyMain() {
      getShMoneyMain().then(res => {
        this.SH_totalnum = res.data.ShMoneyMain;
      });
    }
  },
  mounted() {
    this.shmoneyMain();
  }
};
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
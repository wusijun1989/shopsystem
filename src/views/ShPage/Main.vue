<template>
	<section>
  <div class="main-info"><em>河北商会</em>   <el-tag type="warning">商会</el-tag></div>

<div class="main-top">
	  <el-row :gutter="20" style=" margin-bottom:20px">
            <el-col :span="12">
                <div class="grid-content bg-purple">
			        <el-card class="box-card"  >
                        <div slot="header" class="clearfix">
                            <span>昨日收入预估</span>
                        </div>
                        <div  class="text item">
                                 <span class="f-36">{{SH_totalnum.yesterday_income}}</span>
    昨日收入预估（待结算）  
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
    <span>已完成</span>

  </div>
  <div  class="text item">
         <span  class="f-24">{{SH_totalnum.over_order}}</span>
    已完成订单量 
  </div>
</el-card>
</el-col>

			</el-row>
</div>

<strong data-v-1cef26d9="" class="title" style="color:#475669;margin-bottom:20px; display:block;">余额记录</strong>

	           <template>
                    <el-table :data="MoneyList"  border  style="width: 100%">
                      <el-table-column prop="date" label="结算日期" width="280">
                      </el-table-column>
                      <el-table-column prop="income" label="收入"  min-width="180">
                      </el-table-column>
                     <el-table-column prop="expend"    label="支出" min-width="180">
                      </el-table-column>
                      <el-table-column  prop="balance" label="操作后余额" min-width="180">
                      </el-table-column>
                      <el-table-column  prop="remarks" label="备注" min-width="250">
                      </el-table-column>
                    </el-table>
                    <el-col :span="24" class="toolbar">
                        <el-pagination  layout="prev, pager, next" @current-change="MoneyPageChange" :page-size="10" :total="money_total" style="float:right;">
                        </el-pagination>
                    </el-col>
</template>
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
import { getShMoneyListPage, getShMoneyMain, SendCode } from "../../api/api";
export default {
  data() {
    return {
      subform: {
        money: "",
        code: ""
      },
      word: "发送验证码",
      isOvertime: false,
      phone: "17306814482",
      code: "",
      clicktime: false,
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
    shmoneyList() {
      let para = {
        page: this.money_page
      };
      this.listLoading = true;
      //NProgress.start();
      getShMoneyListPage(para).then(res => {
        this.money_total = res.data.total;
        this.MoneyList = res.data.ShMoneyList;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },
    shmoneyMain() {
      getShMoneyMain().then(res => {
        this.SH_totalnum = res.data.ShMoneyMain;
        // console.log(this.SH_totalnum);
      });
    },
    MoneyPageChange(val) {
      this.money_page = val;
      this.moneyList();
    }
  },
  mounted() {
    this.shmoneyList();
    this.shmoneyMain();
  }
};
</script>

<style lang="scss" scoped>
.el-button.is-loading {
  pointer-events: visible;
}
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
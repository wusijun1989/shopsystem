<template>
<div class="main-content">
    <section>
    
        <template>
                    <el-tabs v-model="activeName" @tab-click="handleClick" >
                      <el-tab-pane label="我的资产" name="property" id="1">
                  <div class="property">
                    <div class="property-top">
                      <el-row :gutter="20">
                          <el-col :span="6">七天收入<em>10000</em></el-col>
                          <el-col :span="6">今日销售额<em>16</em></el-col>
                          <el-col :span="6">可用余额<em>16</em></el-col>
                          <el-col :span="6"><el-button type="success" @click="dialogFormVisible = true">提现</el-button></el-col>
                      </el-row>
                    </div>
          
                  <strong data-v-1cef26d9="" class="title" style="color:#475669;padding:0 0 20px 0; display:block">余额记录</strong>
                  
                  <template>
                    <el-table :data="MoneyList"  border  style="width: 100%">
                      <el-table-column prop="date" label="结算日期" width="180">
                      </el-table-column>
                      <el-table-column prop="income" label="收入"  min-width="180">
                      </el-table-column>
                     <el-table-column prop="expend"    label="支出" min-width="180">
                      </el-table-column>
                      <el-table-column  prop="balance" label="操作后余额">
                      </el-table-column>
                    </el-table>
                    <el-col :span="24" class="toolbar">
                        <el-pagination  layout="prev, pager, next" @current-change="MoneyPageChange" :page-size="20" :total="money_total" style="float:right;">
                        </el-pagination>
                    </el-col>
</template>


  </div>
    </el-tab-pane>

      <el-tab-pane label="交易记录" name="record" id="2">
          <div class="record">
    <div class="search">
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px; margin-bottom:20px">
          <el-form :inline="true">
            <el-form-item label="创建时间">
              <el-col >
                <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="交易状态">
                <el-select v-model="form.state" placeholder="交易状态">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="进行中" value="0"></el-option>
                    <el-option label="成功" value="1"></el-option>
                    <el-option label="失败" value="2"></el-option>
                    <el-option label="退款" value="3"></el-option>
                    <el-option label="已结算" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.type" placeholder="类型">
                     <el-option label="全部" value=""></el-option>
                    <el-option label="销售" value="0"></el-option>
                    <el-option label="商会分润" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getRecord">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
    </div>

<template>
    <div>
        <el-radio-group v-model="form.state" style="margin:0 0 20px 0;" @change="changeState"><el-radio-button label="">全部</el-radio-button><el-radio-button label="0">进行中</el-radio-button><el-radio-button label="1">成功</el-radio-button><el-radio-button label="2">失败</el-radio-button><el-radio-button label="3">退款</el-radio-button><el-radio-button label="4">已结算</el-radio-button>
        </el-radio-group>
    </div>
</template>
    <!--列表-->
<el-table :data="Records" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="order_number" label="订单号" width="200" sortable>
			</el-table-column>
			<el-table-column prop="type" label="类型" width="150"  :formatter="formatType"  sortable>
			</el-table-column>
			<el-table-column prop="time" label="创建时间" width="200" sortable>
			</el-table-column>
			<el-table-column prop="updata_time" label="最后修改时间" width="200"  sortable>
			</el-table-column>
			<el-table-column prop="pay_number" label="支付单号" width="200"  sortable>
			</el-table-column>
			<el-table-column prop="money" label="总金额" width="200"  sortable>
			</el-table-column>
			<el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
			</el-table-column>
			<el-table-column label="操作" width="250">
<template slot-scope="scope">
    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
        编辑</el-button>
    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
    <el-button type="warning" size="small">下架</el-button>
</template>
			</el-table-column>
		</el-table>

    	<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination  layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="record_total" style="float:right;">
			</el-pagination>
		</el-col>


    </div>  

      </el-tab-pane>

    </el-tabs>




  </template>


<!-- Form -->


<el-dialog title="提现" :visible.sync="dialogFormVisible">
  <el-form :model="form" label-width="30%">
    <el-form-item label="提现金额" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off" style="width:200px; "></el-input>
    </el-form-item>
    <el-form-item label="验证码" :label-width="formLabelWidth">
 <el-input v-model="form.name" auto-complete="off" style="width:200px; margin-right:20px;"></el-input>   <el-button type="primary">发送验证码</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>



	</section>
    </div>
</template>

<script>
import { getMoneyListPage, getRecordListPage } from "../../../api/api";

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        time: "",
        state: "",
        type: ""
      },
      Records: [],
      MoneyList: [],
      money_total: 0,
      record_total: 0,
      money_page: 1,
      record_page: 1,
      listLoading: false,
      activeName: "property",
      activeName3: "first"
    };
  },
  watch: {
    pokerHistory(newValue, oldValue) {
      console.log(newValue);
    }
    // state: function(val) {
    //   //监听切换状态-计划单
    //   console.log("state"+val);
    //   //let urlStr = '/' + val;
    //   //this.$router.push(urlStr);
    //   // 注释，根据val的不同，跳转到不同
    // }
  },
  methods: {
    formatState: function(row, column) {
      switch (row.state) {
        case 0:
          return "进行中";
          break;
        case 1:
          return "成功";
          break;
        case 2:
          return "失败";
          break;
        case 3:
          return "退款";
          break;
        case 4:
          return "已结算";
          break;
        default:
          return "全部";
      }
    },
    formatType: function(row, column) {
      return row.type == 1 ? "商会分润" : row.type == 0 ? "销售" : "全部";
    },
    handleClick(tab, event) {
      //console.log(tab, event);
      // console.log(event.target.getAttribute("id"));
    },

    moneyList() {
      let para = {
        page: this.money_page
      };
      this.listLoading = true;
      //NProgress.start();
      getMoneyListPage(para).then(res => {
        this.money_total = res.data.total;
        this.MoneyList = res.data.MoneyList;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },

    getRecord() {
      let para = {
        page: this.record_page,
        time: this.form.time,
        state: this.form.state,
        type: this.form.type
      };
      this.listLoading = true;
      //NProgress.start();
      getRecordListPage(para).then(res => {
        console.log(para.state);
        this.record_total = res.data.total;
        this.Records = res.data.Records;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getRecord();
    },
    MoneyPageChange(val) {
      this.money_page = val;
      this.moneyList();
    },
    changeState(val) {
      this.form.state = val;
      this.getRecord();
    }
  },
  computed: {
    pokerHistory() {
      return this.form.updatatime;
    }
  },
  mounted() {
    this.getRecord();
    this.moneyList();
  }
};
</script>

<style lang="scss" scoped>
.property {
  .property-top {
    border: #f2f2f2 solid 1px;
    padding: 20px 0;
  }

  .title {
    margin: 20px 0 0 0;
  }
  margin: 20px 0;
  .el-col {
    text-align: center;
  }
}

.property em {
  display: block;
  font-style: normal;
  font-size: 26px;
  padding: 10px 0 0 0;
}
</style>
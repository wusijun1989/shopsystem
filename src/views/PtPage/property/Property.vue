<template>
<div class="main-content">
    <section>
    

        <template>

<el-table :data="Records" highlight-current-row v-loading="listLoading" style="width: 100%;" key="sRecords">
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="username" label="用户名" width="180" sortable>
			</el-table-column>
			<el-table-column prop="type" label="类型" width="100" :formatter="formatType" sortable>
			</el-table-column>
      <el-table-column prop="order_number" label="订单号" width="180" sortable>
			</el-table-column>
      <el-table-column prop="pay_number" label="支付单号" width="180" sortable>
			</el-table-column>
			<el-table-column prop="money" label="金额" width="120"  sortable>
			</el-table-column>
    	<el-table-column prop="paytype" label="支付方式" width="120" :formatter="payState" sortable>
			</el-table-column>
			<el-table-column prop="state" label="状态" width="100" :formatter="formatState" sortable>
			</el-table-column>
      <el-table-column prop="time" label="创建时间" width="180" sortable>
			</el-table-column>
			<el-table-column prop="updata_time" label="最后修改时间" width="180" sortable>
			</el-table-column>
			<el-table-column prop="remarks" label="备注" width="200" sortable>
			</el-table-column>
		</el-table>




   	<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination  layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="record_total" style="float:right;">
			</el-pagination>
		</el-col>
<div style="clear:both"></div>


  </template>


	</section>
    </div>
</template>

<script>
import { getMoneyListPage, getShRecordListPage } from "../../../api/api";

export default {
  data() {
    return {
      form: {
        time: "",
        state: "",
        type: ""
      },
      Records: [],
      record_total: 0,
      record_page: 1,
      listLoading: false
    };
  },
  watch: {
    pokerHistory(newValue, oldValue) {
      console.log(newValue);
    }
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
    payState: function(row, column) {
      return row.type == 1
        ? "平台转账"
        : row.type == 0 ? "钱包支付" : "平台转账";
    },

    getShRecord() {
      let para = {
        page: this.record_page,
        time: this.form.time,
        state: this.form.state,
        type: this.form.type
      };
      this.listLoading = true;
      //NProgress.start();
      getShRecordListPage(para).then(res => {
        console.log(para.state);
        this.record_total = res.data.total;
        this.Records = res.data.ShRecordsList;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getShRecord();
    },
    changeState(val) {
      this.form.state = val;
      this.getShRecord();
    }
  },
  computed: {
    pokerHistory() {
      return this.form.updatatime;
    }
  },
  mounted() {
    this.getShRecord();
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
<template>
    <section>
          <div class="orderlist">
              <div class="search">
                  <el-col :span="24" class="toolbar" style="padding-bottom: 0px; margin-bottom:20px">
                    <el-form :inline="true">
                              <el-form-item label="订单号">
                                  <el-input v-model="form.iphone" ></el-input>
                              </el-form-item>
                              <el-form-item label="用户">
                                  <el-input v-model="form.iphone" ></el-input>
                              </el-form-item>     
                              <el-form-item label="状态">
                                  <el-select v-model="form.state" placeholder="交易状态">
                                      <el-option label="全部" value=""></el-option>
                                      <el-option label="待付款" value="0"></el-option>
                                      <el-option label="待发货" value="1"></el-option>
                                      <el-option label="已发货" value="2"></el-option>
                                      <el-option label="已完成" value="3"></el-option>
                                      <el-option label="已关闭" value="4"></el-option>
                                      <el-option label="退款中" value="5"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="创建时间">
                                <el-col >
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.time" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
                                </el-col>
                              </el-form-item>
                              <el-form-item>
                                <el-button type="primary" >查询</el-button>
                              </el-form-item>
                    </el-form>
                  </el-col>
              </div>

               <template>
                  <div>
                      <el-radio-group v-model="form.state" style="margin:0 0 20px 0;" @change="changeState"><el-radio-button label="">全部</el-radio-button><el-radio-button label="0">代付款</el-radio-button><el-radio-button label="1">代发货</el-radio-button><el-radio-button label="2">已发货</el-radio-button><el-radio-button label="3">已完成</el-radio-button><el-radio-button label="4">已关闭</el-radio-button><el-radio-button label="5">退款中</el-radio-button>
                      </el-radio-group>
                  </div>
              </template> 

<div class="order-table">
<template>
  <el-table :data="orderlist" default-expand-all :header-row-class-name="handlemyclass" :row-class-name="tableRowClassName" style="width: 100%;">
    <el-table-column type="expand" style=" background-color: #f1f1ff1;">
      <template slot-scope="props">

 <table style="width:100%;" cellspacing="0">
<tr>  
<td  class="mytable-td" width="200" style="padding:0!important;" >
<el-table :data="props.row.products.list" style="width:100%;" :row-class-name="ProductsRowClassName"  :show-header="false" >
  <el-table-column label="" width="48">
  
  </el-table-column>
<el-table-column label="" width="70">
      <template slot-scope="scope">
        <span style="margin-left: 10px"><img :src="scope.row.img"/></span>
      </template>
    </el-table-column>
  <el-table-column label=""  min-width="300" max-width="386">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
<el-table-column label="" min-width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">¥ {{ scope.row.price }}  </span><span style="margin-left: 10px;display:block;">* {{ scope.row.num }}</span>
      </template>
    </el-table-column>
</el-table>
   </td>
  <td class="mytable-td" width="120"> <span style="margin-left: 10px">{{props.row.products.buyer }}</span></td>
  <td class="mytable-td" width="150"> <span style="margin-left: 10px">{{props.row.products.order_time }}</span></td>
  <td class="mytable-td" width="120"> <span style="margin-left: 10px">{{props.row.products.state }}</span></td>
  <td class="mytable-td" width="200"> <span style="margin-left: 10px">¥ {{props.row.products.money }} <p style="margin-left: 10px">平台红包：¥ {{ props.row.products.redpacket }}</p></span></td>
  <td class="mytable-td" width="200"> <span style="margin-left: 10px">{{props.row.products.Supplier }}</span></td>
  <td class="mytable-td" width="100"> <span style="margin-left: 10px">¥ {{props.row.products.extend_mpney }}</span></td>
  <td class="mytable-td" width="200"></td>
  </tr>
                </table> 
              <div class="products-messages" >
                  <el-form label-width="96px">
                    <el-form-item label="买家备注：">
                      <span>{{props.row.products.buy_messages}}</span>
                    </el-form-item>
                  <el-form-item label="卖家备注：">
                    <span>{{props.row.products.sell_messages}}</span>
                    </el-form-item>
                  </el-form>
              </div>
      </template>

    </el-table-column>
    <el-table-column  type="index" :index="indexMethod" width="70"></el-table-column>
    <el-table-column label="商品" min-width="300" max-width="386">
       <template slot-scope="scope">
        <span style="margin-left: 10px">订单号： {{ scope.row.order_no }}  </span>
         <span style="margin-left: 10px;display:block">外部订单号： {{ scope.row.outorder_no }}  </span>
      </template>
    </el-table-column>
    <el-table-column label="单价/数量"   min-width="120">
    
     <template slot-scope="scope">
       
      </template>
    
    </el-table-column>
    <el-table-column  label="买家"   prop="" min-width="120"></el-table-column>
     <el-table-column  label="下单时间"  prop="" min-width="150"></el-table-column>
     <el-table-column  label="订单状态"  prop="" min-width="120"></el-table-column>
     <el-table-column  label="订单金额"  prop="" min-width="200"></el-table-column>
     <el-table-column  label="供应商"  prop="" min-width="200"></el-table-column>
     <el-table-column  label="推广费"  prop="" min-width="100"></el-table-column>
      <el-table-column label="操作" min-width="200">
      <template slot-scope="scope">
            <el-button  size="mini"  type="primary"  @click="$router.push('/orderdetails')">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

    <!--工具条-->
 <el-col :span="24" class="toolbar">
			<el-pagination  layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="record_total" style="float:right;">
			</el-pagination>
		</el-col> 

    </div>  
</div>
     
	</section>
</template>

<script>
export default {
  data() {
    return {
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
      activeName3: "first",
      orderlist: [
        {
          order_no: "15464564545",
          outorder_no: "645421231545",
          products: {
            buy_messages: "买家留言",
            sell_messages: "卖家留言",
            buyer: "18258815650",
            money: "80.00",
            redpacket: "10.00",
            order_time: "2018-9-10 12:00",
            state: "1",
            Supplier: "土味",
            extend_mpney: "5.00",
            list: [
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60"
              },
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60"
              }
            ]
          }
        },
        {
          order_no: "15464564545",
          outorder_no: "645421231545",
          products: {
            buy_messages: "买家留言",
            sell_messages: "卖家留言",
            buyer: "18258815650",
            money: "80.00",
            redpacket: "10.00",
            order_time: "2018-9-10 12:00",
            state: "1",
            Supplier: "土味",
            extend_mpney: "5.00",
            list: [
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60"
              },
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60"
              }
            ]
          }
        }
      ]
    };
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
    handleCurrentChange(val) {
      this.page = val;
    },
    MoneyPageChange(val) {
      this.money_page = val;
      this.moneyList();
    },
    changeState(val) {
      this.form.state = val;
    },
    tableRowClassName: function(row, rowIndex) {
      return "list_subtable_header";
    },
    handlemyclass: function(row, column, rowIndex, columnIndex) {
      return "table_header";
    },
    indexMethod: function(index) {
      return index * 1 + 1;
    },
    ProductsRowClassName: function(row, rowIndex) {
      return "list_products_table";
    }
  },
  computed: {
    pokerHistory() {
      return this.form.updatatime;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.property {
  .property-top {
    border: #f2f2f2 solid 1px;
    padding: 20px 0;
  }
  background: #fff;
  .title {
    margin: 20px 0 0 0;
  }
  margin: 20px 0;
  .el-col {
    text-align: center;
  }
}

.products_table tr:hover {
  background: none !important;
}
.table_header {
  color: #409eff;
  background: #ecf5ff !important;
  border-color: #b3d8ff;
}
.list_subtable_header {
  color: #666;
  background: #f5f7fa !important;
  border-color: #b3d8ff;
}

.list_subtable_header.expanded + tr td {
  background: #fff !important;
  padding: 0 !important;
}
.list_subtable_header.expanded + tr td tr td {
  padding: 10px 0 !important;
}

.list_subtable_header.expanded + tr:hover td {
  background: #fff !important;
  padding: 0 !important;
}
.list_subtable_header.expanded + tr:hover td tr td {
  background: #fff !important;
  padding: 10px 0 !important;
}
.tabletabs {
  background: #f1f1f1;
}
.products-messages {
  padding: 10px 0;
  background: #fdf6ec;
}
.order-table {
  border-top: #ededed solid 1px;
  border-left: #ededed solid 1px;
  border-right: #ededed solid 1px;
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
.mytable-td {
  border-right: 1px solid #e6ebf5;
  min-height: 67px;
}
.mytable-td:last-child {
  border-right: none;
}
.list_products_table:last-child td {
  border-bottom: #fff solid 0px;
}
.mytable-td div::before {
  height: 0 !important;
}
</style>
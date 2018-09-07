<template>

    <section>
      <div class="details-step">
  <el-steps :active="2" align-center>
    <el-step title="买家下单" description="2018-01-01 14：00：00"></el-step>
    <el-step title="买家付款" description="2018-01-01 14：00：00"></el-step>
    <el-step title="商家发货" description="2018-01-01 14：00：00"></el-step>
    <el-step title="交易完成" description="2018-01-01 14：00：00"></el-step>
  </el-steps>
      </div>

<div class="details-center ">

<el-row :gutter="20">
  <el-col :span="12"><el-card class="box-card" style="float:left">
  <div slot="header" class="clearfix">
    <span>订单信息</span>
 
  </div>
  <div  class="text item">

<el-form :label-position="labelPosition" label-width="96px">
  <el-form-item label="订单号：">
    <span>325645121558</span>
  </el-form-item>
 <el-form-item label="平台订单号：">
   <span>325645121558</span>
  </el-form-item>
 <el-form-item label="付款状态：">
    <span>已付款</span>
  </el-form-item>
   <el-form-item label="用户：">
   <span>18258815650</span>
  </el-form-item>

</el-form>

<el-form :label-position="labelPosition" label-width="100px">
  <el-form-item label="配送方式：">
    <span>买家自提</span>
  </el-form-item>
 <el-form-item label="收货信息：">
   <span>浙江省 杭州市 滨江区<br/>
长河街道滨安路688号天河高科5撞1209
   </span>
  </el-form-item>
 <el-form-item label="买家留言：">
    <span>阿萨德爱迪生阿萨德阿达说的爱迪生</span>
  </el-form-item>


</el-form>



  </div>
</el-card></el-col>
  <el-col :span="12"><el-card class="box-card" style="float:right">
  <div slot="header" class="clearfix">
    <span>订单状态：交易完成</span>
    
  </div>
  <div  class="text item">
货款已结算至你的余额账户，请注意查收
  </div>
</el-card></el-col>
 
</el-row>





</div>

<div class="details-bottom">


<template>
  <el-table  :data="tableData6" default-expand-all :header-row-class-name="handlemyclass" :row-class-name="tableRowClassName"
    style="width: 100%;border:#ededed solid 1px;">
    <el-table-column type="expand" style=" background-color: #f1f1ff1;">
   
<template slot-scope="props">



<el-table :data="props.row.products.list" style="width:100%" :row-class-name="ProductsRowClassName"  :show-header="false" >
<el-table-column
      label=""
      width="48">
      <template slot-scope="scope">
        <span ></span>
      </template>
    </el-table-column>
 <el-table-column
      label=""
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px"><img :src="scope.row.img"/></span>
      </template>
    </el-table-column>
  <el-table-column
      label=""
      min-width="300" max-width="386">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
<el-table-column
      label=""
      min-width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price }}</span>
      </template>
    </el-table-column>
<el-table-column
      label=""
      min-width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.num }}</span>
      </template>
    </el-table-column>
<el-table-column
      label=""
      min-width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.money }}</span>
      </template>
    </el-table-column>

<el-table-column
      label=""
      min-width="200">
      <template slot-scope="scope">
        <span style="margin-left: 10px"></span>
      </template>
    </el-table-column>

  </el-table>
 
<div class="products-total" >


<el-form :label-position="labelPosition2" label-width="96px">
  <el-form-item label="总计：">
    <span style="color:red">¥ {{props.row.products.toatl_money}}</span>
  </el-form-item>
 <el-form-item label="用户实付：">
   <span> ¥ {{props.row.products.true_money}}</span>
  </el-form-item>
 <el-form-item label="平台优惠：">
    <span>¥ {{props.row.products.down_money}}</span>
  </el-form-item>
   <el-form-item label="运费：">
   <span> ¥ {{props.row.products.fare}}</span>
  </el-form-item>

</el-form>

</div>
   <div class="products-num">共{{props.row.products.total_num}}件商品</div>   



</template>

    </el-table-column>
    <el-table-column  type="index" :index="indexMethod" width="180">
    </el-table-column>
    <el-table-column
      label="商品"
      prop="express" min-width="300" max-width="386">
    </el-table-column>
    <el-table-column
      label="价格 (元)"
      prop="express_no" min-width="200">
    </el-table-column>
    <el-table-column
      label="数量"
      prop="" min-width="200">
    </el-table-column>
     <el-table-column
      label="小计"
      prop="" min-width="200">
    </el-table-column>
      <el-table-column label="操作" min-width="200">
      <template slot-scope="scope">
            <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">查询物流</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


</div>


	</section>

</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      labelPosition2: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },

      tableData6: [
        {
          express: "顺丰快递",
          express_no: "运单号:645421231545",
          products: {
            total_num: "2",
            toatl_money: "200.00",
            true_money: "180.00",
            down_money: "20",
            fare: "10.00",
            list: [
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60",
                money: "80.00"
              },
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60",
                money: "80.00"
              }
            ]
          }
        },
        {
          express: "顺丰快递",
          express_no: "运单号:645421231545",
          products: {
            total_num: "2",
            toatl_money: "200.00",
            true_money: "180.00",
            down_money: "20",
            fare: "10.00",
            list: [
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60",
                money: "80.00"
              },
              {
                img: "http://dummyimage.com/60x60",
                name: "水果白萝卜 500g 个大 味道好",
                price: "55.00",
                num: "60",
                money: "80.00"
              }
            ]
          }
        }
      ]
    };
  },
  methods: {
    tableRowClassName: function(row, rowIndex) {
      return "subtable_header";
      // if (row.number === 1 && this.isActive) {
      //   return "first-row";
      // } else {
      //   return "";
      // }
    },
    handlemyclass: function(row, column, rowIndex, columnIndex) {
      // console.log(row, column, rowIndex, columnIndex);
      return "table_header";
    },
    indexMethod: function(index) {
      return "包裹-" + (index * 1 + 1);
    },
    ProductsRowClassName: function(row, rowIndex) {
      return "products_table";
    }
  }
};
</script>

<style  lang="scss" >
.products-total {
  padding: 10px 30px 0 0;
  float: right;
}
.products-total div {
  line-height: 24px !important;
}
.products-total label {
  line-height: 24px !important;
}
.products-num {
  float: right;
  padding: 10px 0 0 0;
  line-height: 24px;
}
.products_table tr:hover {
  background: none !important;
}
.table_header {
  color: #409eff;
  background: #ecf5ff !important;
  border-color: #b3d8ff;
}
.subtable_header {
  color: #666;
  background: #f5f7fa !important;
  border-color: #b3d8ff;
}
.subtable_header.expanded + tr td {
  background: #fff !important;
  padding: 20px 0 !important;
}
.subtable_header.expanded + tr:hover td {
  background: #fff !important;
  padding: 20px 0 !important;
}
.tabletabs {
  background: #f1f1f1;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.details-center .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.products-total {
  .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.details-step {
  padding: 40px 20px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #2d2f33;
  margin: 0 0 20px 0;
}
.details-center {
  margin: 0 0 20px 0;
  .box-card {
    width: 100%;
    height: 420px;
  }
}
</style>
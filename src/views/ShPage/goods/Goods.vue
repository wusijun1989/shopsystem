<template>
<div class="main-content">
	<section>
<el-radio-group v-model="state" @change="changeState" style="margin-bottom:20px"><el-radio-button label="0">待审核</el-radio-button><el-radio-button label="1">推广中</el-radio-button></el-radio-group>
		<!--列表-->

<div class="table-wap">

		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="80" fixed="left">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="goods" label="商品" width="150" sortable>
				 <template slot-scope="scope">
      				<img  :src="scope.row.goods" alt="" width="50" height="50">
   				 </template>
			</el-table-column>
			<el-table-column prop="name" label="价格" min-width="150" max-width="300" sortable>
	 			<template slot-scope="scope">
      				{{scope.row.name}}
					 <span class="price">￥{{scope.row.price}}</span> 
   				 </template>

			</el-table-column>
			<el-table-column prop="apply_time" label="申请时间" width="200"   sortable>
			</el-table-column>
      	<el-table-column prop="state" label="状态" width="150" :formatter="GoodState" sortable>
			</el-table-column>
	<el-table-column prop="Supplier" label="供应商" width="200"   sortable>
			</el-table-column>
		<el-table-column prop="" label="推广费率" width="200"   sortable>
      			<template slot-scope="scope">
      				{{scope.row.percent}}% 
					 ￥{{scope.row.fee}}
   				 </template>
			</el-table-column>
		
		<el-table-column label="操作" width="250" fixed="right">
     
		<template slot-scope="scope">
					<el-button type="primary" size="small" v-if="scope.row.state==0" @click="handleEdit(scope.$index, scope.row.id)">审核</el-button>
			  	<el-button type="primary" size="small" v-if="scope.row.state==1" @click="handleEdit(scope.$index, scope.row.id)">查看</el-button>
					<el-button type="warning" size="small" v-if="scope.row.state==1" @click="handleEdit(scope.$index, scope.row.id)">下架</el-button>
    </template>
      
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar" style=" float:none;">
			
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
      <div style="clear:both"></div>
		</el-col>
</div>
		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

	
	</section>
    </div>
</template>

<script>
import util from "../../../common/js/util";
//import NProgress from 'nprogress'
import { getShGoodsPage } from "../../../api/api";

export default {
  data() {
    return {
      filters: {
        name: ""
      },
      state: 0,
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], //列表选中列
      editFormVisible: false, //编辑界面是否显示
      editLoading: false,
      editFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      //编辑界面数据
      editForm: {
        id: 0,
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      },

      addLoading: false,
      addFormRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }]
      },
      //新增界面数据
      addForm: {
        name: "",
        sex: -1,
        age: 0,
        birth: "",
        addr: ""
      },
      radio3: "待审核"
    };
  },
  methods: {
    //性别显示转换
    GoodState: function(row, column) {
      return row.state == 0 ? "待审核" : row.state == 1 ? "推广中" : "已驳回";
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getShGoods();
    },
    //获取用户列表
    getShGoods() {
      let para = {
        state: this.state,
        page: this.page
      };
      this.listLoading = true;
      //NProgress.start();
      getShGoodsPage(para).then(res => {
        this.total = res.data.total;
        this.users = res.data.ShGoodsList;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },
    //删除

    //显示编辑界面
    handleEdit: function(index, row) {
      this.$router.push({
        path: "/shgoodsdetails",
        query: { id: row }
      });
      // _this.$router.push("/login");
    },
    changeState(val) {
      this.state = val;
      this.getShGoods();
    },
    //编辑

    //新增
    addSubmit: function() {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.addLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.addForm);
            para.birth =
              !para.birth || para.birth == ""
                ? ""
                : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
            addUser(para).then(res => {
              this.addLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["addForm"].resetFields();
              this.addFormVisible = false;
              this.getUsers();
            });
          });
        }
      });
    },
    selsChange: function(sels) {
      this.sels = sels;
    },
    //批量删除
    batchRemove: function() {
      var ids = this.sels.map(item => item.id).toString();
      this.$confirm("确认删除选中记录吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { ids: ids };
          batchRemoveUser(para).then(res => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getUsers();
          });
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.getShGoods();
  }
};
</script>

<style scoped>
.price {
  display: block;
}
.el-table__header-wrapper {
  background: rgb(242, 242, 242);
}
</style>
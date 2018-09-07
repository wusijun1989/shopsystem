<template>
<div class="main-content">
	<section>

<div class="search">
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px; margin-bottom:20px">
          <el-form :inline="true">
            <el-form-item label="帐号">
             	<el-input v-model="form.accounts" ></el-input>
            </el-form-item>
            <el-form-item label="省">
               	<el-input v-model="form.province" ></el-input>  
            </el-form-item>
            <el-form-item label="企业名称">
              <el-input v-model="form.companyname" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getShCompany">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
    </div>


		<!--列表-->

<div class="table-wap">

		<el-table :data="companylist" highlight-current-row v-loading="listLoading"  style="width: 100%;">
			<el-table-column prop="id" label="ID" width="150" sortable>
			</el-table-column>
			<el-table-column prop="accounts" label="帐号" min-width="150" max-width="300" sortable>
			</el-table-column>
	    <el-table-column prop="name" label="企业名称" width="150"  sortable>
			</el-table-column>
      <el-table-column prop="province" label="省" width="150"  sortable>
			</el-table-column>
      <el-table-column prop="city" label="市" width="150"  sortable>
			</el-table-column>
			<el-table-column prop="time" label="创建时间" width="200"   sortable>
			</el-table-column>
		  <el-table-column prop="login_time" label="最近登录时间" width="200"   sortable>
			</el-table-column>
			<el-table-column label="操作" width="250" fixed="right">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
			
				</template>
			</el-table-column>
		</el-table>
</div>
		<!--编辑界面-->
		<el-dialog title="企业详情" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="120px" :rules="editFormRules" ref="editForm">
				<el-form-item label="土味有限公司" prop="name">
					<span>土味有限公司</span>
				</el-form-item>
				<el-form-item label="主营类目">
					<span>农产品</span>
				</el-form-item>
				<el-form-item label="企业logo">
					
				</el-form-item>
				<el-form-item label="所在地">
				
				</el-form-item>
				<el-form-item label="简介">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
        <el-form-item label="所属商会">
					<span>河北商会</span>
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
import { getShCompanyListPage, editUser } from "../../../api/api";

export default {
  data() {
    return {
      form: {
        accounts: "",
        province: "",
        companyname: ""
      },

      companylist: [],

      total: 0,
      page: 1,
      listLoading: false,

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
      }
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val;
      this.getShCompany();
    },
    //获取用户列表
    getShCompany() {
      let para = {
        page: this.page,
        accounts: this.form.accounts,
        province: this.form.province,
        companyname: this.form.companyname
      };
      this.listLoading = true;
      //NProgress.start();
      getShCompanyListPage(para).then(res => {
        this.total = res.data.total;
        this.companylist = res.data.ShCompanyList;
        // console.log(res.data);
        this.listLoading = false;
        //NProgress.done();
      });
    },

    //显示编辑界面
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      console.log(this.editFormVisible);
      this.editForm = Object.assign({}, row);
    },

    //编辑
    editSubmit: function() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.editForm);
            para.birth =
              !para.birth || para.birth == ""
                ? ""
                : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
            editUser(para).then(res => {
              this.editLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$refs["editForm"].resetFields();
              this.editFormVisible = false;
              this.getUsers();
            });
          });
        }
      });
    }
  },
  mounted() {
    this.getShCompany();
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
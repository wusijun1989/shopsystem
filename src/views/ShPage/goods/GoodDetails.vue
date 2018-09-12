<template>
<div class="main-content" style="padding:40px 0">
	<el-form  :model="editForm"  label-width="150px"  ref="editForm" style="width:60%;min-width:600px;">
		<el-form-item label="商品名称">
      
      <span>{{gooddetail.name}}</span>
			
		</el-form-item>
		<el-form-item label="商品描述" >
      <span>{{gooddetail.describe}}</span>
				
		</el-form-item>
    	<el-form-item label="挂牌价" >
        <span>￥{{gooddetail.price}}</span>
		
		</el-form-item>
    	<el-form-item label="售卖价">
         <span>￥{{gooddetail.price2}}</span>
		</el-form-item>

	 <el-form-item label="商品缩略图">
    <img :src="gooddetail.goods"/>
		</el-form-item>

    
	<el-form-item label="商品banner图">

<template v-for="(key, value) in gooddetail.runpic"  >
<img :src="key.pic" :alt="value"  />

</template>

		</el-form-item>
	
    <el-form-item label="商品详情">
         <span>{{gooddetail.details}}</span>
    </el-form-item>
 <el-form-item label="推广费率">
         <span>{{gooddetail.percent}}% ￥{{gooddetail.fee}}</span>
    </el-form-item>
 <el-form-item label="供应商">
         <span>{{gooddetail.Supplier}}</span>
    </el-form-item>
<el-form-item label="创建时间">
         <span> {{gooddetail.start_time}}</span>
    </el-form-item>
<el-form-item label="申请时间">
         <span> {{gooddetail.apply_time}}</span>
  </el-form-item>
		<el-form-item>
      <template v-if="gooddetail.state==0">	
        <el-button type="primary" @click.native="editSubmit(1)">审核通过</el-button>
        <el-button @click.native="editSubmit(2)" >驳回申请</el-button>
      </template>
      <template  v-if="gooddetail.state==1">
        <el-button type="warning" @click.native="turnoff">下架</el-button>
        <el-button type="primary" @click="this.$router.push('/shgoods')">返回</el-button>
      </template>

		</el-form-item>
	</el-form>
    </div>
</template>

<script>
import util from "../../../common/js/util";
import { getShGoodsDetail, editShGoods } from "../../../api/api";

export default {
  data() {
    return {
      gooddetail: [],
      editLoading: false,
      editForm: {
        id: this.$route.query.id,
        state: 1
      },
      turnForm: {
        buystate: 0
      }
    };
  },
  methods: {
    turnoff: function() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.turnForm);
            editShGoods(para).then(res => {
              this.editLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$router.push({
                path: "/shgoods"
              });
            });
          });
        }
      });
    },

    getdetail() {
      let goodid = this.$route.query.id;
      console.log(goodid);
      let para = {
        page: this.page,
        id: goodid
      };
      getShGoodsDetail(para).then(data => {
        let { msg, code, detail } = data;
        if (code !== 200) {
          this.$message({
            message: msg,
            type: "error"
          });
        } else {
          console.log(data.detail);
          this.gooddetail = data.detail;
        }
      });
    },
    editSubmit: function(data) {
      this.state = data;
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {}).then(() => {
            this.editLoading = true;
            //NProgress.start();
            let para = Object.assign({}, this.editForm);
            editShGoods(para).then(res => {
              this.editLoading = false;
              //NProgress.done();
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.$router.push({
                path: "/shgoods"
              });
            });
          });
        }
      });
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  mounted() {
    this.getdetail();
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
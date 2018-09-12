<template>
<div class="main-content">

<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="账户设置" name="first">
	<el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:50%;min-width:400px;">
		<el-form-item label="帐号">
			<el-input v-model="form.iphone" :disabled="form.disabled" class="iphone" style="width:200px; margin-right:20px;"></el-input><el-button type="text" @click="change_iphone">修改</el-button>
		</el-form-item>
		<el-form-item label="联系人姓名" >
			<span>代用名</span>
		</el-form-item>
		<el-form-item label="联系人QQ">
			<el-input placeholder="请输入联系人QQ"  style="width:200px"></el-input>
		</el-form-item>
		<el-form-item label="联系人手机号">
			<span class="pd-r-20">18258815650</span><el-button type="text" @click="change_iphone">解绑</el-button>
		</el-form-item>
		<el-form-item label="创建日期">
      <span>{{form.time}}</span>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">保存</el-button>
		</el-form-item>
	</el-form>
	</el-tab-pane>

    <el-tab-pane label="商会设置" name="second">
	<el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

		<el-form-item label="主体信息">
			<el-input v-model="form.subject" disabled="" style="width:200px"></el-input>
		</el-form-item>


		<el-form-item label="头像">
			<el-upload
			class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>


		<el-form-item label="所在地">
			<el-cascader  :options="options2"  @active-item-change="handleItemChange"  :props="props"></el-cascader>
			<el-input v-model="form.name" style="margin:20px 0 0 0;" placeholder="详细地址"></el-input>
		</el-form-item>
		<el-form-item label="简介">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>

		<el-form-item label="所属商会">
			<span class="pd-r-20">{{form.commerce}}</span><el-button type="text">变更主体</el-button>
		</el-form-item>

		<el-form-item>
			<el-button type="primary">保存</el-button>
		</el-form-item>
	</el-form></el-tab-pane>
    <el-tab-pane label="财务设置" name="third">
<el-form ref="form" :model="form" label-width="120px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">

		<el-form-item label="开户行">
			<el-input placeholder="请输入开户行" style="width:300px"></el-input>
		</el-form-item>
		<el-form-item label="银行账号">
			<el-input placeholder="请输入银行账号" style="width:300px"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">保存</el-button>
		</el-form-item>
	</el-form>


		
	</el-tab-pane>
  </el-tabs>
</template>



    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      imageUrl: "",
      form: {
        disabled: true,
        iphone: "18258815650",
        subject: "土味有限公司",
        name: "",
        time: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        commerce: "河北商会"
      },
      options2: [
        {
          label: "江苏",
          cities: []
        },
        {
          label: "浙江",
          cities: []
        }
      ],
      props: {
        value: "label",
        children: "cities"
      }
    };
  },
  created: function() {
    this.gettime();
  },
  methods: {
    change_iphone() {
      this.form.disabled = false;
    },

    onSubmit() {
      console.log("submit!");
    },
    gettime() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.form.time = year + seperator1 + month + seperator1 + strDate;
      console.log(this.form.time);
    },
    handleItemChange(val) {
      console.log("active item:", val);
      setTimeout(_ => {
        if (val.indexOf("江苏") > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [
            {
              label: "南京"
            }
          ];
        } else if (
          val.indexOf("浙江") > -1 &&
          !this.options2[1].cities.length
        ) {
          this.options2[1].cities = [
            {
              label: "杭州"
            }
          ];
        }
      }, 300);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {}
};
</script>
<style >
.pd-r-20 {
  padding: 0 20px 0 0;
}
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
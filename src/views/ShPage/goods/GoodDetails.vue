<template>
<div class="main-content" style="padding:40px 0">
	<el-form ref="form" :model="form" label-width="150px" @submit.prevent="onSubmit" style="width:60%;min-width:600px;">
		<el-form-item label="商品名称">
      <span>蘑菇500g</span>
			
		</el-form-item>
		<el-form-item label="商品描述" >
      <span>好吃的蘑菇</span>
				
		</el-form-item>
    	<el-form-item label="挂牌价" >
        <span>20</span>
		
		</el-form-item>
    	<el-form-item label="售卖价">
         <span>15</span>
		</el-form-item>

	 <el-form-item label="商品缩略图">
    <img src="http://dummyimage.com/125x125"/>
		</el-form-item>

    
	<el-form-item label="商品banner图">

      <img src="http://dummyimage.com/125x125"/>
      <img src="http://dummyimage.com/125x125"/>
      <img src="http://dummyimage.com/125x125"/>

		</el-form-item>
	
    <el-form-item label="商品详情">
         <span>阿斯达是</span>
    </el-form-item>
 <el-form-item label="推广费率">
         <span>5% ￥5.00</span>
    </el-form-item>
 <el-form-item label="供应商">
         <span>企业名称</span>
    </el-form-item>
<el-form-item label="创建时间">
         <span>2018-9-10</span>
    </el-form-item>
<el-form-item label="申请时间">
         <span>2018-9-10</span>
  </el-form-item>
		<el-form-item>
			<el-button type="primary">审核通过</el-button>
			<el-button @click.native.prevent>驳回申请</el-button>
		</el-form-item>
	</el-form>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: null,
      editorOption: {},

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
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
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    }
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
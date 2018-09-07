<template>
<div class="main-content" style="padding:40px 0">
	<el-form ref="form" :model="form" label-width="150px" @submit.prevent="onSubmit" style="width:60%;min-width:600px;">
		<el-form-item label="商品名称">
			<el-input v-model="form.name" style="width:400px"></el-input>
		</el-form-item>
		<el-form-item label="商品描述" >
				<el-input type="textarea" v-model="form.desc" style="width:400px"></el-input>
		</el-form-item>
    	<el-form-item label="挂牌价" >
			<el-input v-model="form.name" style="width:200px"></el-input>
		</el-form-item>
    	<el-form-item label="售卖价">
			<el-input v-model="form.name"  style="width:200px"></el-input>
		</el-form-item>
        	<el-form-item label="是否上架">
			<el-radio-group v-model="form.resource">
				<el-radio label="是"></el-radio>
				<el-radio label="否"></el-radio>
			</el-radio-group>
		</el-form-item>
	<el-form-item label="商品缩略图">
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

    
	<el-form-item label="商品banner图">
			<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
		</el-form-item>
		
        

         <el-form-item label="商品详情">
          <template>
     <quill-editor 
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
</template>  
                        </el-form-item>



		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
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
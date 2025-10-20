<template>
<div :style='{"width":"calc(100% - 40px)","padding":"30px 20px 40px","margin":"20px auto 0","position":"relative","background":"rgba(255,255,255,.3)"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛名称" prop="jingsaimingcheng">
            <el-input v-model="ruleForm.jingsaimingcheng" 
                placeholder="竞赛名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛封面" v-if="type!='cross' || (type=='cross' && !ro.jingsaifengmian)" prop="jingsaifengmian">
            <file-upload
            tip="点击上传竞赛封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.jingsaifengmian?ruleForm.jingsaifengmian:''"
            @change="jingsaifengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' class="upload" v-else label="竞赛封面" prop="jingsaifengmian">
                <img v-if="ruleForm.jingsaifengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.jingsaifengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.jingsaifengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}'  label="竞赛类别" prop="jingsaileibie">
            <el-select v-model="ruleForm.jingsaileibie" placeholder="请选择竞赛类别"  >
              <el-option
                  v-for="(item,index) in jingsaileibieOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="赛事说明" prop="saishishuoming">
            <el-input v-model="ruleForm.saishishuoming" 
                placeholder="赛事说明" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="举办方" prop="jubanfang">
            <el-input v-model="ruleForm.jubanfang" 
                placeholder="举办方" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛时间" prop="jingsaishijian" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.jingsaishijian" 
                  type="date"
                  placeholder="竞赛时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="报名人数" prop="baomingrenshu">
            <el-input v-model="ruleForm.baomingrenshu" 
                placeholder="报名人数" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="赛道说明" prop="saidaoshuoming">
            <el-input v-model="ruleForm.saidaoshuoming" 
                placeholder="赛道说明" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛地点" prop="jingsaididian">
            <el-input v-model="ruleForm.jingsaididian" 
                placeholder="竞赛地点" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="赛事适合的专业" prop="saishishihedezhuanye">
            <el-input v-model="ruleForm.saishishihedezhuanye" 
                placeholder="赛事适合的专业" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="参赛人员要求" prop="cansairenyuanyaoqiu">
            <el-input v-model="ruleForm.cansairenyuanyaoqiu" 
                placeholder="参赛人员要求" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛内容" prop="jingsaineirong">
            <editor 
                :style='{"minHeight":"200px","padding":"0","margin":"0","borderColor":"#ccc","backgroundColor":"#fff","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.jingsaineirong" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"20px 0 20px 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"0px 0px 0px #ccc","margin":"0 20px 0 0","color":"#fff","outline":"none","borderRadius":"0px","background":"linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(197,230,250,1) 80%, rgba(48,134,185,1) 100%),#3086b9","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid #bbb","cursor":"pointer","padding":"0","boxShadow":"0px 0px 0px #eee","margin":"0","color":"#333","outline":"none","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 80%, rgba(204,204,204,1) 100%),#999","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            jingsaimingcheng : false,
            jingsaifengmian : false,
            jingsaileibie : false,
            saishishuoming : false,
            jubanfang : false,
            jingsaishijian : false,
            baomingrenshu : false,
            saidaoshuoming : false,
            jingsaididian : false,
            saishishihedezhuanye : false,
            cansairenyuanyaoqiu : false,
            jingsaineirong : false,
            clicktime : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jingsaimingcheng: '',
          jingsaifengmian: '',
          jingsaileibie: '',
          saishishuoming: '',
          jubanfang: '',
          jingsaishijian: '',
          baomingrenshu: '0',
          saidaoshuoming: '',
          jingsaididian: '',
          saishishihedezhuanye: '',
          cansairenyuanyaoqiu: '',
          jingsaineirong: '',
          clicktime: '',
        },
        jingsaileibieOptions: [],
        rules: {
          jingsaimingcheng: [
            { required: true, message: '竞赛名称不能为空', trigger: 'blur' },
          ],
          jingsaifengmian: [
          ],
          jingsaileibie: [
            { required: true, message: '竞赛类别不能为空', trigger: 'blur' },
          ],
          saishishuoming: [
            { required: true, message: '赛事说明不能为空', trigger: 'blur' },
          ],
          jubanfang: [
          ],
          jingsaishijian: [
          ],
          baomingrenshu: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          saidaoshuoming: [
          ],
          jingsaididian: [
            { required: true, message: '竞赛地点不能为空', trigger: 'blur' },
          ],
          saishishihedezhuanye: [
            { required: true, message: '赛事适合的专业不能为空', trigger: 'blur' },
          ],
          cansairenyuanyaoqiu: [
          ],
          jingsaineirong: [
          ],
          clicktime: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='jingsaimingcheng'){
              this.ruleForm.jingsaimingcheng = obj[o];
              this.ro.jingsaimingcheng = true;
              continue;
            }
            if(o=='jingsaifengmian'){
              this.ruleForm.jingsaifengmian = obj[o].split(",")[0];
              this.ro.jingsaifengmian = true;
              continue;
            }
            if(o=='jingsaileibie'){
              this.ruleForm.jingsaileibie = obj[o];
              this.ro.jingsaileibie = true;
              continue;
            }
            if(o=='saishishuoming'){
              this.ruleForm.saishishuoming = obj[o];
              this.ro.saishishuoming = true;
              continue;
            }
            if(o=='jubanfang'){
              this.ruleForm.jubanfang = obj[o];
              this.ro.jubanfang = true;
              continue;
            }
            if(o=='jingsaishijian'){
              this.ruleForm.jingsaishijian = obj[o];
              this.ro.jingsaishijian = true;
              continue;
            }
            if(o=='baomingrenshu'){
              this.ruleForm.baomingrenshu = obj[o];
              this.ro.baomingrenshu = true;
              continue;
            }
            if(o=='saidaoshuoming'){
              this.ruleForm.saidaoshuoming = obj[o];
              this.ro.saidaoshuoming = true;
              continue;
            }
            if(o=='jingsaididian'){
              this.ruleForm.jingsaididian = obj[o];
              this.ro.jingsaididian = true;
              continue;
            }
            if(o=='saishishihedezhuanye'){
              this.ruleForm.saishishihedezhuanye = obj[o];
              this.ro.saishishihedezhuanye = true;
              continue;
            }
            if(o=='cansairenyuanyaoqiu'){
              this.ruleForm.cansairenyuanyaoqiu = obj[o];
              this.ro.cansairenyuanyaoqiu = true;
              continue;
            }
            if(o=='jingsaineirong'){
              this.ruleForm.jingsaineirong = obj[o];
              this.ro.jingsaineirong = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/jingsaileibie/jingsaileibie', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.jingsaileibieOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('jingsaixiangmu/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('jingsaixiangmu/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('jingsaixiangmu/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('jingsaixiangmu/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      jingsaifengmianUploadChange(fileUrls) {
          this.ruleForm.jingsaifengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #666;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 400px;
	  font-size: 14px;
	  border-color: #9dcde9;
	  border-width: 0 0 2px;
	  border-style: dotted;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #666;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 200px;
	  font-size: 14px;
	  border-color: #9dcde9;
	  border-width: 0 0 2px;
	  border-style: dotted;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #666;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 200px;
	  font-size: 14px;
	  border-color: #9dcde9;
	  border-width: 0 0 2px;
	  border-style: dotted;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  border: 2px dotted #9dcde9;
	  border-radius: 6px;
	  color: #9dcde9;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border: 2px dotted #9dcde9;
	  border-radius: 6px;
	  color: #9dcde9;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  border: 2px dotted #9dcde9;
	  border-radius: 6px;
	  color: #9dcde9;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 200px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 2px dotted #9dcde9;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #666;
	  background: linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%);
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	}
</style>

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
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="竞赛类别" prop="jingsaileibie">
            <el-input v-model="ruleForm.jingsaileibie" 
                placeholder="竞赛类别" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="举办方" prop="jubanfang">
            <el-input v-model="ruleForm.jubanfang" 
                placeholder="举办方" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="工号" prop="gonghao">
            <el-input v-model="ruleForm.gonghao" 
                placeholder="工号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="老师姓名" prop="laoshixingming">
            <el-input v-model="ruleForm.laoshixingming" 
                placeholder="老师姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="所属学院" prop="suoshuxueyuan">
            <el-input v-model="ruleForm.suoshuxueyuan" 
                placeholder="所属学院" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="奖项名次" prop="jiangxiangmingci">
            <el-input v-model="ruleForm.jiangxiangmingci" 
                placeholder="奖项名次" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="上传证书" v-if="type!='cross' || (type=='cross' && !ro.shangchuanzhengshu)" prop="shangchuanzhengshu">
            <file-upload
            tip="点击上传上传证书"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.shangchuanzhengshu?ruleForm.shangchuanzhengshu:''"
            @change="shangchuanzhengshuUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' class="upload" v-else label="上传证书" prop="shangchuanzhengshu">
                <img v-if="ruleForm.shangchuanzhengshu.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.shangchuanzhengshu.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.shangchuanzhengshu.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="参赛照片" v-if="type!='cross' || (type=='cross' && !ro.cansaizhaopian)" prop="cansaizhaopian">
            <file-upload
            tip="点击上传参赛照片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.cansaizhaopian?ruleForm.cansaizhaopian:''"
            @change="cansaizhaopianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' class="upload" v-else label="参赛照片" prop="cansaizhaopian">
                <img v-if="ruleForm.cansaizhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.cansaizhaopian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cansaizhaopian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="成果材料" prop="chengguocailiao">
            <file-upload
            tip="点击上传成果材料"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.chengguocailiao?ruleForm.chengguocailiao:''"
            @change="chengguocailiaoUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="参赛总结" prop="cansaizongjie">
            <el-input v-model="ruleForm.cansaizongjie" 
                placeholder="参赛总结" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"0px solid #dfdfdf","padding":"10px","boxShadow":"0px 0px 0px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"none"}' label="上报时间" prop="shangbaoshijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.shangbaoshijian" 
                  type="datetime"
                  placeholder="上报时间">
              </el-date-picker>
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
            jingsaileibie : false,
            jubanfang : false,
            gonghao : false,
            laoshixingming : false,
            suoshuxueyuan : false,
            jiangxiangmingci : false,
            shangchuanzhengshu : false,
            cansaizhaopian : false,
            chengguocailiao : false,
            cansaizongjie : false,
            shangbaoshijian : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jingsaimingcheng: '',
          jingsaileibie: '',
          jubanfang: '',
          gonghao: '',
          laoshixingming: '',
          suoshuxueyuan: '',
          jiangxiangmingci: '',
          shangchuanzhengshu: '',
          cansaizhaopian: '',
          chengguocailiao: '',
          cansaizongjie: '',
          shangbaoshijian: '',
        },
        rules: {
          jingsaimingcheng: [
          ],
          jingsaileibie: [
          ],
          jubanfang: [
          ],
          gonghao: [
          ],
          laoshixingming: [
          ],
          suoshuxueyuan: [
          ],
          jiangxiangmingci: [
          ],
          shangchuanzhengshu: [
          ],
          cansaizhaopian: [
          ],
          chengguocailiao: [
          ],
          cansaizongjie: [
          ],
          shangbaoshijian: [
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
      this.ruleForm.shangbaoshijian = this.getCurDateTime()
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
            if(o=='jingsaileibie'){
              this.ruleForm.jingsaileibie = obj[o];
              this.ro.jingsaileibie = true;
              continue;
            }
            if(o=='jubanfang'){
              this.ruleForm.jubanfang = obj[o];
              this.ro.jubanfang = true;
              continue;
            }
            if(o=='gonghao'){
              this.ruleForm.gonghao = obj[o];
              this.ro.gonghao = true;
              continue;
            }
            if(o=='laoshixingming'){
              this.ruleForm.laoshixingming = obj[o];
              this.ro.laoshixingming = true;
              continue;
            }
            if(o=='suoshuxueyuan'){
              this.ruleForm.suoshuxueyuan = obj[o];
              this.ro.suoshuxueyuan = true;
              continue;
            }
            if(o=='jiangxiangmingci'){
              this.ruleForm.jiangxiangmingci = obj[o];
              this.ro.jiangxiangmingci = true;
              continue;
            }
            if(o=='shangchuanzhengshu'){
              this.ruleForm.shangchuanzhengshu = obj[o].split(",")[0];
              this.ro.shangchuanzhengshu = true;
              continue;
            }
            if(o=='cansaizhaopian'){
              this.ruleForm.cansaizhaopian = obj[o].split(",")[0];
              this.ro.cansaizhaopian = true;
              continue;
            }
            if(o=='chengguocailiao'){
              this.ruleForm.chengguocailiao = obj[o];
              this.ro.chengguocailiao = true;
              continue;
            }
            if(o=='cansaizongjie'){
              this.ruleForm.cansaizongjie = obj[o];
              this.ro.cansaizongjie = true;
              continue;
            }
            if(o=='shangbaoshijian'){
              this.ruleForm.shangbaoshijian = obj[o];
              this.ro.shangbaoshijian = true;
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
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('laoshichengguo/detail/${id}', {emulateJSON: true}).then(res => {
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
                 this.$http.get('laoshichengguo/list', {
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


                          this.$http.post('laoshichengguo/add', this.ruleForm).then(res => {
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


                  this.$http.post('laoshichengguo/add', this.ruleForm).then(res => {
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
      shangchuanzhengshuUploadChange(fileUrls) {
          this.ruleForm.shangchuanzhengshu = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      cansaizhaopianUploadChange(fileUrls) {
          this.ruleForm.cansaizhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      chengguocailiaoUploadChange(fileUrls) {
          this.ruleForm.chengguocailiao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item >>> .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item >>> .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input >>> .el-input__inner {
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
	
	.add-update-preview .el-select >>> .el-input__inner {
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
	
	.add-update-preview .el-date-editor >>> .el-input__inner {
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
	
	.add-update-preview >>> .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview >>> .upload .upload-img {
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
	
	.add-update-preview >>> .el-upload-list .el-upload-list__item {
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
	
	.add-update-preview >>> .el-upload .el-icon-plus {
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
	
	.add-update-preview .el-textarea >>> .el-textarea__inner {
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

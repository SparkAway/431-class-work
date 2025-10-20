<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","width":"100%","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221231/7a3226bd0dfc41549fbee764c9f6552d.jpg) no-repeat center top / 100% 100%","justifyContent":"center","display":"flex"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"20px","boxShadow":"0px 0px 0px #9cd8da,inset 0px 0px 0px 0px #e0f8e8","margin":"0","borderColor":"#00adb5  #00adb5 #00adb5 #00adb5","borderRadius":"30px","background":"rgba(255,255,255,.0)","borderWidth":"0px","width":"800px","minWidth":"800px","borderStyle":"solid double solid double","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"0 0 4px 0","fontSize":"20px","color":"#3086b9","textAlign":"center","fontWeight":"500"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 auto 20px","borderColor":"#c4deee","color":"#3086b9","textAlign":"center","borderWidth":"4px 0px","width":"80%","fontSize":"22px","lineHeight":"44px","borderStyle":"dotted dashed","fontWeight":"500"}'>高校竞赛管理系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengxingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学生姓名：</div>
				<el-input v-model="registerForm.xueshengxingming"  placeholder="请输入学生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="youxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="shoujihaoma">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>手机号码：</div>
				<el-input v-model="registerForm.shoujihaoma"  placeholder="请输入手机号码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="nianji">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>年级：</div>
				<el-input v-model="registerForm.nianji"  placeholder="请输入年级" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanye">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="banji">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="suoshuxueyuan">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>所属学院：</div>
				<el-input v-model="registerForm.suoshuxueyuan"  placeholder="请输入所属学院" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="gonghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>工号：</div>
				<el-input v-model="registerForm.gonghao"  placeholder="请输入工号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="laoshixingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>老师姓名：</div>
				<el-input v-model="registerForm.laoshixingming"  placeholder="请输入老师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in laoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="youxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="lianxishouji">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系手机：</div>
				<el-input v-model="registerForm.lianxishouji"  placeholder="请输入联系手机" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="zhicheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>职称：</div>
                <el-select v-model="registerForm.zhicheng" placeholder="请选择职称" >
                  <el-option
                      v-for="(item,index) in laoshizhichengOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="suoshuxueyuan">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>所属学院：</div>
				<el-input v-model="registerForm.suoshuxueyuan"  placeholder="请输入所属学院" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='laoshi'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="laoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0px","boxShadow":"0px 0px 0px #9cdde0","margin":"12px 16px 10px 240px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"8px","background":"linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(197,230,250,1) 80%, rgba(48,134,185,1) 100%)","width":"128px","fontSize":"16px","height":"40px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0px solid #bbb","cursor":"pointer","padding":"0px","boxShadow":"1px 2px 3px #ccc","margin":"12px auto 5px","color":"#333","display":"inline-block","outline":"none","borderRadius":"8px","background":"linear-gradient(320deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 80%, rgba(204,204,204,1) 100%),#999","width":"128px","fontSize":"16px","height":"40px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"#333","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
                xingbie: '',
                zhicheng: '',
            },
			rules: {},
            xueshengxingbieOptions: [],
            laoshixingbieOptions: [],
            laoshizhichengOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('xuesheng' == this.tableName) {
        this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }];
      }
        this.xueshengxingbieOptions = "男,女".split(',');
      if ('xuesheng' == this.tableName) {
        this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.shoujihaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.suoshuxueyuan = [{ required: true, message: '请输入所属学院', trigger: 'blur' }];
      }
      if ('laoshi' == this.tableName) {
        this.rules.gonghao = [{ required: true, message: '请输入工号', trigger: 'blur' }];
      }
      if ('laoshi' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('laoshi' == this.tableName) {
        this.rules.laoshixingming = [{ required: true, message: '请输入老师姓名', trigger: 'blur' }];
      }
        this.laoshixingbieOptions = "男,女".split(',');
      if ('laoshi' == this.tableName) {
        this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
      if ('laoshi' == this.tableName) {
        this.rules.lianxishouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
        this.laoshizhichengOptions = "高级讲师,讲师,助教".split(',');
      if ('laoshi' == this.tableName) {
        this.rules.zhicheng = [{ required: true, message: '请输入职称', trigger: 'blur' }];
      }
      if ('laoshi' == this.tableName) {
        this.rules.suoshuxueyuan = [{ required: true, message: '请输入所属学院', trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      laoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
               if(`laoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20221231/7a3226bd0dfc41549fbee764c9f6552d.jpg) no-repeat center top / 100% 100%;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0px 0px 0px #a0d8db;
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #c4deee;
						border-width: 0 0 2px;
						border-style: dotted;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #eacb96;
						padding: 0 10px;
						color: #999;
						font-size: 14px;
						border-color: #c4deee;
						border-radius: 0px;
						box-shadow: 0px 0px 0px #a0d8db;
						outline: none;
						background: #fff;
						width: 100%;
						border-width: 0 0 2px;
						border-style: dotted;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0px 0px 0px #a0d8db;
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #c4deee;
						border-width: 0 0 2px;
						border-style: dotted;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0px 0px 0px #a0d8db;
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #c4deee;
						border-width: 0 0 2px;
						border-style: dotted;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px dotted #c4deee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #c4deee;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px dotted #c4deee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #c4deee;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px dotted #c4deee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #c4deee;
		  		  background: #Fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>

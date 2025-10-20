<template>
<div>
	<div :style='{"padding":"12px","boxShadow":"0 0px 0px #ccc","margin":"30px auto 0","borderColor":"#fff","borderRadius":"0px","background":"#3086b9","borderWidth":"0","width":"calc(100% - 40px)","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"width":"1200px","margin":"0 auto","fontSize":"14px","lineHeight":"1"}'>
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in breadcrumbItem" :key="index">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="detail-preview" :style='{"padding":"0 20px","margin":"0px auto","flexWrap":"wrap","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
		<div class="attr" :style='{"padding":"20px","margin":"20px 0 20px 0","borderColor":"#b2e2fe","display":"flex","justifyContent":"space-between","minHeight":"600px","overflow":"hidden","flexWrap":"wrap","background":"rgba(255,255,255,.3)","borderWidth":"6px","width":"100%","position":"relative","borderStyle":"dotted"}'>
			<el-carousel :style='{"width":"48%","margin":"0px 0px 0 0","float":"left","height":"400px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="400px" autoplay="true" interval="3000" loop="true">
				<el-carousel-item :style='{"borderRadius":"0","width":"100%","height":"100%"}' v-for="item in detailBanner" :key="item.id">
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="item.substr(0,4)=='http'" :src="item" fit="cover" class="image"></el-image>
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-else :src="baseUrl + item" fit="cover" class="image"></el-image>
				</el-carousel-item>
			</el-carousel>
	
			
			<div class="info" :style='{"minHeight":"500px","padding":"0px","margin":"0px auto 0 auto","background":"none","width":"48%","height":"auto","order":"2"}'>
				<div class="item" :style='{"padding":"6px 20px","boxShadow":"inset 0px 0px 0px 0px #93c8e7","margin":"0 0 16px 0","borderColor":"#b6e2fd","alignItems":"center","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"space-between"}'>
					<div :style='{"color":"#333","fontSize":"16px"}'>
                    {{detail.jingsaimingcheng}}
                    </div>
					<div @click="storeup(1)" v-show="!isStoreup" :style='{"cursor":"pointer","padding":"6px 10px","borderRadius":"20px","background":"#fff"}'><i v-if="true" :style='{"color":"#fe8a01","fontSize":"14px"}' class="el-icon-star-off"></i><span :style='{"color":"#fe8a01","fontSize":"14px"}'>点我收藏</span></div>
					<div @click="storeup(-1)" v-show="isStoreup" :style='{"cursor":"pointer","padding":"6px 10px","borderRadius":"20px","background":"#fff"}'><i v-if="true" :style='{"color":"#fe8a01","fontSize":"14px"}' class="el-icon-star-on"></i><span :style='{"color":"#fe8a01","fontSize":"14px"}'>取消收藏</span></div>
				</div>

				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>竞赛类别</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.jingsaileibie}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>赛事说明</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.saishishuoming}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>举办方</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.jubanfang}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>竞赛时间</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.jingsaishijian}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>报名人数</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.baomingrenshu}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>赛道说明</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.saidaoshuoming}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>竞赛地点</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.jingsaididian}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>赛事适合的专业</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.saishishihedezhuanye}}</div>
				</div>
				<div class="item" :style='{"padding":"0px 10px","boxShadow":"inset 0px 0px 0px 0px #ddd","margin":"0 0 10px 0","borderColor":"#9dcde9","borderRadius":"0px","background":"linear-gradient(320deg, rgba(204,204,204,.0) 0%, rgba(255,255,255,.9) 80%, rgba(204,204,204,.0) 100%)","borderWidth":"0 0 2px","display":"flex","borderStyle":"dotted","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#666","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"40px","minWidth":"130px"}'>参赛人员要求</div>
					<div  :style='{"width":"100%","padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","height":"auto"}'>{{detail.cansairenyuanyaoqiu}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 0","flexWrap":"wrap","background":"none","display":"flex"}'>
					<el-button :style='{"border":"0px solid #ffc800","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(137,185,213,1) 80%, rgba(48,134,185,1) 100%),rgb(48,134,185)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="isAuth('jingsaixiangmu','学生报名')" @click="onAcross('xueshengbaoming','','','')" type="warning">学生报名</el-button>
					<el-button :style='{"border":"0px solid #ffc800","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"4px","background":"linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(137,185,213,1) 80%, rgba(48,134,185,1) 100%),rgb(48,134,185)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="isAuth('jingsaixiangmu','老师报名')" @click="onAcross('laoshibaoming','','','')" type="warning">老师报名</el-button>
				</div>
			</div>
			
			<!-- 热门信息 -->
			<div class="hot" :style='{"width":"calc(100% - 0px)","clear":"both","margin":"40px auto","background":"none","height":"auto","order":"6"}'>
			  <div :style='{"padding":"0 20px","margin":"0 0 20px","color":"#fff","borderRadius":"0","background":"linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(197,230,250,1) 25%, rgba(48,134,185,1) 100%),#3086b9","width":"100%","lineHeight":"44px","fontSize":"16px"}'>热门信息</div>
			  <div :style='{"padding":"10px 10px 0","boxShadow":"0px 0px 0px #eee,inset 0px 0px 0px 0px #fbf5db","borderColor":"#b4ebc7","borderRadius":"0","flexWrap":"wrap","background":"none","borderWidth":"0 0px 0px 0px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}'>
			    <div v-for="item in hotList" :key="item" :style='{"cursor":"pointer","padding":"10px","margin":"0 0 10px","background":"#fff","width":"23%","position":"relative","height":"auto"}' @click="toDetail(item)">
			      <img :style='{"cursor":"pointer","padding":"10px","margin":"0 0 4px","borderColor":"#9dcde9","objectFit":"cover","borderRadius":"0px","borderWidth":"6px","display":"block","width":"100%","borderStyle":"dotted","height":"180px"}' :src="baseUrl + (item.jingsaifengmian?item.jingsaifengmian.split(',')[0]:'')" alt="">
			      <div :style='{"padding":"4px 5px 0","borderColor":"#9dcde9","color":"#333","background":"none","borderWidth":"0 0 1px","lineHeight":"24px","fontSize":"14px","borderStyle":"dotted"}'>{{item.jingsaimingcheng}}</div>
			      <div :style='{"padding":"4px 5px 0","borderColor":"#9dcde9","color":"#333","background":"none","borderWidth":"0 0 1px","lineHeight":"24px","fontSize":"14px","borderStyle":"dotted"}'>{{item.jingsaileibie}}</div>
			      <div :style='{"padding":"4px 5px 0","borderColor":"#9dcde9","color":"#333","background":"none","borderWidth":"0 0 1px","lineHeight":"24px","fontSize":"14px","borderStyle":"dotted"}'>{{item.saishishuoming}}</div>
			      <!-- <div :style='{"padding":"0 5px","lineHeight":"24px","fontSize":"14px","color":"#999","textAlign":"right"}'>2022-02-02</div> -->
			    </div>
			  </div>
			</div>
		</div>
		
		
		<el-tabs class="detail" :style='{"minHeight":"350px","boxShadow":"0px 0px 0px #ddd,inset 0px 0px 0px 0px #e0f8e8","padding":"10px","margin":"20px 0 0","borderColor":"#b2e2fe","borderRadius":"0px","background":"rgba(255,255,255,.3)","borderWidth":"6px","width":"100%","borderStyle":"dotted","float":"both"}' v-model="activeName" type="border-card">
			<el-tab-pane label="竞赛内容" name="first">
				<div v-html="detail.jingsaineirong"></div>
			</el-tab-pane>
		</el-tabs>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  export default {
    //数据集合
    data() {
      return {
        tablename: 'jingsaixiangmu',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '详情信息'
          }
        ],
        title: '',
        detailBanner: [],
        endTime: 0,
        hotList: [],
        detail: {},
        activeName: 'first',
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        },
        storeupParams: {
          name: '',
          picture: '',
          refid: 0,
          tablename: 'jingsaixiangmu',
          userid: localStorage.getItem('userid')
        },
        isStoreup: false,
        storeupInfo: {},
        buynumber: 1,
      }
    },
    created() {
        this.init();
    },
    //方法集合
    methods: {
        init() {
          this.baseUrl = this.$config.baseUrl;
          if(this.$route.query.detailObj) {
            this.detail = JSON.parse(this.$route.query.detailObj);
          }
          if(this.$route.query.storeupObj) {
            this.detail.id = JSON.parse(this.$route.query.storeupObj).refid;
          }
          this.$http.get(this.tablename + '/detail/'  + this.detail.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.title = this.detail.jingsaimingcheng;
              this.detailBanner = this.detail.jingsaifengmian ? this.detail.jingsaifengmian.split(",") : [];
              this.$forceUpdate();
            }
          });

          this.getStoreupStatus();
          this.getHotList();

        },
        toDetail(item) {
          this.$router.push({path: '/index/jingsaixiangmuDetail', query: {detailObj: JSON.stringify(item)}});
          this.init();
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        },
        getHotList() {
          let autoSortUrl = "";
          autoSortUrl = "jingsaixiangmu/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "jingsaixiangmu/autoSort2";
          }
            this.$http.get(autoSortUrl, {params: {
                page: 1,
                limit: 4,
            }}).then(res => {
                if (res.data.code == 0) {
                    this.hotList = res.data.data.list;        
                }
            })
        },
      onAcross(acrossTable,crossOptAudit,statusColumnName,tips,statusColumnValue){
        localStorage.setItem('crossTable',`jingsaixiangmu`);
        localStorage.setItem('crossObj', JSON.stringify(this.detail));
        localStorage.setItem('statusColumnName',statusColumnName);
        localStorage.setItem('statusColumnValue',statusColumnValue);
        localStorage.setItem('tips',tips);
        if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
            var obj = JSON.parse(localStorage.getItem('crossObj'));
            for (var o in obj){
                if(o==statusColumnName && obj[o]==statusColumnValue){
                    this.$message({
                        type: 'success',
                        message: tips,
                        duration: 1500
                    });
                    return
                }
            }
        }
        this.$router.push({path: '/index/' + acrossTable + 'Add', query: {type: 'cross'}});
      },
      storeup(type) {
        if (type == 1 && !this.isStoreup) {
          this.storeupParams.name = this.title;
          this.storeupParams.picture = this.detailBanner[0];
          this.storeupParams.inteltype = this.detail.jingsaileibie;
          this.storeupParams.refid = this.detail.id;
          this.storeupParams.type = type;
          this.$http.post('storeup/add', this.storeupParams).then(res => {
            if (res.data.code == 0) {
              this.isStoreup = true;
              this.$message({
                type: 'success',
                message: '收藏成功!',
                duration: 1500,
              });
            }
          });
        }
        if (type == -1 && this.isStoreup) {
          this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'jingsaixiangmu', userid: localStorage.getItem('userid')}}).then(res => {
            if (res.data.code == 0 && res.data.data.list.length > 0) {
              this.isStoreup = true;
              this.storeupInfo = res.data.data.list[0];
              let delIds = new Array();
              delIds.push(this.storeupInfo.id);
              this.$http.post('storeup/delete', delIds).then(res => {
                if (res.data.code == 0) {
                  this.isStoreup = false;
                  this.$message({
                    type: 'success',
                    message: '取消成功!',
                    duration: 1500,
                  });
                }
              });
            }
          });
        }
      },
      getStoreupStatus(){
        if(localStorage.getItem("Token")) {
            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'jingsaixiangmu', userid: localStorage.getItem('userid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isStoreup = true;
                this.storeupInfo = res.data.data.list[0];
              }
            });
        }
      },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
      // 下载
      download(file){
        if(!file) {
            this.$message({
              type: 'error',
              message: '文件不存在',
              duration: 1500,
            });
            return;
        }
        window.open(this.baseUrl+file)
      },


    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.detail-preview {
	
	  .attr {
	    .el-carousel >>> .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & >>> .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel >>> .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel >>> .el-carousel__container .el-carousel__arrow--left:hover {
		background: #3086b9;
	}
	
	.attr .el-carousel >>> .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel >>> .el-carousel__container .el-carousel__arrow--right:hover {
		background: #3086b9;
	}

	.attr .el-carousel >>> .el-carousel__indicators {
		padding: 0;
		margin: 0 0 10px 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel >>> .el-carousel__indicators li {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel >>> .el-carousel__indicators li:hover {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel >>> .el-carousel__indicators li.is-active {
		border-radius: 50%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number >>> .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #a6d4ef;
		border-radius: 0px;
		box-shadow: inset 0px 0px 24px 0px #dcedf8;
		top: 1px;
		left: 1px;
		background: none;
		width: 40px;
		justify-content: center;
		border-width: 0 4px;
		align-items: center;
		position: absolute;
		border-style: dotted;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number >>> .el-input-number__decrease i {
		color: #3086b9;
		font-size: 14px;
	}

	.attr .el-input-number >>> .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #a6d4ef;
		right: 1px;
		border-radius: 0 4px 4px 0;
		box-shadow: inset 0px 0px 24px 0px #dcedf8;
		top: 1px;
		background: none;
		width: 40px;
		justify-content: center;
		border-width: 0 4px;
		align-items: center;
		position: absolute;
		border-style: dotted;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number >>> .el-input-number__increase i {
		color: #3086b9;
		font-size: 14px;
	}
	
	.attr .el-input-number >>> .el-input .el-input__inner {
		padding: 0 40px;
		color: #666;
		display: inline-block;
		font-size: 14px;
		border-color: #a6d4ef;
		line-height: 40px;
		border-radius: 4px;
		outline: none;
		background: none;
		width: 100%;
		border-width: 4px 0px;
		border-style: dotted;
		text-align: center;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs >>> .el-tabs__header {
		border-radius: 0px;
		padding: 0 20px;
		margin: 0;
		background: linear-gradient(320deg, rgba(48,134,185,1) 0%, rgba(197,230,250,1) 25%, rgba(48,134,185,1) 100%),#3086b9;
		width: 100%;
		border-color: #e4e7ed;
		border-width: 0;
		border-style: solid;
		text-align: center;
	}
	
	.detail-preview .detail.el-tabs >>> .el-tabs__header .el-tabs__item {
		padding: 0 15px;
		margin: 6px 20px 0 0;
		color: #ddf2fe;
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		border-color: #83c1e6;
		line-height: 32px;
		border-radius: 0px;
		background: none;
		width: auto;
		border-width: 4px 4px 0;
		position: relative;
		border-style: dotted;
		list-style: none;
		text-align: center;
		height: 32px;
	}
	
	.detail-preview .detail.el-tabs >>> .el-tabs__header .el-tabs__item:hover {
		border-radius: 0px;
		padding: 0 15px;
		margin: 6px 10px 0 0;
		color: #ecf7fd;
		background: none;
		width: auto;
		border-color: #ddf2fe;
		line-height: 32px;
	}
	
	.detail-preview .detail.el-tabs >>> .el-tabs__header .el-tabs__item.is-active {
		border: 0;
		padding: 0 15px;
		margin: 6px 20px 0 0;
		color: #ecf7fd;
		border-color: #ddf2fe;
		line-height: 32px;
		border-radius: 0px;
		background: none;
		width: auto;
		border-width: 4px 4px 0;
		border-style: dotted;
		text-align: center;
		height: 32px;
	}
	
	.detail-preview .detail.el-tabs >>> .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add >>> .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add >>> .el-textarea__inner {
		padding: 4px 12px;
		color: #333;
		font-size: 14px;
		border-color: #9dcde9;
		min-height: 150px;
		line-height: 32px;
		border-radius: 4px;
		box-shadow: 0 0 0px rgba(64, 158, 255, .5);
		outline: none;
		background: none;
		width: 1058px;
		border-width: 2px;
		border-style: dotted;
	}
	
	.breadcrumb-preview .el-breadcrumb >>> .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb >>> .el-breadcrumb__inner a {
		color: #fff;
		display: inline-block;
	}

	.breadcrumb-preview .el-breadcrumb >>> .el-breadcrumb__inner {
		color: #fff;
		display: inline-block;
	}
	
	.el-pagination >>> .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination >>> .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination >>> .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	.el-pagination >>> .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination >>> .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination >>> .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	.el-pagination >>> .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination >>> .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #3086b9;
		text-align: center;
		min-width: 30px;
		height: 28px;
}

.el-pagination >>> .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #3086b9;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination >>> .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination >>> .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	.el-pagination >>> .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination >>> .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	.el-pagination >>> .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	.el-pagination >>> .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination >>> .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	.el-pagination >>> .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
</style>

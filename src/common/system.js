export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"老师","menuJump":"列表","tableName":"laoshi"}],"menu":"老师管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"竞赛类别","menuJump":"列表","tableName":"jingsaileibie"}],"menu":"竞赛类别管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改","新增","删除","竞赛类别统计","报名人数统计","首页总数","首页统计"],"menu":"竞赛项目","menuJump":"列表","tableName":"jingsaixiangmu"}],"menu":"竞赛项目管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","删除","修改","审核","学院报名人数统计","首页总数","首页统计"],"menu":"学生报名","menuJump":"列表","tableName":"xueshengbaoming"}],"menu":"学生报名管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","审核"],"menu":"老师报名","menuJump":"列表","tableName":"laoshibaoming"}],"menu":"老师报名管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["删除","查看"],"menu":"学生打卡","menuJump":"列表","tableName":"xueshengdaka"}],"menu":"学生打卡管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["删除","查看"],"menu":"老师打卡","menuJump":"列表","tableName":"laoshidaka"}],"menu":"老师打卡管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"学生成果","menuJump":"列表","tableName":"xueshengchengguo"}],"menu":"学生成果管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["删除","查看"],"menu":"老师成果","menuJump":"列表","tableName":"laoshichengguo"}],"menu":"老师成果管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-link","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-list","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","学生报名","老师报名"],"menu":"竞赛项目列表","menuJump":"列表","tableName":"jingsaixiangmu"}],"menu":"竞赛项目模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除","学生打卡","学生成果"],"menu":"学生报名","menuJump":"列表","tableName":"xueshengbaoming"}],"menu":"学生报名管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"学生打卡","menuJump":"列表","tableName":"xueshengdaka"}],"menu":"学生打卡管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["删除","修改","查看"],"menu":"学生成果","menuJump":"列表","tableName":"xueshengchengguo"}],"menu":"学生成果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","学生报名","老师报名"],"menu":"竞赛项目列表","menuJump":"列表","tableName":"jingsaixiangmu"}],"menu":"竞赛项目模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","老师打卡","老师成果"],"menu":"老师报名","menuJump":"列表","tableName":"laoshibaoming"}],"menu":"老师报名管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除"],"menu":"老师打卡","menuJump":"列表","tableName":"laoshidaka"}],"menu":"老师打卡管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["删除","修改","查看"],"menu":"老师成果","menuJump":"列表","tableName":"laoshichengguo"}],"menu":"老师成果管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","学生报名","老师报名"],"menu":"竞赛项目列表","menuJump":"列表","tableName":"jingsaixiangmu"}],"menu":"竞赛项目模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"老师","tableName":"laoshi"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}

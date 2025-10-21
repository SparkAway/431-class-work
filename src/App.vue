<template>
  <div id="app">
    <router-view></router-view>
    <div class="chat-toggle-btn" @click="toggleChat">
      💬
    </div>
    <ChatWindow v-if="showChat" @close="showChat = false" />
  </div>
  
</template>

<script>
import ChatWindow from './components/ChatWindow.vue'
export default {
  name: 'App',
  components: { ChatWindow },
  data() {
    return {
      showChat: false
    }
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat
    }
  }
}
</script>

<style>
  * {
	  box-sizing: border-box;
  }
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  [v-cloak]{
    display:none
  }
  .open-chat-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    background: #409eff;
    color: white;
    cursor: pointer;
  }
  /* 浮动按钮 */
  .chat-toggle-btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 1000;
  }

  .chat-toggle-btn:hover {
    background-color: #0056b3;
  }
  .el-tabs__item {
    font-size: 18px;
  }
  .el-loading-spinner .el-loading-text {
    color: #4169E1;
  }
  .el-loading-spinner .path {
    stroke: #4169E1;
  }
  .el-breadcrumb {
    line-height: 60px;
    font-size: 18px;
  }

  .ql-editor {
    /*height: 500px;*/
  }
  .ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:";
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存";
    padding-right: 0px;
  }
  .ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体";
  }
</style>

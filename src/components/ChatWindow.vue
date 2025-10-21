<template>
  <div
    class="chat-container"
    :style="{ top: top + 'px', left: left + 'px' }"
    @mousedown.stop
  >
    <!-- 头部拖拽 -->
    <div class="chat-header" @mousedown="startDrag">
      AI 聊天
      <span class="close-btn" @click="closeChat">×</span>
    </div>

    <!-- 消息区 -->
    <div class="chat-box">
      <div
        class="chat-message"
        v-for="(msg, index) in messages"
        :key="index"
        :class="{ user: msg.sender === 'user', bot: msg.sender === 'bot' }"
      >
        <div class="msg">{{ msg.text }}</div>
      </div>
    </div>

    <!-- 输入区 -->
    <div class="chat-input">
      <input
        type="text"
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="输入消息..."
      />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "ChatWindow",
  data() {
    return {
      userInput: "",
      messages: [
        { sender: "bot", text: "你好！我是AI助手，有什么可以帮你？" }
      ],
      top: window.innerHeight - 450 - 80,   // 高度 450px + 底部间距 80px
      left: window.innerWidth - 350 - 20,   // 宽度 350px + 右侧间距 20px
      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      containerStartX: 0,
      containerStartY: 0,
      apiParams: {
        "user_id": 1,
        "bot_id": "1",
        "custom_prompt": "你是哈尔滨理工大学竞赛信息查询助手，需要根据用户输入回答相关问题。",
        "history": 5,  
        "streaming": true,
        "networking": false,
        "product_source": "string",
        "rerank": false,
        "only_need_search_results": false,
        "hybrid_search": false,
        "max_tokens": 8192,
        "api_base": "string",
        "api_key": "string",
        "model": "qwen3-30b-a3b-instruct-2507",
        "api_context_length": 0,
        "chunk_size": 128,
        "top_p": 0.9,
        "frequency_penalty": 0.0,
        "temperature": 0.5,
        "fetch_k": 10,
        "get_k": 5,
        "lambda_mult": 0.5
      }
    };
  },
  methods: {

    // async sendMessage() {
    //   const text = this.userInput.trim();
    //   if (!text) return;

    //   // 添加用户消息
    //   this.messages.push({ sender: "user", text });
    //   this.userInput = "";
    //   this.scrollToBottom();

    //   // 添加一个空的 bot 消息，用来拼接流式返回
    //   this.messages.push({ sender: "bot", text: "" });
    //   const botIndex = this.messages.length - 1;

    //   const postData = { ...this.apiParams, question: text };

    //   try {
    //     const res = await fetch(`/rag_chat/chat`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${this.apiParams.api_key}`
    //       },
    //       body: JSON.stringify(postData)
    //     });

    //     if (!res.body) throw new Error("流式接口返回无 body");

    //     const reader = res.body.getReader();
    //     const decoder = new TextDecoder("utf-8");
    //     let done = false;

    //     while (!done) {
    //       const { value, done: readerDone } = await reader.read();
    //       done = readerDone;
    //       if (value) {
    //         // 解析每段流式数据
    //         const chunk = decoder.decode(value, { stream: true });
    //         // 这里假设每次 chunk 是 JSON 片段或 answer 字段
    //         try {
    //           const json = JSON.parse(chunk);
    //           if (json?.data?.response?.answer) {
    //             this.messages[botIndex].text += json.data.response.answer;
    //             this.scrollToBottom();
    //           }
    //         } catch (e) {
    //           // 如果不是完整 JSON，直接拼接
    //           this.messages[botIndex].text += chunk;
    //           this.scrollToBottom();
    //         }
    //       }
    //     }
        
    //   } catch (err) {
    //     console.error(err);
    //     this.messages[botIndex].text = "接口调用失败，请稍后重试。";
    //     this.scrollToBottom();
    //   }
    // },
    async sendMessage() {
  const text = this.userInput.trim();
  if (!text) return;

  // 用户消息
  this.messages.push({ sender: "user", text });
  this.userInput = "";
  this.scrollToBottom();

  // Bot 消息占位
  this.messages.push({ sender: "bot", text: "" });
  const botIndex = this.messages.length - 1;

  const postData = { ...this.apiParams, question: text };

  try {
    const res = await fetch(`/rag_chat/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiParams.api_key}`
      },
      body: JSON.stringify(postData)
    });

    if (!res.body) throw new Error("流式接口返回无 body");

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    let buffer = ""; // 临时缓冲，处理 JSON 断开情况

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (!value) continue;

      buffer += decoder.decode(value, { stream: true });

      // 尝试按换行符切分，很多流接口每行是一个 JSON
      const lines = buffer.split(/\r?\n/);
      // 保留最后一行（可能是未完整 JSON）留到下一次
      buffer = lines.pop();

      for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        try {
          const json = JSON.parse(line);

          // 解析 chat_history
          if (json.chat_history) {
            json.chat_history.forEach(item => {
              this.messages[botIndex].text += item.content;
            });
          }

          // 解析 context
          if (json.context) {
            json.context.forEach(doc => {
              this.messages[botIndex].text += `\n[文档] ${doc.metadata.file_name}:\n${doc.page_content}`;
            });
          }

          // 解析 answer
          if (json.answer) {
            this.messages[botIndex].text += json.answer;
          }

        } catch (e) {
          // 如果不是完整 JSON，直接拼接
          this.messages[botIndex].text += line;
        }

        this.scrollToBottom();
      }
    }

    // 处理最后残留的 buffer
    if (buffer) {
      try {
        const json = JSON.parse(buffer);
        if (json.chat_history) json.chat_history.forEach(item => this.messages[botIndex].text += item.content);
        if (json.context) json.context.forEach(doc => this.messages[botIndex].text += `\n[文档] ${doc.metadata.file_name}:\n${doc.page_content}`);
        if (json.answer) this.messages[botIndex].text += json.answer;
      } catch (e) {
        this.messages[botIndex].text += buffer;
      }
      this.scrollToBottom();
    }

  } catch (err) {
    console.error(err);
    this.messages[botIndex].text = "接口调用失败，请稍后重试。";
    this.scrollToBottom();
  }
},
    scrollToBottom() {
      this.$nextTick(() => {
        const box = this.$el.querySelector(".chat-box");
        box.scrollTop = box.scrollHeight;
      });
    },
    closeChat() {
      this.$el.style.display = "none";
    },
    startDrag(e) {
      this.dragging = true;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.containerStartX = this.left;
      this.containerStartY = this.top;

      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(e) {
      if (!this.dragging) return;
      const dx = e.clientX - this.dragStartX;
      const dy = e.clientY - this.dragStartY;
      this.left = this.containerStartX + dx;
      this.top = this.containerStartY + dy;
    },
    stopDrag() {
      this.dragging = false;
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    }
  }
};
</script>

<style scoped>
.chat-container {
  position: fixed;
  width: 350px;
  height: 450px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  z-index: 999;
  cursor: default;
}

/* 头部拖拽 */
.chat-header {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: move;
}

.close-btn {
  cursor: pointer;
  font-size: 18px;
}

/* 消息区 */
.chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

/* 消息样式 */
.chat-message {
  display: flex;
  margin-bottom: 8px;
}

.chat-message.user {
  justify-content: flex-end;
}

.chat-message.bot {
  justify-content: flex-start;
}

.msg {
  max-width: 70%;
  padding: 6px 10px;
  border-radius: 10px;
  background: #d0eaff;
}

.user .msg {
  background: #a4dcff;
}

/* 输入区 */
.chat-input {
  display: flex;
  border-top: 1px solid #ddd;
  padding: 8px;
}

.chat-input input {
  flex: 1;
  border: none;
  padding: 6px 8px;
  border-radius: 4px;
  outline: none;
}

.chat-input button {
  margin-left: 6px;
  padding: 6px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}
</style>

<template>
  <div class="page-wrapper">
    <div class="look">
      <div class="look-lft">
        <i class="el-icon-view"></i>
        <span>{{ counts }}</span>
      </div>
      <div class="look-rgt">
        <img src="../../../assets/img/wx.png" alt="" />
        <img src="../../../assets/img/qq.png" alt="" />
      </div>
    </div>
    <div class="pageup">
      <div class="pageup-item">
        <div class="item-img">
          <img src="../../../assets/img/jjy1.jpg" alt="" />
        </div>
        <div class="item-content">
          <div class="content-title">< 上一篇</div>
          <div class="content-info">
            你一定要了解的分析法则，教你如何分析工作中的需求
          </div>
        </div>
      </div>
      <div class="pageup-item">
        <div class="item-img">
          <img src="../../../assets/img/jjy2.jpg" alt="" />
        </div>
        <div class="item-content">
          <div class="content-title">< 下一篇</div>
          <div class="content-info">
            登录页需要注意的设计细节和逻辑，我都帮你总结好了！
          </div>
        </div>
      </div>
    </div>
    <div class="read">
      <div class="read-title">相关阅读</div>
      <div class="read-content">
        <div class="read-item" v-for="(item, i) in readList" :key="i">
          <div class="item-img">
            <!-- <img :src="item.url" alt="" /> -->
            <img src="../../../assets/img/jjy1.jpg" alt="" />
          </div>
          <div class="item-content">
            <div class="content-title">{{ item.title }}</div>
            <div class="content-info">{{ item.info }}</div>
            <div class="content-user">
              <!-- <img :src="item.userUrl" alt="" /> -->
              <div class="img">
                <img src="../../../assets/img/jjy2.jpg" alt="" />
              </div>
              <span>{{ item.username }}</span>
              <span>{{ item.createTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "artical",
  data() {
    return {
      id: "",
      counts: 298,
      readList: [
        {
          url: "../../../assets/img/jjy1.jpg",
          title: "你一定要了解的分析法则，教你如何分析工作中的需求",
          info: "你是否还在为反复改稿而苦恼，你是否还在为产品吐槽你的设计达不到目标而感到困惑，是不是被无数个需求同时开启压完了腰，不用担心，今天就来教你大厂都在用…",
          userUrl: "../../../assets/img/jjy2.jpg",
          username: "秋雨",
          createTime: "2020/05/06 17:24",
        },
        {
          url: "../../../assets/img/jjy1.jpg",
          title: "前端开发宝典",
          info: "多少个不眠之夜换来的呕心沥血之作！助你成为大前端！",
          userUrl: "../../../assets/img/jjy2.jpg",
          username: "kaku",
          createTime: "2020/05/06 17:24",
        },
        {
          url: "../../../assets/img/jjy1.jpg",
          title: "登录页需要注意的设计细节和逻辑，我都帮你总结好了！",
          info: "登录流程通常由主登录流程和恢复流程组成，其中主登录流程包括填写用户名、手机号、密码等，恢复流程包括忘记密码、重置密码、其他登录方式等。",
          userUrl: "../../../assets/img/jjy2.jpg",
          username: "NeilLeeeee",
          createTime: "2020/05/06 17:24",
        },
      ],
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  methods: {},
};
</script>

<style scoped lang="less">
.page-wrapper {
  width: 70%;
  margin: 0 auto;
  .look {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    .look-lft {
      display: flex;
      i {
        font-size: 22px;
        margin-right: 10px;
      }
    }
    .look-rgt {
      img {
        width: 30px;
        margin-left: 10px;
      }
    }
  }
  .pageup {
    display: flex;
    justify-content: space-between;
    .pageup-item {
      display: flex;
      padding: 30px;
      box-sizing: border-box;
      background-color: #eee;
      .item-img {
        img {
          width: 200px;
          border-radius: 8px;
        }
      }
      .item-content {
        text-align: left;
        margin-left: 15px;
        .content-title {
          font-size: 18px;
          color: #222;
          margin-bottom: 10px;
        }
        .content-info {
          font-size: 14px;
          color: #666;
        }
      }
    }
    .pageup-item:first-child {
      border-right: 1px solid #ccc;
    }
  }
  .read {
    .read-title {
      text-align: left;
      margin-top: 80px;
      font-size: 28px;
      color: #222222;
    }
    .read-content {
      .read-item {
        display: flex;
        margin: 25px 0;
        box-sizing: border-box;
        .item-img {
          img {
            width: 200px;
            border-radius: 8px;
          }
        }
        .item-content {
          text-align: left;
          margin-left: 15px;
          .content-title {
            font-size: 18px;
            color: #222;
            margin-bottom: 10px;
          }
          .content-info {
            font-size: 14px;
            color: #666;
          }
          .content-user {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              overflow: hidden;
              img {
                height: 30px;
              }
            }
            span{
              margin-left: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
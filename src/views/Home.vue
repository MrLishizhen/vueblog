<template>
  <div class="home">
    <div class='header'>
      <div class="content nav-box">
        <router-link to="/" class="logo">logo</router-link>
        <ul class="nav">
          <li v-for="(item,i) in nav" :class="{'hot':item.hot}" @click="navClick(i)" :key="i.toString()">{{item.nav_title}}</li>
        </ul>
      </div>
    </div>
    <div class="home_box">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="footer-top">
        <img src="../assets/home/emial.png" alt="邮箱">
        <p class="email">llhorizon@163.com</p>
        <p>如有问题请向我们发送电子邮箱，感谢~</p>
      </div>
      <div class="user-title">
        <div class="content footer-title">
         <span>Developed by 秋雨 & Designed by Neil</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {nav,banner} from '../api/home'
export default {
  name: "Home",
  data(){
    return {
      nav:[],

    }
  },
  created() {
    //请求顶部导航栏
    nav().then(res=>{
      if(res.status==200){
        let data = res.data;
        data.forEach((item,i)=>{
          if(i==0){
            item.hot=true;
          }else{
            item.hot=false;
          }
        })
        this.nav=data;
      }
    });

  },
  components: {},
  methods:{
    //点击切换路由
    navClick(i){
      this.nav.forEach((item,i)=>{
        item.hot=false;
      })
      this.nav[i].hot=true;
      this.$router.push("/Index"+this.nav[i].icon);
    }
  }
};
</script>
<style lang="less" scoped>
.home{
  background: #FFFFFF;

  .header{
    width:100%;
    height:80px;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px #E6E6EC;
    .nav-box{
      display:flex;
      align-items: center;
      justify-content: space-between;
      .logo{
        /*width:60px;*/
        /*height:30px;*/
        width:54px;
        height:54px;
        text-indent:-66666px;
        background:url(../assets/home/logo-1.png) no-repeat center center/100%;
      }
      .nav{
        height:100%;
        display:flex;
        li{
          padding:0 15px;
          cursor: pointer;
          height:100%;
          line-height:80px;
          position: relative;
          &.hot::before{
            content:"";
            position:absolute;
            top:50%;
            left:1px;
            transform: translateY(-50%);
            width:12px;
            height:12px;
            border-radius: 50%;
            box-sizing: border-box;
            border:3px solid #4665DA;
          }
        }
      }
    }
  }
  .banner{
    padding:30px 0;
    height:180px;
    .banner-img{
      height:100%;
      //background: url(../assets/home/banner.png) no-repeat center center/100%;
      .bannerUrl{
        width:100%;
        height:100%;
      }
    }
  }
  .list{
    .list-box{
      display:flex;
      .list-left{
        width:890px;
        padding-right:30px;
        flex-shrink: 0;
        .left-item{
          /*height:170px;*/
          margin-bottom: 20px;
          cursor: pointer;
          border:1px solid transparent;
          box-sizing: border-box;
          padding:14px;
          display:flex;
          text-align:left;
          transition: all 0.8s;
          &:hover{
            /*border-color:#e0e0e0;*/
            box-shadow: 0px 0px 10px #E6E6EC;
            border-radius: 5px;
          }
          .list-img{
            width:216px;
            height:142px;
            border-radius: 3px;
            background-color: #333333;
            flex-shrink: 0;
          }
          .list-item-box{
            flex-grow: 1;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 17px;
            color: #999999;
            padding:0 14px;
            .active-title{
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: 500;
              line-height: 25px;
              color: #333333;

            }
            .active-ftitle{
              padding-top:10px;
              height:78px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              line-height: 20px;
              color: #666666;
            }
            .active-bom{
              padding-top:10px;
              display:flex;
              justify-content: space-between;
              .active-date{

              }
              .active-name{

              }
            }

          }
        }
      }
      .list-right{
        flex-grow: 1;
        padding-left:20px;
        border-left: 1px solid #EAEAEA;
        .list-right-header{
          height:25px;
          font-size:18px;
          font-weight: bold;
          line-height: 25px;
          color: #333333;
          text-align:left;
          padding-bottom:10px;
        }
        .recommend-box{
          .recommend{
            width:244px;
            cursor: pointer;
            margin-bottom: 10px;
            /*height:140px;*/
            /*background-color: #ccc;*/
            .recommend-item{
              height:140px;
              background-color: #999999;
              border-radius: 5px;
            }
            .active-title{
              height:20px;
              font-weight: 500;
              line-height: 20px;
              color: #333333;
              font-size: 14px;
              text-align:left;
              padding-top:10px;
            }
            .recommend-bom{
              display:flex;
              padding-top:10px;
              justify-content: space-between;
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
              color: #999999;
              .recommend-date{

              }
              .recommend-name{

              }
            }
          }
        }
      }
    }
  }
  .footer{
    height: 317px;
    background:#f8f8f8;
    /*margin-top:43px;*/
    display:flex;
    flex-direction: column;

    .footer-top{
      flex-grow: 1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #EEEEEE;
      box-sizing: border-box;
      img{
        width:83px;
        /*height:84px;*/
      }
      .email{
        color: #000000;
        padding:18px 0 10px 0;
      }
      p{
        color: #999999;
        font-size: 14px;
        font-weight: normal;
      }
    }
    .user-title{
      flex-shrink: 0;
      height:66px;
      line-height:66px;
      color:#fff;
      .footer-title{
        font-family: Open Sans;
        font-size: 14px;
        font-weight: normal;
        /*text-align: right;*/
        color: #B6B6B6;
      }
    }
  }
}
</style>



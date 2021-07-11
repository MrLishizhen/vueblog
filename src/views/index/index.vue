<template>
    <div>
        <!--    banner-->
<!--        <div class="banner">-->
<!--            <div class="content">-->
<!--                <div class="banner-img">-->
<!--                    <img class="banner-imgs" :src="bannerUrl" alt="">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="user-box">
            <div class="user-top content">
                <div class="user-item width604" style="background-color:#fff">
                    <div class="user-jj">
                        <span class="jj-img"></span>
                        <p class="introduction">
                            我遁着岁月的足迹，走过散落一地的旖旎，寻找流年深处的一季花雨。
                        </p>
                        <span class="name">
                            晓晗
                        </span>
                    </div>
                    <div class="user-img"></div>
                </div>
                <div class="user-item item-right">
                    <div class="user-jj">
                        <span class="jj-img"></span>
                        <p class="introduction">
                            梦想不足以让你到达远方，但是到达远方的人一定要有梦想。
                        </p>
                        <span class="name">
                            秋雨
                        </span>
                    </div>
                    <div class="user-img"></div>
                </div>
            </div>
            <div class="user-bom content">
                <div class="user-item width604" style="padding:0">
                    <div class="width404">
                        <div class="riliimg"></div>
                        <div class="rili">
                            <span class="date-span" v-text="date">2021/6/7</span>
                            <span class="date-nl">辛丑年 四月十五</span>
                        </div>
                    </div>
                    <div class="width184" style="margin-left:16px;"></div>
                </div>
                <div class="user-item item-right">
                    <div class="user-jj">
                        <span class="jj-img"></span>
                        <p class="introduction">
                            不要在你家里放一件你不知其用，或你认为不美的东西。
                        </p>
                        <span class="name">
                            NeilLeeeee
                        </span>
                    </div>
                    <div class="user-img"></div>
                </div>
            </div>
        </div>

        <div class="list">
            <ul class="nav content">
                <li class="hot">前端</li>
                <li class="">前端</li>
            </ul>
            <div class='content list-box'>
                <div class="list-left">
                    <div class="left-item" v-for="(item,i) in banner" :key="i.toString()">
                        <div class="list-img" v-if="item.url!=''"></div>
                        <div class="list-item-box">
                            <p class="active-title">赛博朋克2077：散装赛博，没有朋克</p>
                            <p class="active-ftitle">“赛博朋克”成了广告，成了视觉元素，成了网络热梗，成了一切它原本最不想成为的东西。</p>
                            <div class="active-bom">
                                <span class="active-date">2020/12/31</span>
                                <span class="active-name">by 秋雨</span>
                            </div>
                        </div>
                    </div>
                    <div class="seemore">
                        <router-link class="seemore-btn" to="/">查看更多</router-link>
                    </div>
                </div>
                <div class="list-right">
                    <div class="list-right-header">推荐内容</div>
                    <ul class="recommend-box">
                        <li class="recommend" v-for="item in 5" :key='item'>
                            <div class="recommend-item">
                            </div>
                            <p class="active-title">赛博朋克2077：散装赛博，没有朋克</p>
                            <p class="recommend-bom">
                                <span class="recommend-date">2020/12/31</span>
                                <span class="recommend-name">by 秋雨</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {banner} from "../../api/home";

    export default {
        name: "index",
        data() {
            return {
                bannerUrl: "",
                date:'',
                banner: [
                    {
                        url: '1'
                    },
                    {
                        url: ''
                    }, {
                        url: '1'
                    },
                    {
                        url: ''
                    },
                    {
                        url: '1'
                    },
                    {
                        url: '1'
                    },
                    {
                        url: '1'
                    },
                ]
            }
        },
        created() {
            // banner().then(res => {
            //     if (res.status == 200) {
            //         let data = res.data;
            //         // this.bannerUrl = data[0].bannerUrl;
            //     }
            // })
            this.getDate();
        },
        methods:{
            //只在进入组件时
            getDate(){
                let date = new Date();
                let year = date.getFullYear();
                let mm  = date.getMonth();
                let dd = date.getUTCDate();
                mm<10?mm='0'+(mm+1):mm+1;
                dd<10?dd='0'+dd:dd;
                this.date = year+'/'+mm+'/'+dd;
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner {
        padding: 30px 0;
        height: 180px;

        .banner-img {
            height: 100%;
            //background: url(../assets/home/banner.png) no-repeat center center/100%;
            .bannerUrl {
                width: 100%;
                height: 100%;
            }
        }
    }
    .user-box{
        padding:40px 0;
        background-color: #f8f8f8;
        .user-top{
            margin-bottom: 16px;
        }
        &>div{
            height:204px;
            display:flex;
            .user-item{
                padding:40px;
                box-sizing: border-box;
                background-color: #f8f8f8;
                width:50%;
                height:100%;
                margin-right:16px;
                border-radius: 12px;
                display:flex;
                &>div{
                    border-radius: 12px;
                }
                &:nth-child(2){
                    margin-right:0;
                }
                &.item-right{
                    background-color: #fff;
                }
                /*&.width604{*/
                /*    flex-shrink: 0;*/
                /*    width:604px;*/
                /*}*/
                .user-jj{
                    flex-grow: 1;
                    display:flex;
                    flex-direction: column;
                    margin-right:30px;
                    .jj-img{
                        width:30px;
                        height:26px;
                        background: url(../../assets/home/icon-dh.png);
                    }
                    .introduction{
                        padding-top:10px;
                        box-sizing: border-box;
                        font-size: 16px;
                        font-weight: normal;
                        font-height: 24px;
                        text-align: justify; /* 浏览器可能不支持 */
                        color: #666666;
                        height: 48px;
                        /*line-height:48px;*/
                    }
                    .name{
                        font-size: 22px;
                        font-weight: 600;
                        font-height: 30px;
                        color: #222222;
                        height:30px;
                        text-align:left;
                        padding-top:10px;
                    }
                }
                .user-img{
                    flex-shrink: 0;
                    width:120px;
                    height:120px;
                    border-radius: 50%;
                    background-color: #42b983;
                }
                .width404{
                    flex-shrink: 0;
                    width:404px;
                    background-color: #fff;
                    display:flex;
                    padding:40px;
                    box-sizing: border-box;
                    align-items: center;
                    .riliimg{
                        width:80px;
                        height:75px;
                        flex-shrink: 0;
                        background:url(../../assets/home/rili.png) no-repeat center center/100%;
                    }
                    .rili{
                        flex-grow: 1;
                        display:flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        height:100%;
                        .date-span{
                            font-size: 40px;
                            font-weight: bold;
                            color: #222222;
                            height:56px;
                            line-height:56px;

                        }
                        .date-nl{
                            height:24px;
                            line-height:24px;
                        }
                    }
                }
                .width184{
                    flex-grow: 1;
                    /*width:184px;*/
                    background-color: #fff;

                }
            }
        }
    }
    .list {
        .nav{
            line-height: 40px;
            height:40px;
            display:flex;
            padding:40px 0;
            li{
                font-size: 28px;
                color: #B6B6B6;
                font-weight: 500;
                padding:0 24px;
                cursor: pointer;
                height:100%;
                /*line-height:60px;*/
                position: relative;
                &.hot{
                    color: #222222;
                }
                &.hot::before{
                    content:"";
                    position:absolute;
                    top:50%;
                    left:1px;
                    transform: translateY(-50%);
                    width:16px;
                    height:16px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    border:3px solid #4665DA;
                }
            }
        }
        .list-box {
            display: flex;

            .list-left {
                width: 890px;
                padding-right: 30px;
                flex-shrink: 0;
                .seemore{
                    height:152px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    .seemore-btn{
                        width: 150px;
                        height:32px;
                        line-height:32px;
                        border-radius: 3px;
                        background: #222222;
                        text-align: center;
                        font-size: 12px;
                        color:#fff;
                        text-decoration: none;
                    }
                }
                .left-item {
                    /*height:170px;*/
                    margin-bottom: 20px;
                    cursor: pointer;
                    border: 1px solid transparent;
                    box-sizing: border-box;
                    padding: 14px;
                    display: flex;
                    text-align: left;
                    transition: all 0.8s;

                    &:hover {
                        /*border-color:#e0e0e0;*/
                        box-shadow: 0px 0px 10px #E6E6EC;
                        border-radius: 5px;
                    }

                    .list-img {
                        width: 216px;
                        height: 142px;
                        border-radius: 3px;
                        background-color: #333333;
                        flex-shrink: 0;
                    }

                    .list-item-box {
                        flex-grow: 1;
                        font-size: 12px;
                        font-family: PingFang SC;
                        font-weight: 400;
                        line-height: 17px;
                        color: #999999;
                        padding: 0 14px;

                        .active-title {
                            font-size: 18px;
                            font-family: PingFang SC;
                            font-weight: 500;
                            line-height: 25px;
                            color: #333333;

                        }

                        .active-ftitle {
                            padding-top: 10px;
                            height: 78px;
                            font-size: 14px;
                            font-family: PingFang SC;
                            font-weight: 400;
                            line-height: 20px;
                            color: #666666;
                        }

                        .active-bom {
                            padding-top: 10px;
                            display: flex;
                            justify-content: space-between;

                            .active-date {

                            }

                            .active-name {

                            }
                        }

                    }
                }
            }

            .list-right {
                flex-grow: 1;
                padding-left: 20px;
                border-left: 1px solid #EAEAEA;

                .list-right-header {
                    height: 25px;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 25px;
                    color: #333333;
                    text-align: left;
                    padding-bottom: 10px;
                }

                .recommend-box {
                    .recommend {
                        width: 244px;
                        cursor: pointer;
                        margin-bottom: 10px;
                        /*height:140px;*/
                        /*background-color: #ccc;*/

                        .recommend-item {
                            height: 140px;
                            background-color: #999999;
                            border-radius: 5px;
                        }

                        .active-title {
                            height: 20px;
                            font-weight: 500;
                            line-height: 20px;
                            color: #333333;
                            font-size: 14px;
                            text-align: left;
                            padding-top: 10px;
                        }

                        .recommend-bom {
                            display: flex;
                            padding-top: 10px;
                            justify-content: space-between;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 17px;
                            color: #999999;

                            .recommend-date {

                            }

                            .recommend-name {

                            }
                        }
                    }
                }
            }
        }
    }
</style>
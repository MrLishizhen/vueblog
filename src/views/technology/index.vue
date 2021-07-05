<template>
    <div class="technology-box">
        <div class="content">
            <div class="left-nav">
                <ul>
                    <li v-for="item in nav" :key="item.name" :class="{'hot':item.hot}" v-text="item.name" @click="navClick(item)"></li>
                </ul>
            </div>
            <div class="right-cont">
                <h3 class="right-h" v-text="navTitle">

                </h3>
                <div class="right-cont-box">
                    <div class="right-item-box">
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom">
                                <p class="item-title">你一定要了解的分析法则，教你如何分析工作中的需求</p>
                                <div class="user-box">
                                    <span class="user-img"  style="">秋雨</span>
                                    <span class="user-date">2021-06-30</span>
                                </div>
                            </div>
                        </div>
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom"></div>
                        </div>
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom"></div>
                        </div>
                    </div>
                    <div class="right-item-box">
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom"></div>
                        </div>
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom"></div>
                        </div>
                        <div class="right-item">
                            <div class="right-item-top"></div>
                            <div class="right-item-bom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "technology",
        data(){
            return{
                nav:[
                    {
                        name:'全部',
                        hot:true
                    },{
                        name:'前端',
                        hot:false
                    },{
                        name:'设计',
                        hot:false
                    },{
                        name:'读书笔记',
                        hot:false
                    }

                ],
                navTitle:'全部'
            }
        },
        methods:{
            navClick(item){//控制左侧点击
                this.nav.find(it=>it.hot==true).hot=false;//获取之前元素为显示的元素
                item.hot=true;
                this.navTitle = item.name;
            }
        }
    }
</script>

<style scoped lang="less">
    .technology-box{
        /*display:flex;*/
        background-color: #f8f8f8;
        .content{
            display:flex;
        }
    }
    .left-nav{
        padding-top:127px;
        width:176px;
        flex-shrink: 0;
        & li{
            text-align:left;
            line-height:25px;
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: normal;
            color: #B6B6B6;
            cursor: pointer;
            &.hot{
                color:#222;
            }
        }
    }
    .right-cont{
        flex-grow: 1;
        .right-h{
            height:127px;
            line-height:127px;
        }
        .right-cont-box{

            .right-item-box{
                margin-bottom: 24px;
                display:flex;
                justify-content: space-between;
            }
            .right-item{
                cursor: pointer;
                width:325px;
                /*background-color: #42b983;*/
                border-radius: 8px;
                overflow:hidden;
                .right-item-top{
                    height:242px;
                    background: #D7D7D7;
                }
                .right-item-bom{
                    padding:24px;
                    box-sizing: border-box;
                    height:160px;
                    display:flex;
                    flex-direction: column;
                    background-color: #fff;
                    .item-title{
                        /*padding:24px;*/
                        /*box-sizing: border-box;*/
                        flex-grow: 1;
                        text-align: left;
                    }
                    .user-box{
                        height:30px;
                        flex-shrink: 0;
                        display:flex;
                        justify-content: space-between;
                        line-height:30px;
                        .user-img{
                            background:url(../../assets/home/user.png) no-repeat left center;
                            padding-left: 39px;
                        }

                    }
                }
            }
        }
    }
</style>
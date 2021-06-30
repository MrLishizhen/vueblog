<template>
    <div class="technology-box">
        <div class="content">
            <div class="left-nav">
                <ul>
                    <li class="hot">全部</li>
                    <li>前端</li>
                    <li>设计</li>
                    <li>读书笔记</li>
                </ul>
            </div>
            <div class="right-cont">
                <h3 class="right-h">
                    全部
                </h3>
                <div class="right-cont-box">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "technology"
    }
</script>

<style scoped lang="less">
    .technology-box{
        /*display:flex;*/
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
            & ul{
                width:100%;
                display:flex;
                flex-wrap: wrap;
            }

            & li{
                width:33.333333%;
                min-height:100px;
                flex: 1;
                margin:0 24px;
                background-color: #42b983;
                /* */

            }
        }
    }
</style>
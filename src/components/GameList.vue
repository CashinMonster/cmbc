<template>
    <ul id="gameLists">
        <li v-for="(item,index) in gameLists" :key="index">
            <div class="gameLeft">
                <img :src="item.picUrl" alt="">
            </div>
            <div class="gameCenter">
                <p class="name">{{item.goodsName}}</p>
                <p class="tags">{{item.tags}}</p>
            </div>
            <div class="gameRight">
                <a :href="item.jumpUrl">查看</a>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "GameList",
        metaInfo: {
            title: '游戏中心'
        },
        data (){
            return {
                gameLists: [
                    {
                        "bigGoodsName": "",
                        "goodsName": "王者荣耀",
                        "tags": "角色 | 回合制 | 日漫风 | 萌宠",
                        "picUrl": "../../static/img/356.png",
                        "jumpUrl":"javascript:void(0);"
                    },
                    {
                        "bigGoodsName": "",
                        "goodsName": "绝地求生：刺激战场绝地求生：刺激战场",
                        "tags": "角色 | 回合制 | 日漫风 | 萌宠",
                        "picUrl": "../../static/img/124139.png",
                        "jumpUrl":"javascript:void(0);"
                    },
                    {
                        "bigGoodsName": "",
                        "goodsName": "王者荣耀",
                        "tags": "角色 | 回合制 | 日漫风 | 萌宠",
                        "picUrl": "../../static/img/356.png",
                        "jumpUrl":"javascript:void(0);"
                    },
                    {
                        "bigGoodsName": "",
                        "goodsName": "绝地求生：刺激战场",
                        "tags": "角色 | 回合制 | 日漫风 | 萌宠",
                        "picUrl": "../../static/img/124139.png",
                        "jumpUrl":"javascript:void(0);"
                    }
                ],
            }
        },
        // beforeCreate(){
        //     document.getElementsByTagName("body")[0].setAttribute("style","background-color:rgb(249,249,249)");
        // },
        // destroyed(){
        //     document.getElementsByTagName("body")[0].setAttribute("style","background-color:#f3f3f3");
        //
        // }
    }
</script>

<style lang="scss" scoped>
    #gameLists{
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        padding-top: 20px;
        li{
            width: 100%;
            padding:20px 0;
            list-style: none;
            display: table;
            /*background-color: #fff;*/
            /*border-radius: 8px;*/
            margin-bottom: 20px;
            /*box-shadow: 0 3px 8px #ddd;*/
            /*border-bottom: 2px solid #eee;*/
            div{
                display: table-cell;
                vertical-align: middle;
            }
            .gameLeft{
                width: 20%;
                padding-left: 15px;
                box-sizing: border-box;
                img{
                    width: 100%;
                }
            }
            .gameCenter{
                width: 56%;
                padding-left: 4%;
                .name{
                    color: #333;
                    font-size: 30px;
                    padding: 5px 0;
                }
                .tags{
                    padding: 5px;
                    color: #999;
                    font-size: 26px;
                }
            }
            .gameRight{
                width: 20%;
                text-align: center;
                a{
                    display: inline-block;
                    text-decoration: none;
                    width: 100px;
                    height: 50px;
                    line-height: 55px;
                    background: linear-gradient(to right bottom, #ff3333, #ff4102);
                    color: #fff;
                    font-size: 26px;
                    border-radius: 6px;
                }
            }
        }
    }
</style>
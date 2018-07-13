<template>
    <div id="container" v-if="loading">
        <!--banner-->
        <div id="banner-wraper">
            <!--有多张banner图-->
            <swiper :options="swiperOption" ref="bannerSwiper" v-if="bannerLists.length > 1">
                <swiper-slide class="swiper-slide games" id="banner-slide" v-for="(item,index) in bannerLists" :key="index">
                    <a :href="item.jumpUrl">
                        <img :src="item.picUrl" alt="">
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" id="banner-pagination" slot="pagination"></div>
            </swiper>
            <!--只有一张banner图-->
            <div class="singleBanner" v-else>
                <a :href="bannerLists[0].jumpUrl">
                    <img :src="bannerLists[0].picUrl" alt="">
                </a>
            </div>
        </div>
        <!--拼手速-->
        <div id="pss-wraper">
            <div class="pss-container">
                <p class="pss-header">
                    <img src="../assets/img/pss-title.png" alt="">
                    &nbsp;<span class="left-title">拼手速</span><span class="right-title">0元购</span>
                </p>

                <!--多个0元购商品  使用swiper-->
                <swiper :options="pssSwiperOption" ref="pssSwiper" v-if="miaoshaLists.length > 1">
                    <swiper-slide class="swiper-slide games" v-for="(item,index) in miaoshaLists" :key="index">
                        <div class="pss-main">
                            <div class="pss-picture">
                                <img :src="item.picUrl" alt="">
                            </div>
                            <div class="pss-center">
                                <p class="goodsName">
                                    {{item.goodsName}}
                                </p>
                                <p>
                            <span class="price">
                                ￥<span class="priceNum">{{item.price}}</span>
                            </span>
                                    &nbsp;
                                    <span class="marketPrice">
                                市场价:<span class="marketPriceNum">￥{{item.marketPrice}}</span>
                            </span>
                                </p>
                                <div class="stock-wraper">
                                    <p>
                                        <span class="stockLine"></span>
                                    </p>
                                    <span class="stockNum">{{item.stockNum}}张</span>
                                </div>
                            </div>
                            <div class="pss-right">
                                <p class="countDown">
                                    距离开抢&nbsp;
                                    <span>10</span> : <span>28</span> : <span>08</span>
                                </p>
                                <p class="ljq-btn">
                            <span>
                                <img src="../assets/img/fire.png" alt="">
                                立即抢
                            </span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" id="banner-pagination" slot="pagination"></div>
                </swiper>
                <!--一个商品-->
                <div class="pss-main" v-else>
                    <div class="pss-picture">
                        <img src="../../static/img/aqy.png" alt="">
                    </div>
                    <div class="pss-center">
                        <p class="goodsName">
                            {{miaoshaLists[0].goodsName}}
                        </p>
                        <p>
                            <span class="price">
                                ￥<span class="priceNum">{{miaoshaLists[0].price}}</span>
                            </span>
                            &nbsp;
                            <span class="marketPrice">
                                市场价:<span class="marketPriceNum">￥{{miaoshaLists[0].marketPrice}}</span>
                            </span>
                        </p>
                        <div class="stock-wraper">
                            <p>
                                <span class="stockLine"></span>
                            </p>
                            <span class="stockNum">{{miaoshaLists[0].stockNum}}张</span>
                        </div>
                    </div>
                    <div class="pss-right">
                        <p class="countDown">
                            距离开抢&nbsp;
                            <span>10</span> : <span>28</span> : <span>08</span>
                        </p>
                        <p class="ljq-btn">
                            <span>
                                <img src="../assets/img/fire.png" alt="">
                                立即抢
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--跑马灯-->
        <div id="adcolumn-wraper">
            <div class="adcolumn-lists">
                <!--多个-->
                <swiper :options="adcolumnSwiperOption" ref="adcolumnSwiper" v-if="adcolumnLists.length > 1">
                    <swiper-slide class="swiper-slide games swiper-no-swiping" id="adcolumn-swiper-list" v-for="(item,index) in adcolumnLists" :key="index">
                        <a class="adcolumn-list" :href="item.jumpUrl">
                            <img :src="item.picUrl" alt="">
                            <span>{{item.text}}</span>
                        </a>
                    </swiper-slide>
                </swiper>
                <!--单个-->
                <a class="adcolumn-list" :href="adcolumnLists[0].jumpUrl" v-else>
                    <img src="../../static/img/adcolumn.png" alt="">
                    <span>{{adcolumnLists[0].text}}</span>
                </a>
            </div>
        </div>
        <!--限时活动-->
        <div id="timeLimit-wraper">
            <div class="timeLimit-header">
                <img src="../assets/img/clock.png" alt="">&nbsp;
                <span>限时活动</span>
            </div>
            <div class="timeLimit-container">
                <!--1个-->
                <div class="timeLimit-one-main" v-if="timeLimitLists.length == 1">
                    <a :href="timeLimitLists[0].jumpUrl">
                        <img :src="timeLimitLists[0].picUrl" alt="">
                    </a>
                </div>
                <!--2个-->
                <div class="timeLimit-two-main" v-else-if="timeLimitLists.length == 2">
                    <a :href="item.jumpUrl" v-for="(item,index) in timeLimitLists" :key="index">
                        <img :src="item.picUrl" alt="">
                    </a>
                </div>
                <!--多个-->
                <div class="timeLimit-more-main" v-else>
                    <swiper :options="timeLimitSwiperOption" ref="timeLimitSwiper">
                        <swiper-slide class="swiper-slide games" v-for="(item,index) in timeLimitLists" :key="index">
                            <a :href="item.jumpUrl">
                                <img :src="item.picUrl" alt="">
                            </a>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="timeLimit-bottom">
                <a :href="daySignJumpUrl">
                    <p>
                        <span>{{daySignInfo}}</span>
                        <img :src="qcjPicUrl" alt="">
                    </p>
                </a>
            </div>
            <img :src="daySignPicUrl" alt="" class="daySignPic">
        </div>
        <!--领优惠-->
        <div id="lyh-wraper">
            <div class="lyh-header">
                <img src="../assets/img/lyh-title.png" alt="">&nbsp;
                <span>领优惠</span>
                <a :href="lyhMoreUrl" v-if="lyhMoreUrl != ''">
                    更多 <span> ></span>
                </a>
            </div>
            <div class="lyh-container">
                <!--1个-->
                <div class="lyh-one-main" v-if="lyhLists.length == 1">
                    <div>
                        <a :href="lyhLists[0].jumpUrl">
                            <img :src="item.picUrl" :error="errorImg" alt="">
                            <div>
                                <p class="goodsName">{{lyhLists[0].goodsName}}</p>
                                <p class="price-wraper">
                                    <span class="price">{{lyhLists[0].price}}元</span>&nbsp;
                                    <span class="marketPrice">市场价：{{lyhLists[0].marketPrice}}元</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <!--2个-->
                <div class="lyh-two-main" v-else-if="lyhLists.length == 2">
                    <div v-for="(item,index) in lyhLists" :key="index" class="lyh-list">
                        <a :href="item.jumpUrl">
                            <img :src="item.picUrl" :error="errorImg" alt="">
                            <div>
                                <p class="goodsName">{{item.goodsName}}</p>
                                <p class="price-wraper">
                                    <span class="price">{{item.price}}元</span>&nbsp;
                                    <span class="marketPrice">市场价：{{item.marketPrice}}元</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <!--多个-->
                <div class="lyh-more-main" v-else>
                    <swiper :options="lyhSwiperOption" ref="lyhSwiper">
                        <swiper-slide class="swiper-slide games" v-for="(item,index) in lyhLists" :key="index">
                            <div class="lyh-list">
                                <a :href="item.jumpUrl">
                                    <img :src="item.picUrl" :error="errorImg" alt="">
                                    <div>
                                        <p class="goodsName">{{item.goodsName}}</p>
                                        <p class="price-wraper">
                                            <span class="price">{{item.price}}元</span>&nbsp;
                                            <span class="marketPrice">市场价：{{item.marketPrice}}元</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <!--游戏中心-->
        <div id="gameCenter-wraper">
            <div class="gameCenter-header">
                <img src="../assets/img/game-title.png" alt="">&nbsp;
                <span>游戏中心</span>
                <router-link to="./GameList" v-if="gameMoreUrl != ''">
                    更多 <span> ></span>
                </router-link>
            </div>
            <div class="gameCenter-container">
                <swiper :options="gameSwiperOption" ref="gameSwiper">
                    <swiper-slide class="swiper-slide games" v-for="(item,index) in gameLists" :key="index" v-if="index%2 == 0">
                        <a :href="gameLists[index].jumpUrl">
                            <div class="left">
                                <img :src="gameLists[index].picUrl" alt="">
                            </div>
                            <div class="right">
                                <p class="gameName">{{gameLists[index].goodsName}}</p>
                                <p class="tags">{{gameLists[index].tags}}</p>
                            </div>
                        </a>
                        <a :href="gameLists[index+1].jumpUrl">
                            <div class="left">
                                <img :src="gameLists[index+1].picUrl" alt="">
                            </div>
                            <div class="right">
                                <p class="gameName">{{gameLists[index+1].goodsName}}</p>
                                <p class="tags">{{gameLists[index+1].tags}}</p>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!--热门活动-->
        <div id="hotActivity-wraper">
            <div class="hotActivity-header">
                <img src="../assets/img/hot-title.png" alt="">&nbsp;
                <span>热门活动</span>
                <a :href="hotMoreUrl" v-if="hotMoreUrl != ''">
                    更多 <span> ></span>
                </a>
            </div>
            <div class="hotActivity-container">
                <ul>
                    <li v-for="(item,index) in hotActivityLists" :key="index" v-if="index%2 == 0">
                        <a :href="item.jumpUrl">
                            <img :src="item.picUrl" alt="">
                        </a>
                        <div>
                            <p class="goodsName">{{item.goodsName}}</p>
                            <p class="goodsInfo">
                                <span>{{item.tags}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in hotActivityLists" :key="index" v-if="index%2 != 0">
                        <a :href="item.jumpUrl">
                            <img :src="item.picUrl" alt="">
                        </a>
                        <div>
                            <p class="goodsName">{{item.goodsName}}</p>
                            <p class="goodsInfo">
                                <span>{{item.tags}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--免责声明-->
        <div id="mzsm-wraper">
            <p>
                天乐邦版权所有 · <a :href="mzsmJumpUrl">免责声明</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        metaInfo: {
            title: '招商银行信用卡'
        },
        data () {
            return {
                platcode:'',  //平台code
                loading: false,  //数据是否全部加载完
                errorImg: '../../static/img/miss.png',  //
                mzsmJumpUrl: 'javascript:void(0);',  //免责声明 url
                lyhMoreUrl: 'javascript:void(0);',  //领优惠 更多url
                gameMoreUrl: 'javascript:void(0);',  //游戏中心 更多url
                hotMoreUrl: 'javascript:void(0);',  //热门活动 更多url
                daySignPicUrl: '../../static/img/wheel.png',  //小招日签入口小图
                qcjPicUrl: '../../static/img/qcj.png',  //去抽奖图片
                daySignJumpUrl: 'javascript:void(0);',   //小招日签入口链接
                daySignInfo: '幸运大转盘每日抽奖，100%有礼！', //文字描述
                bannerLists: [
                    {
                        jumpUrl:'javascript:void(0);',
                        picUrl: '../../static/img/1.png'
                    },
                    {
                        jumpUrl:'javascript:void(0);',
                        picUrl: '../../static/img/1.png'
                    },
                    {
                        jumpUrl:'javascript:void(0);',
                        picUrl: '../../static/img/1.png'
                    }
                ], //banner位数据
                miaoshaLists: [
                    {
                        "goodsUuId": "xxxxxx",
                        "goodsName": "爱奇艺VIP黄金月卡",
                        "price": 0,
                        "marketPrice": 20.00,
                        "stockNum": 300,
                        "startTime": "2018-07-05 00:00:00",
                        "endTime": "2018-07-07 00:00:00",
                        "picUrl": "../../static/img/aqy.png",
                        "jumpUrl":"xxxx"
                    },
                    {
                        "goodsUuId": "xxxxxx",
                        "goodsName": "黄金",
                        "price": 0,
                        "marketPrice": 200.00,
                        "stockNum": 300,
                        "startTime": "2018-07-05 00:00:00",
                        "endTime": "2018-07-07 00:00:00",
                        "picUrl": "../../static/img/aqy.png",
                        "jumpUrl":"xxxx"
                    }
                ],
                adcolumnLists: [
                    {
                        'picUrl': '../../static/img/adcolumn.png',
                        'jumpUrl': 'javascript:void(0);',
                        'text': '刷到将近爱神的箭富士京东刷到将近爱神的箭富士京东刷到将近爱神的箭富士京东'
                    },
                    {
                        'picUrl': '../../static/img/adcolumn.png',
                        'jumpUrl': 'javascript:void(0);',
                        'text': '刷到将近爱神的箭富士京东'
                    },
                    {
                        'picUrl': '../../static/img/adcolumn.png',
                        'jumpUrl': 'javascript:void(0);',
                        'text': '刷到将近爱神的箭富士京东'
                    }
                ],
                timeLimitLists: [
                    {
                        'picUrl': '../../static/img/8.png',
                        'jumpUrl': 'javascript:void(0);',
                    },
                    {
                        'picUrl': '../../static/img/9.png',
                        'jumpUrl': 'javascript:void(0);',
                    },
                    {
                        'picUrl': '../../static/img/8.png',
                        'jumpUrl': 'javascript:void(0);',
                    }
                ],
                lyhLists: [
                    {
                        'picUrl': '../../static/img/shuke.png',
                        'jumpUrl': 'javascript:void(0);',
                        'goodsName': '舒克牙膏120元优惠券',
                        'price': '46',
                        'marketPrice': '120'
                    },
                    {
                        'picUrl': '../../static/img/shuke.png',
                        'jumpUrl': 'javascript:void(0);',
                        'goodsName': '舒克牙膏120元优惠券舒克牙膏120元优惠券舒克牙膏120元优惠券',
                        'price': '46',
                        'marketPrice': '120'
                    },
                    {
                        'picUrl': '../../static/img/shuke.png',
                        'jumpUrl': 'javascript:void(0);',
                        'goodsName': '舒克牙膏120元优惠券',
                        'price': '46',
                        'marketPrice': '120'
                    }
                ],
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
                        "goodsName": "绝地求生：刺激战场",
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
                hotActivityLists: [
                    {
                        "picUrl": "../../static/img/1.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "招行特惠，团iPhone X",
                        "tags": "[6月新福利]",
                        "cZhan":  115
                    },
                    {
                        "picUrl": "../../static/img/2.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "每天赢优酷VIP会员月卡每天赢优酷VIP会员月卡",
                        "tags": "[粉丝福利]",
                        "cZhan":  115
                    },
                    {
                        "picUrl": "../../static/img/1.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "招行特惠，团iPhone X",
                        "tags": "[6月新福利]",
                        "cZhan":  115
                    },
                    {
                        "picUrl": "../../static/img/4.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "每天赢优酷VIP会员月卡每天赢优酷VIP会员月卡",
                        "tags": "[粉丝福利]",
                        "cZhan":  115
                    },
                    {
                        "picUrl": "../../static/img/4.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "招行特惠，团iPhone X",
                        "tags": "[6月新福利]",
                        "cZhan":  115
                    },
                    {
                        "picUrl": "../../static/img/2.jpg",
                        "jumpUrl": "javascript:void(0);",
                        "goodsName": "每天赢优酷VIP会员月卡每天赢优酷VIP会员月卡",
                        "tags": "[粉丝福利]",
                        "cZhan":  115
                    }
                ],
                swiperOption: {
                    //banner图滑动
                    autoplay: {
                        disableOnInteraction: false, //用户操作后是否禁止自动循环
                        delay: 3000 //自自动循环时间
                    }, //可选选项，自动滑动
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: true, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    lazyLoadingInPrevNext: true,
                    pagination: {
                        el: '#banner-pagination',
                        type : 'bullets', //分页器形状
                        clickable: true, //点击分页器的指示点分页器会控制Swiper切换
                    }
                },
                pssSwiperOption:{
                    //0元购swiper
                    autoplay: {
                        disableOnInteraction: false, //用户操作后是否禁止自动循环
                        delay: 5000 //自自动循环时间
                    }, //可选选项，自动滑动
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: false, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                },
                adcolumnSwiperOption:{
                    //跑马灯swiper
                    autoplay: {
                        disableOnInteraction: false, //用户操作后是否禁止自动循环
                        delay: 4000 //自自动循环时间
                    }, //可选选项，自动滑动
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: true, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    direction: 'vertical'  //滚动方向
                },
                timeLimitSwiperOption:{
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: false, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    freeMode: true,
                    slidesPerView: 2.3,
                    spaceBetween:15
                },
                lyhSwiperOption: {
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: false, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    // freeMode: true,
                    slidesPerView: 2.4,
                    spaceBetween:10
                },
                gameSwiperOption: {
                    speed: 400, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop: false, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                    // freeMode: true,
                    slidesPerView: 2,
                    spaceBetween:8
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.bannerSwiper.swiper
            }
        },
        mounted (){
            this.loading = true;
            this.platcode = this.getParamString('platcode');
        },
        methods: {
            getParamString(name){
                var paramUrl = window.location.search.substr(1);
                var paramStrs = paramUrl.split('?');
                var params = {};
                for(var index = 0; index < paramStrs.length; index++) {
                    params[paramStrs[index].split('=')[0]] = decodeURI(paramStrs[index].split('=')[1]);
                }
                return params[name];
            }
        },
        created () {

        }
    }
</script>

<style lang="scss" scoped>
    a{
        color: #333;
        text-decoration: none;
    }
    #banner-wraper{
        width: 100%;
        #banner-slide{
            width: 100%;
            a{
                width: 100%;
                display: inline-block;
            }
        }
        .singleBanner{
            width: 100%;
            a{
                width: 100%;
                display: inline-block;
                img{
                    width: 100%;
                }
            }
        }
        .swiper-slide{
            width: 100%;
            display: inline-block;
            img{
                width: 100%;
                height: auto;
            }
        }
        #banner-pagination{
            .swiper-pagination-bullet{
                width: 20px;
                border-radius: 0;
            }
        }
        #banner-pagination {
            .swiper-pagination-bullet-active{
                background: white;
            }
        }
    }
    #pss-wraper{
        width: 100%;
        background-color: white;
        position: relative;
        top: -10px;
        .pss-container{
            width: 100%;
            padding: 30px;
            box-sizing: border-box;
            .pss-header{
                height: 30px;
                line-height: 30px;
                margin-bottom: 30px;
                display: inline-block;
                img{
                    height: 30px;
                    position: relative;
                    top: 2px;
                }
                .left-title{
                    color: #333;
                    font-size: 30px;
                    font-weight: 700;
                }
                .right-title{
                    color: #ff4102;
                    font-size: 30px;
                    font-weight: 700;
                }
            }
            .pss-main{
                width: 100%;
                box-sizing: border-box;
                display: table;
                .pss-picture{
                    width: 108px;
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 30px;
                    img{
                        width: 108px;
                    }
                }
                .pss-center{
                    width: 290px;
                    display: table-cell;
                    vertical-align: middle;
                    padding-right: 30px;
                    .goodsName{
                        font-size: 28px;
                        color: #333;
                    }
                    .price{
                        color: #ff4102;
                        font-size: 30px;
                        .priceNum{
                            font-size: 42px;
                            font-weight: 700;
                            position: relative;
                            top: 3px;
                        }
                    }
                    .marketPrice{
                        color: #999;
                        font-size: 20px;
                        position: relative;
                        top: -1px;
                        .marketPriceNum{
                            text-decoration: line-through;
                        }
                    }
                    .stock-wraper{
                        overflow: hidden;
                        p{
                            width: 180px;
                            height: 20px;
                            line-height: 22px;
                            border-radius: 10px;
                            border:1px solid #ff4102;
                            box-sizing: border-box;
                            overflow: hidden;
                            float: left;
                            .stockLine{
                                width: 100px;
                                height: 20px;
                                display: inline-block;
                                background: linear-gradient(to right,#ff4102,#ff9900);
                            }
                        }
                        .stockNum{
                            height: 20px;
                            line-height: 22px;
                            font-size: 18px;
                            color: #999;
                            display: inline-block;
                            float: left;
                            margin-left: 20px;
                        }
                    }

                }
                .pss-right{
                    width: 232px;
                    display: table-cell;
                    vertical-align: middle;
                    .countDown{
                        color: #999;
                        font-size: 20px;
                        font-weight: bold;
                        span{
                            display: inline-block;
                            padding: 2px 5px 0px;
                            background-color: #ff6633;
                            color: #fff;
                            font-weight: 100;
                        }
                    }
                    .ljq-btn{
                        width: 220px;
                        height: 60px;
                        font-size: 34px;
                        background-color: #ff4102;
                        color: #fff;
                        display: table;
                        margin-top: 20px;
                        border-radius: 30px;
                        span{
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                            position: relative;
                            top: -2px;
                            img{
                                width: 34px;
                                position: relative;
                                top: 8px;
                            }
                        }
                    }
                }
            }
        }
    }
    #adcolumn-wraper{
        width: 100%;
        height: 80px;
        padding: 0 30px;
        box-sizing: border-box;
        margin-top: -8px;
        background-color: #fff;
        overflow: hidden;
        .adcolumn-lists{
            width: 100%;
            height: 40px;
            padding: 20px 0;
            .adcolumn-list{
                display: inline-block;
                width: 100%;
                height: 40px;
                overflow: hidden;
                img{
                    width: 80px;
                    float: left;
                }
                span{
                    width: 580px;
                    display: block;
                    float: left;
                    font-size: 26px;
                    color: #333;
                    position: relative;
                    top: 2px;
                    margin-left: 20px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
    }
    #adcolumn-swiper-list{
        height: 10px;
    }
    #timeLimit-wraper{
        width: 100%;
        padding: 25px 30px;
        box-sizing: border-box;
        background-color: #ff4102;
        position: relative;
        .timeLimit-header{
            color: #fff;
            img{
                width: 34px;
                position: relative;
                top: 6px;
            }
            span{
                font-size: 30px;
                font-weight: 700;
            }
        }
        .timeLimit-container{
            width: 100%;
            margin-top: 25px;
            .timeLimit-one-main{
                width: 100%;
                a{
                    width: 70%;
                    display: inline-block;
                    margin-left: 15%;
                    border-radius: 25px;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
            }
            .timeLimit-two-main{
                width: 100%;
                overflow: hidden;
                a{
                    width: 48%;
                    display: inline-block;
                    float: left;
                    border-radius: 15px;
                    overflow: hidden;
                    &:nth-child(2){
                        margin-left: 4%;
                    }
                    img{
                        width: 100%;
                    }
                }
            }
            .timeLimit-more-main{
                width: 100%;
                overflow: hidden;
                a{
                    display: inline-block;
                    border-radius: 15px;
                    float: left;
                    overflow: hidden;
                    &:nth-child(2n){
                        margin-left: 4%;
                    }
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .timeLimit-bottom{
            width: 90%;
            height: 50px;
            border-radius: 25px;
            margin-left: 5%;
            margin-top: 30px;
            background-color: rgba(255,255,255,.8);
            display: table;
            a{
                width: 100%;
                display: table-cell;
                vertical-align: middle;
                p{
                    width: 100%;
                    position: relative;
                    span{
                        color: #ff4102;
                        font-size: 24px;
                        margin-left: 60px;
                    }
                    img{
                        height: 24px;
                        position: absolute;
                        right: 15px;
                        top: 5px;
                    }
                }
            }
        }
        .daySignPic{
            width: 80px;
            position: absolute;
            bottom: 17px;
            left: 40px;
        }
    }
    #lyh-wraper{
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;
        .lyh-header{
            img{
                height: 30px;
                position: relative;
                top: 3px;
            }
            span{
                font-size: 30px;
                color: #333;
                font-weight: 700;
            }
            a{
                font-size: 22px;
                color: #666;
                position: absolute;
                right: 30px;
                span{
                    font-size: 32px;
                    color: #ccc;
                    position: relative;
                    top: 2px;
                }
            }
        }
        .lyh-one-main{
            width: 100%;
            a{
                width: 70%;
                display: inline-block;
                border: 2px solid #eee;
                border-radius: 25px;
                box-sizing: border-box;
                overflow: hidden;
                margin-left: 15%;
                margin-top: 20px;
                img{
                    width: 100%;
                }
                div{
                    width: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                    .goodsName{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        font-size: 28px;
                        color: #333;
                    }
                    .price-wraper{
                        width: 100%;
                        .price{
                            font-size: 28px;
                            color: #ff3333;
                        }
                        .marketPrice{
                            font-size: 20px;
                            color: #999;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
        .lyh-two-main{
            width: 100%;
            overflow: hidden;
            .lyh-list{
                width: 48%;
                float: left;
                margin-top: 20px;
                overflow: hidden;
                border: 2px solid #eee;
                border-radius: 15px;
                box-sizing: border-box;
                &:nth-child(2){
                    margin-left: 4%;
                }
                a{
                    width: 100%;
                    display: inline-block;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                    div{
                        width: 100%;
                        padding: 10px 20px;
                        box-sizing: border-box;
                        .goodsName{
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                            font-size: 24px;
                            color: #333;
                        }
                        .price-wraper{
                            width: 100%;
                            .price{
                                font-size: 24px;
                                color: #ff3333;
                            }
                            .marketPrice{
                                font-size: 14px;
                                color: #999;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
        .lyh-more-main{
            width: 100%;
            .lyh-list{
                width: 100%;
                margin-top: 20px;
                overflow: hidden;
                border: 2px solid #f3f3f3;
                border-radius: 15px;
                box-sizing: border-box;
            }
            a{
                width: 100%;
                display: inline-block;
                overflow: hidden;
                img{
                    width: 100%;
                }
                div{
                    width: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                    .goodsName{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        font-size: 24px;
                        color: #333;
                    }
                    .price-wraper{
                        width: 100%;
                        .price{
                            font-size: 24px;
                            color: #ff3333;
                        }
                        .marketPrice{
                            font-size: 14px;
                            color: #999;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
    #gameCenter-wraper{
        width: 100%;
        padding: 30px;
        margin-top: 20px;
        background-color: #fff;
        box-sizing: border-box;
        .gameCenter-header{
            width: 100%;
            img{
                width: 34px;
                position: relative;
                top: 6px;
            }
            span{
                font-size: 30px;
                color: #333;
                font-weight: 700;
            }
            a{
                font-size: 22px;
                color: #666;
                position: absolute;
                right: 30px;
                span{
                    font-size: 32px;
                    color: #ccc;
                    position: relative;
                    top: 2px;
                }
            }
        }
        .gameCenter-container {
            width: 100%;
            margin-top: 20px;
            a{
                display: table;
                padding: 15px 0;
                .left{
                    width: 25%;
                    display: table-cell;
                    vertical-align: middle;
                    img{
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                .right{
                    display: table-cell;
                    vertical-align: middle;
                    padding-left: 10px;
                    .gameName{
                        width: 220px;
                        font-size: 28px;
                        color: #333;
                        padding: 5px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                    .tags{
                        width: 220px;
                        font-size: 22px;
                        color: #999;
                        padding: 5px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                }
            }
        }
    }
    #hotActivity-wraper{
        width: 100%;
        background-color: rgb(249,249,249);
        margin-top: 20px;
        /*padding-bottom: 40px;*/
        .hotActivity-header{
            width: 100%;
            padding: 30px;
            box-sizing: border-box;
            background-color: #fff;
            img{
                height: 34px;
                position: relative;
                top: 5px;
            }
            span{
                font-size: 30px;
                font-weight: 700;
                color: #333;
            }
            a{
                font-size: 22px;
                color: #666;
                position: absolute;
                right: 30px;
                span{
                    font-size: 32px;
                    color: #ccc;
                    position: relative;
                    top: 2px;
                }
            }
        }
        .hotActivity-container{
            width: 100%;
            overflow: hidden;
            padding: 10px 0;
            padding-right: 15px;
            padding-bottom: 20px;
            box-sizing: border-box;
            ul{
                width: 50%;
                padding: 15px 0;
                padding-top: 0;
                padding-left: 15px;
                box-sizing: border-box;
                /*border: 1px solid red;*/
                float: left;
                li{
                    width: 100%;
                    list-style: none;
                    background-color: #fff;
                    border-radius:15px;
                    overflow: hidden;
                    box-shadow: 0 3px 8px #ddd;
                    margin-top: 20px;
                    a{
                        width: 100%;
                        display: inline-block;
                        img{
                            width: 100%;
                        }
                    }
                    div{
                        width: 100%;
                        padding: 8px 15px 15px;
                        box-sizing: border-box;
                        .goodsName{
                            font-size: 26px;
                            height: 38px;
                            width: 100%;
                            line-height: 38px;
                            color: #333;
                            font-weight: 700;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                        }
                        .goodsInfo{
                            span{
                                font-size: 18px;
                                color: #ff3333;
                            }
                        }
                    }
                }
            }
        }
    }
    #mzsm-wraper{
        width: 100%;
        height: 80px;
        background-color: rgba(51,51,51,0.7);
        display: table;
        p{
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            color: #ccc;
            font-size: 24px;
            a{
                color: cornflowerblue;
            }
        }
    }
</style>
<template>
    <div id="purchase-wraper">
        <div class="purchase-header">
            <!--1张banner图-->
            <a :href="bannerLists[0].jumpUrl" v-if="bannerLists.length == 1">
                <img :src="bannerLists[0].picUrl" alt="">
            </a>
            <!--多张banner图-->
            <swiper :options="swiperOption" ref="bannerSwiper" v-else>
                <swiper-slide class="swiper-slide games" id="banner-slide" v-for="(item,index) in bannerLists" :key="index">
                    <a :href="item.jumpUrl">
                        <img :src="item.picUrl" alt="">
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" id="banner-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Purchase",
        metaInfo: {
            title: '0元抢购'
        },
        data (){
            return {
                bannerLists:[
                    {
                        'picUrl': '../../static/img/b1.jpg',
                        'jumpUrl': 'javascript:void(0);'
                    },
                    {
                        'picUrl': '../../static/img/b1.jpg',
                        'jumpUrl': 'javascript:void(0);'
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
            }
        }
    }
</script>

<style scoped lang="scss">
    #purchase-wraper{
        width: 100%;
        .purchase-header{
            width: 100%;
            a{
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>
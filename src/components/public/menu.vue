<template>
    <div class="menu">
        <img :src="img" alt="">
    </div>

</template>

<script>
    export default {
        data (){
            return {
                img: this.$parent.img
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>
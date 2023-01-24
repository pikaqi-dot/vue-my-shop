<!--
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2023-01-23 22:38:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-23 23:04:12
-->

<template>
    <div class="star" :class="starType">
        <!-- <span v-for=""></span> -->
        star
    </div>
</template>
<script>
export default{
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    computed:{
        starType(){
            return 'star-'+this.size
        }
    }
}
</script>

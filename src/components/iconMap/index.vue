<template lang="html">
    <span class="iconMap" :class="iconClassMap[iconType]"></span>
</template>

<script>
export default{
    props:{
        iconType:Number
    },
    created(){
        this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
}
</script>

<style lang="stylus" scoped>
@import './stylus/index.less'

</style>
<template>
    <div class="star" :class="starType">
        <!-- <span v-for=""></span> -->
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
            return 'star-'+this.size;
        },
        itemClasses(){
          let result=[]
          let score=Math.floo
        }
    },


}
</script>

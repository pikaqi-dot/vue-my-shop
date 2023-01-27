<template>
    <div @click="show()">
        GOODS
    </div>
</template>

<script>
export default{
  props:{
    seller:{
        type:Object,
    },
  },
  methods:{
    show(){
        console.log(this.seller)
    }

  }

}
</script>
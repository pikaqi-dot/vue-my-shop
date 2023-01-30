<template>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods">
            <span class="text">
              {{item.name}}
            </span>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
import axios from "axios"
import BScroll from "better-scroll"
export default{
  props:{
    seller:{
        type:Object,
    },
  },
  data(){
      return{
      goods:[],
    }
  },
  created(){
      axios.get("static/data.json").then(res=>{
          this.goods=res.data.goods
          this.$nextTick(()=>{
              this._initScroll();
              
          })
      })
   },
  methods:{
      _initScroll(){
          this.menuWrapper=new BScroll(this.$refs.menuWrapper,{click:true});
          
      }
  }
  }


</script>

<style lang="stylus" scoped>
@import "stylus/index.styl"
</style>
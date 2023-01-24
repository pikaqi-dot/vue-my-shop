<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description + " / " + seller.deliveryTime + "分钟送达" }}
        </div>
        <div class="supports" v-if="seller.supports">
          <div class="supports_desc">
            <span class="icon" :class="iconClassMap[seller.supports[0].type]"></span>
            <span class="text">{{ seller.supports[0].description }}</span>
          </div>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetails()">
        <span class="count">{{ seller.supports.length + "个" }}</span>
        <i class="iconfont icon-jinrujiantou"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetails()">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="iconfont icon-jinrujiantou bulletin-icon"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <transition name="fade">
      <div v-if="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{ seller.name }}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="detail-close"><i class="iconfont icon-guanbi" @click="hideDetail()"></i></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import star from '../star'
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  components:{
    star
  },
  created() {
    this.iconClassMap = [
      "decrease",
      "discount",
      "special",
      "invoice",
      "guarantee",
    ];
  },
  data() {
    return {
      detailShow: false,
    };
  },
  methods: {
    showDetails() {
      this.detailShow = true;
      console.log('this.detailShow',this.detailShow);
    },
    hideDetail() {
      this.detailShow = false;
      console.log('this.detailShow',this.detailShow);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import './stylus/index.styl';
</style>

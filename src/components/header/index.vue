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
            <span
              class="icon"
              :class="iconClassMap[seller.supports[0].type]"
            ></span>
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
            <i
              class="iconfont icon-guanbi"
              @click="hideDetail()"
              style="width:100px,height:100px"
            ></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
    },
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
      console.log(this.detailShow);
    },
    hideDetail() {
      this.detailShow = false;
      console.log(this.detailShow);
    },
  },
};
</script>

<style lang="stylus" scoped>
.header {
  position: relative;
  blur: 10px;
  overflow: hidden;

  .content-wrapper {
    position: relative;
    display: flex;
    padding: 24px 12px 18px 24px;
    font-size: 12px;

    .avatar {
      img {
        border-radius: 10px;
      }
    }

    .content {
      margin-left: 16px;

      .title {
        margin: 2px 0px 8px 0px;
        font-size: 16px;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          background-image: url('img/brand@2x.png');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 10px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .description {
        font-size: 12px;
        margin-bottom: 10px;
      }

      .supports {
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 4px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          vertical-align: top;

          &.decrease {
            background-image: url('img/decrease_1@2x.png');
          }
        }

        .text {
          line-height: 16px;
          font-size: 10px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      line-height: 24px;
      height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;

      .count {
        vertical-align: top;
        font-size: 10px;
      }
    }
  }

  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      background-image: url('img/bulletin@2x.png');
      width: 22px;
      height: 12px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
    }

    .bulletin-text {
      font-size: 10px;
      vertical-align: middle;
      margin: 0 4px;
    }

    .bulletin-icon {
      position: absolute;
      font-size: 10px;
      right: 12px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(10px);
  }

  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
  }
}
</style>
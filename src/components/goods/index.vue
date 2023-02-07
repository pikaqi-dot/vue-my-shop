<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" @click="menuClick(index, $event)"
          :class="index == menuCurrentIndex ? 'menu-item-selected' : 'menu-item'">
          <span class="text">
            <iconMap v-show='item.type>0'  :iconType="item.type"></iconMap>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" id="wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1>{{ item.name }}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item"  >{{ food.name }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import BScroll from "better-scroll"
import iconMap from '../iconMap'
export default {
  props: {
    seller: {
      type: Object,
    },
  },
  components: {
    iconMap
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      foodsScrollY: 0
    }
  },
  computed: {
    menuCurrentIndex() {
      for (let i = 0, len = this.listHeight.length; i < len; i++) {
        let topHeight = this.listHeight[i];
        let bottomHeight = this.listHeight[i + 1];
        if (!bottomHeight || (this.foodsScrollY >= topHeight && this.foodsScrollY < bottomHeight)) {
          console.log(i)
          return i;
        }
      }

    }
  },
  created() {
    axios.get("static/data.json").then(res => {
      this.goods = res.data.goods
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();

      })
    })
  },
  methods: {
    _initScroll() {
      this.menuWrapper = new BScroll(this.$refs.menuWrapper, { click: true });
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3,
        bounce: false
      }),
        this.foodScroll.on('scroll', pos => {
          this.foodsScrollY = Math.abs(Math.round(pos.y))
        })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook');
      let height = 0;
      this.listHeight.push(height)
      for (let i = 0, len = foodList.length; i < len; i++) {
        height += foodList[i].clientHeight;
        this.listHeight.push(height);
      }
      console.log(this.listHeight)
    },
    menuClick(index, event) {
      if (!event._constructed) return;
      this.foodScroll.scrollTo(0, -this.listHeight[index], 300)

    }
  }
}

</script>

<style lang="stylus" scoped>
@import "stylus/index.less"
</style>
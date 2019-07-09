<template>
  <div class="goods">
    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="goback"
      @click-right="share"
    />
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">
          运费：
          {{shopid}} | {{ goods.express }}
        </van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">皓然的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>
<script>
export default {
  created() {
    this.$route.query.id;
    console.log(this.shopid);
  },
  computed: {
    shopid() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      goods: {
        title: "烟台红富士苹果（单果190-240g）",
        price: 6880,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img11.360buyimg.com/n1/jfs/t19927/93/671550299/292209/2d38f1e4/5b05395bNb9f0ee2f.jpg",
          "https://img11.360buyimg.com/n1/jfs/t20950/277/233825024/271015/71e27b3f/5b05395aN7ba73be4.jpg"
        ]
      }
    };
  },
  methods: {
    // 分享
    share() {},
    // 返回
    goback() {
      this.$router.push("/list1");
    },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("/car");
    },
    sorry() {
      this.$toast("加入失败");
    }
  }
};
</script>

<style lang="less">
.goods {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow-y: scroll;
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>

<template>
  <div class="goods">
    <share  class="share" :config="config" v-show="sharshow"></share>
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
          {{shopid}} |{{ goods.express }}
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
import { getDetail } from "../api";
export default {
  created() {
    this.getD();
  },
  computed: {
    shopid() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      sharshow:false,
      goods: {
        // title: "美国伽力果（约680g/3个）",
        // price: 2680,
        // express: "免运费",
        // remain: 19,
        // thumb: [
        //   "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
        //   "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        // ]
      },
      config: {
        disabled: [
          "wechat",
          "google",
          "facebook",
          "twitter",
          "douban",
          "weibo",
          "diandian",
          "linkedin"
        ] // 禁用的站点
      }
    };
  },
  methods: {
    //详情数据请求
    async getD() {
      try {
        let { data } = await getDetail(this.shopid);
        this.goods = data;
      } catch (e) {
        console.log(e);
      }
    },
    // 分享
    share() {
      this.sharshow = !this.sharshow;
    },
    // 返回
    goback() {
      this.$router.go(-1);
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

</style>
<style lang="less">
.share{
  position: fixed;
  top: 160px;
  z-index: 1000;
  right: 20px;
}
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

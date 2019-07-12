<template>
  <div>
    <h-nav>购物车</h-nav>
    <van-nav-bar
      title="详情"
      left-text="返回"
      right-text="分享"
      left-arrow
      @click-left="goback"
      @click-right="share"
    />
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import HNav from '../components/HNave';

export default {
  components: {
    HNav,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: ["1", "2", "3"],
      goods: [
        {
          id: "1",
          title: "国产高山香甜自然熟香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img10.360buyimg.com/n1/jfs/t1/72896/31/3706/151809/5d1f22f2E6901c56d/72cbb9acb18aaaaf.jpg"
        },
        {
          id: "2",
          title: "新鲜酸草莓",
          desc: "约600g",
          price: 690,
          num: 1,
          thumb:
            "https://img13.360buyimg.com/n1/jfs/t1/8261/6/5473/817476/5bde6ed3Efe0e1bed/6ab1529092f02982.jpg"
        },
        {
          id: "3",
          title: "烟台红富士苹果",
          desc: "单果190-240g",
          price: 2680,
          num: 1,
          thumb:
            "https://img11.360buyimg.com/n1/jfs/t19927/93/671550299/292209/2d38f1e4/5b05395bNb9f0ee2f.jpg"
        }
      ]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },
  methods: {
	   // 分享
    share() {},
    // 返回
    goback() {
      this.$router.push("/list");
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    }
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
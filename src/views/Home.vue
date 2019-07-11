<template>
  <div>
    <div v-if="showloading" class="loading">
      <van-loading type="spinner" color="blue" size="50px" vertical>加载中...</van-loading>
    </div>
    <div class="container" v-else>
      <Banner :swiperSlides="slider" />
      <ul class="homelist">
        <li v-for="item in homelist" :key="item.id">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
// import * as obj from "../api";
// console.log(obj.getBanner.toString())
import { getHomeAll } from "../api";
export default {
  name: "home",
  created() {
    // ajax 异步 越早发送越好 一般放 created
    this.getAll();
  },
  data() {
    return {
      slider: [],
      homelist: [],
      showloading: true
    };
  },
  components: {
    Banner
  },
  methods: {
    async getAll() {
      let [{ banner }, { list }] = await getHomeAll();
      this.slider = banner;
      this.homelist = list;
      // setTimout 只是为了模拟网速慢，写项目时候不用写
      setTimeout(() => {
        this.showloading = false;
      }, 1000);
      //let res = await getHomeAll();
      //res = [{code:200,banner:[...]},{code:200,list:[...]}]
    }
  }
};
</script>
<style scoped>
.loading{
  padding-top: 40%
}
.homelist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.homelist li {
  width: 50%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homelist li img {
  width: 90%;
  border-radius: 5px;
}
</style>

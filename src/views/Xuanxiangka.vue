<template>
  <div>
    选项卡
    <ul class="tab">
      <li
        :class="{active:tindex==index}"
        v-for="(item,index) in a"
        :key="index"
        @click="tabchange(index)"
      >{{item}}</li>
    </ul>
    <div v-for="(item,index) in b" :key="index">
      <span v-if="index ==tindex">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: ["沙发", "衣柜", "地毯"],
      b: ["电脑", "空调", "电视"],
      tindex: 0 //默认选中的索引
    };
  },
  methods: {
    tabchange(index) {
      // 0 1 2 把tindex 等于当前点击的index
      this.tindex = index;
    }
  }
};
</script>
<style lang="less">
.tab {
  display: flex;
  li {
    margin: 20px;
    background: salmon;
    &.active {
      //&.active = li.active
      background: blue;
    }
  }
}
</style>
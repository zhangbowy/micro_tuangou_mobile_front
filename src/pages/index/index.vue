<template>
  <view class="content">
    <view class="text-area">
      <text class="title">
        {{ name }}
      </text>
      <view

        v-for="item in list"
        :key="item.id"
      >
        {{ this.v }}
        {{ item.id }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {namespace} from 'vuex-class';
  //获取要使用的module
  const TestModule = namespace('testModule');
  @Component({})
  export default class Index extends Vue {
    private title: String = 'myTitle'; //响应式属性
    private num: Number = 123; //对标之前的data函数返回的对象
    get age(): String {
      //计算属性
      return `${this.num}${this.name}`;
    }

    mounted() {
      console.log('mounted', this.$u.config);
    }

    @TestModule.Action('checkout') actionCheckout!: Function;
    // name类型 为如下之一
    @TestModule.Getter('name') name!: string[] | string | number;
    @TestModule.Getter('list') list!: [];

    checkout(): void {
      this.actionCheckout([{id: 53, quantity: 33}]);
    }



    
    onLoad() {
      this.checkout();
      console.log('onload');
    }
    @Watch('title') //watch，此处是监听title的变化
    titleChange(newVal: Number, oldVal: Number) {
      console.log(newVal, oldVal);
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 200rpx;
    height: 200rpx;
    margin-top: 200rpx;
    margin-right: auto;
    margin-bottom: 50rpx;
    margin-left: auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

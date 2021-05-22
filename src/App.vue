<template>
  <div id="app">
    <button @click="show1">组件形式打开</button>
    <button @click="show2">调用方法打开</button>
    <VDPhoto 
      ref="VDPhoto"
      :imgArr='imgArr'
    >
    </VDPhoto>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: require('../public/demo1.gif'),
      imgArr: [require('../public/demo1.gif'), require('../public/logo.png')],
      imgName: '图片名',
    }
  },
  methods: {
    show1() {
      this.$refs.VDPhoto.show()
    },
    show2() {
      this.$VDPhoto.show({
        imgData: require('../public/logo.png'),
        imgName: '图片名',
        title: '',
        width: '500px'
      });
    }
  }
}
</script>

<style>

</style>

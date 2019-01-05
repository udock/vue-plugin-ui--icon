<template>
  <i :class="classes" :style="styles"></i>
</template>
<script>
// import fontList from '../fonts'
const prefixCls = 'u-icon'

export default {
  name: 'UIcon',
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  computed: {
    classes () {
      return `${prefixCls} ${prefixCls}-${this.type}`
    },
    // fontStr () {
    //   // html &#xf355 js \x
    //   // return String.fromCharCode(fontList[this.type])
    //   return fontList[this.type]
    // },
    styles () {
      let style = {}

      if (this.size) {
        style['font-size'] = `${this.size}px`
      }

      if (this.color) {
        style.color = this.color
      }

      return style
    }
  }
}
</script>

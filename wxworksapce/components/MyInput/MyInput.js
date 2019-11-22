// components/MyInput/MyInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput(e) {
      let myDetail = {
        value:e.detail.value,
      }
      this.triggerEvent('myevent',myDetail);
    },
    resetClick() {
      this.setData({
        inputValue: ''
      })
    },
  }
})

// components/Mytitle/MyTitle.js
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
    toHome: function () {
      console.log("124");
      wx.reLaunch({
        url: '../../pages/medicineM/medicineM'
      });
    }
  }
})

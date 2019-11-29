//medicineM.js
var app = getApp();
var { factoryList } = app.globalData;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    factoryList: app.globalData.factoryList,
    region: ['省份', '市级', '地区'],
    customItem: '全部'
  },
  //自定义事件 
  refresh: function () {
    wx.redirectTo({
      url: './factory',
    });
  },
  toFeedback() {
    wx.navigateTo({
      url: '../feedback/feedback',
    });
  },
  toPersonal() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  toFactory() {
    wx.navigateTo({
      url: '../factory/factory'
    })
  },
  search: function (e) {
    const searchData = e.detail.value;
    let newData = app.globalData.factoryList.filter((item) => {
      for (let key in item) {
        var string = item[key].toString();
        if (string.indexOf(searchData) >= 0) {
          return true;
        }
      }
      return false;
    });
    this.setData({
      factoryList: newData,
    });
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const pickerData = e.detail.value;
    const newFactoryData = app.globalData.factoryList.filter((item) => {
      for (let key in item) {
        for (let value of pickerData) {
          var string = item[key].toString();
          if (string.indexOf(value) >= 0) {
            return true;
          }
        }
      }
    });
    console.log(newFactoryData);
    this.setData({
      region: e.detail.value,
      factoryList: newFactoryData,
    });
  },

})

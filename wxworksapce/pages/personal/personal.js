var util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    docName: '',
    showSign: true
  },
  toFeedback() {
    wx.navigateTo({
      url: '../feedback/feedback',
    });
  }, 
  toFactory(){
    wx.navigateTo({
      url: '../factory/factory',
    });
  },
  toCallPhone() {
    util.callPhone();
  },
  signOk(e) {
    this.setData({
      docName: e.detail.value
    });
    var that = this;
    wx.showModal({
      title: '提示',
      content: '请确认你的签名',
      success(res) {
        if (res.confirm) {
          that.setData({
            showSign: false
          })
        } else if (res.cancel) {
          return
        }
      }
    })
  },
  pay() {
    wx.showModal({
      title: '支付',
      content: '是否继续支付',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
          return
        }
      }
    })

  },
  refresh:function(){
    wx.redirectTo({
      url: './personal',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
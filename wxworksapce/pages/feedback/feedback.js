var util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    illness: true,
    userdurg: true,

  },
  click() {
    this.setData({
      illness: false
    })
  },
  click2() {
    this.setData({
      userdurg: false
    })
  },
  toCallPhone() {
    util.callPhone();
  },
  submit() {
    wx.showToast({
      title: '谢谢你的反馈',
      icon: 'success',
      duration: 2000
    });
    this.setData({
      userdurg: true,
      illness: true
    })
  },
  refresh:function(){
    wx.redirectTo({
      url: './feedback',
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
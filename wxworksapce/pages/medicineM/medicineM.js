//medicineM.js
var app = getApp();
var {bgMusic} = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:1,
  },

  //自定义事件
  refresh:function(){
    wx.redirectTo({
      url: './medicineM',
    })
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
    bgMusic.title = 'hospital';
    bgMusic.src = 'https://m701.music.126.net/20191121171000/490f2bc437bfe16f3549c8a6c8fc8d54/jdyyaac/0553/535f/5152/296e44119ed52c24cdc4f80330096bfc.m4a';
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
